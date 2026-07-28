---
title: "How We Cut Pipeline Latency by 85% With Adaptive Buffering"
description: "A static buffer is a guess. An adaptive one is a feedback loop. Here's how we replaced ours and what the p99 graph did next."
date: 2026-04-10
author: alex-morgan
tags: ["latency", "buffering", "performance"]
category: "Engenharia"
image: "/blog/dot-adaptive-buffering.webp"
---

The default in most stream processors is a fixed buffer: hold 256KB, then
flush. It's simple, predictable, and wrong at every workload that isn't the one
the default was tuned for.

> "A constant in your pipeline is a guess about the future. The future
> doesn't care."

## The diagnosis

Nossa p99 was sawtoothing between 80ms and 500ms. The cause turned out to be
trivial in hindsight:

- **Under low traffic**, the buffer never filled, so events waited the full
  flush timer before going out.
- **Under high traffic**, the buffer overflowed and we queued in the kernel.
- **In the transition between regimes**, both pathologies fought each other,
  which is where the sawtooth came from.

A fixed buffer is two bad regimes glued juntas.

## The fix

The flush threshold is now a function of the rolling 5-second event rate. The
controller has three modes:

1. **Cold path** (under 1K events/s): flush every 5ms regardless of fill. We
   prioritize freshness over batching here.
2. **Warm path** (1K–50K events/s): linear interpolation between time-based
   and size-based flush. The mode itself is the gradient.
3. **Hot path** (50K+ events/s): let it fill to 512KB before flushing. The
   syscall amortization actually helps at this rate.

We also added a "panic flush" — if the queue depth crosses 80% we drop the
size threshold immediately. Better to do an undersized syscall than to spike
a producer's tail.

## The graph

The p-tail came down hard:

- **p99**: 240ms → 36ms
- **p99.9**: 1.4s → 110ms
- **mean**: barely moved (within margin of error)

That last bullet is the right shape — we didn't get faster, we got **less
variable**. Means are noisy. Tails tell the truth.
