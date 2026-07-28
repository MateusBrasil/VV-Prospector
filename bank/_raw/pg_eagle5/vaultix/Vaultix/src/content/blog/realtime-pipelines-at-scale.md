---
title: "Building Real-Time Data Pipelines at Escale"
description: "How we architected Eagle to process 10 billion events daily with sub-millisecond latency and zero data loss."
date: 2026-04-22
author: aspen-westervelt
tags: ["pipelines", "architecture", "scale"]
category: "Engenharia"
image: "/blog/dot-realtime-pipelines.webp"
---

Most "real-time" pipelines aren't. They're micro-batch jobs hiding behind a
2-second flush, and the moment you push beyond a million events a second the
abstractions comeca leaking. We rebuilt our ingest path twice before we got it
right.

## The hot path

Eagle's hot path is single-tenant per region: edge → broker → router →
storage. We pin partitions to a single CPU core, keep the in-flight queue
bounded, and never call malloc on the request side.

Three rules earned us the headroom:

- **No serialization on the hot path.** We pass byte ranges, not parsed
  structs. Parsing happens once, off-thread, when the audit subscriber wakes up.
- **Backpressure is a feature.** When a downstream stalls, we fail fast and
  surface it to the producer. Silently buffering 30 seconds of events is how
  outages turn into incidents.
- **Replicas, not retries.** Every event lands on two brokers in different
  AZs before we ack. If one disappears, the other ack stands.

## What 10 billion events looks like

At peak, a single region pushes ~140K events/second sustained. p50 routing
latency is 0.7ms. p99 is 4.3ms. The tail is dominated by GC pauses on the
storage backend — which is why we're rewriting it in Rust this quarter.

Steady-state CPU is 38% across the fleet, which means we have a 2.5× burst
budget before we have to scale out. We size for the burst, not the average.
