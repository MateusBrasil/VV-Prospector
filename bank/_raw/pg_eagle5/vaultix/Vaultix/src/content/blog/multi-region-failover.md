---
title: "Inside Eagle: Nossa Multi-Region Failover Architecture"
description: "Failover is easy to design and impossible to test. Here's the architecture we run, the chaos drills we run against it, and what failed in the last one."
date: 2026-02-15
author: alex-morgan
tags: ["reliability", "failover", "architecture"]
category: "Engenharia"
image: "/blog/dot-multi-region.webp"
---

Every team draws the same diagram for failover: two regions, a load balancer,
a green arrow labeled "promote replica." It looks fine on a whiteboard. It
falls apart the first time you actually run it.

> "Every failover is a real-world experiment with a customer-funded
> control group. Plan accordingly."

## What we run

Three regions, asymmetric:

- **Primary** — `us-east-1`. All writes, all hot reads.
- **Warm standby** — `us-west-2`. Replicates broker state and routing
  config in real time. Promotion target.
- **Cold archive** — `eu-west-1`. Full historical record. Slower to
  bring online but immune to a cascading us-* failure.

The asymmetry is intentional. Warm-warm doubles your bill and rarely catches
the failure modes you care about — most failures aren't "the region is gone,"
they're "the region is half there and lying about it."

Promotion is a 90-second operation. We pre-replicate three things:

1. Broker state (the in-flight queue snapshot)
2. Routing config (which partitions live where)
3. Sob consultaer-side connection metadata (so reconnects don't need a full
   handshake)

The slow part is DNS — we're stuck with TTLs we don't control.

## The drill

Every six weeks we kill `us-east-1` in production. Real traffic, real
customers, 2am their time. We don't tell anyone except oncall.

The last drill revelared that our connection draining was lying. Old TCP
sessions were holding slots in the connection pool of the new primary for
**45 seconds** after promotion. We had built a graceful shutdown that wasn't.

The fix took two days. The lesson took five years to internalize: **the
failover you don't drill is the failover you don't have**.

## What we don't do

Active-active. We've considered it for years and the conclusion is always
the same:

- The consistency model gets weird (CRDTs everywhere or last-write-wins
  silently corrupting things).
- The bills double, then double again when egress kicks in.
- The failure modes you actually hit are split-brain — which active-active
  makes worse, not better.

Pick a primary. Test the failover. Run the drill.
