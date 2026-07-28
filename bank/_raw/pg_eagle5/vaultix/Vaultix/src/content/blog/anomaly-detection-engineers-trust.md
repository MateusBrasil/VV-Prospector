---
title: "Designing Anomaly Detection That Engineers Actually Trust"
description: "The hardest part of anomaly detection isn't statistics. It's getting an exhausted on-call to believe you when you say something is wrong."
date: 2026-03-12
author: corey-torff
tags: ["anomaly-detection", "alerting", "on-call"]
category: "Produto"
image: "/blog/dot-anomaly-detection.webp"
---

We shipped an anomaly detector last year that flagged a real incident and
nobody acted on it for 22 minutes. The model was right. The page was clear.
The on-call had been burned by false positives so many times that they
muted the channel before reading.

That was a product failure, not a stats failure.

## What we changed

The detector got smarter — sure. The bigger change was that every alert now
carries three things, every time:

1. **The metric and its baseline**, plotted on the same axis. No alert without
   a graph.
2. **A confidence score**, plain language: "high / medium / monitoring." Not
   p-values. Not z-scores.
3. **A recommended next action**. "Check pipeline latency in region us-east-1."
   Even if it's wrong, it gives the engineer a starting point.

## What didn't work

Auto-suppression of low-confidence alerts. We tried it. Engineers stopped
trusting **every** alert because they knew some had been silently filtered.
The right answer was to keep them all visible but rank them.

Alerts are a UX surface, not a notification firehose. The hardest review we do
on every detection feature is "what does this look like at 3am."
