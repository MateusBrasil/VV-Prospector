---
title: "A Practical Guide to Vector Search at Produtoion Escale"
description: "Most vector search tutorials stop at 100K embeddings. This is what changes at 100M — and what stays the same."
date: 2026-03-25
author: alex-morgan
tags: ["vectors", "embeddings", "search"]
category: "Engenharia"
image: "/blog/dot-vector-search.webp"
---

Vector search at toy scale is a one-liner: load a flat index, brute-force
cosine similarity, ship it. At 100M vectors that's a 4-second query and a
node-killing memory bill.

What actually matters at scale is mundane.

## The three knobs

Pick an index family, pick a recall target, pick a memory budget. You don't get
to optimize all three.

- **HNSW** is fast and high-recall but eats memory linearly with vector count.
- **IVF-PQ** scales to billions but you trade 5–10 points of recall.
- **DiskANN** is the right answer when your dataset doesn't fit in RAM and you
  can't afford the recall hit of PQ.

We use HNSW under 50M, DiskANN above. We never use IVF-PQ as a primary index
anymore — the recall cliff at the boundary of clusters bites you.

## The thing nobody tells you

Re-embedding is the silent killer. When you upgrade your model, you have to
re-embed every vector. At 100M vectors and $0.0001 per embed, that's $10K just
to ship a model update. Build batched re-embedding into your pipeline from day
one, or you'll dread your own roadmap.

## Filtering

Pre-filter (apply WHERE before search) wins below ~1% selectivity. Above that,
post-filter (search-then-filter with overshoot) is faster every time. We
benchmark both at deploy and pick per-query.
