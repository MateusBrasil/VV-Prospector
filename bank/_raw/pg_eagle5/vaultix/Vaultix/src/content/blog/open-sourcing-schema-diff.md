---
title: "Why We Open-Sourced Nossa Schema Diffing Engine"
description: "We're not an open-source company. We don't want to be. So why did we just publish 12,000 lines of internal tooling? Honest answer below."
date: 2026-01-30
author: kaylynn-herwitz
tags: ["open-source", "tooling", "schema"]
category: "Codigo aberto"
image: "/blog/dot-open-source.webp"
---

Last week we published `vxdiff` — our internal schema diffing engine — under
Apache 2.0. It's 12,000 lines, three years old, and powers every migration we
ship internally.

We're going to be honest about why.

## What it does

`vxdiff` reads two schemas — Avro, Protobuf, or our own internal IDL — and
produces a structured diff: added fields, removed fields, type narrowing,
default changes. It then tells you whether the diff is forward-compatible,
backward-compatible, or a breaking change, with a citation to the rule it
matched.

Most schema tools tell you what changed. `vxdiff` tells you whether you can
ship it.

## Why now

Three reasons:

1. **It's not a moat.** Schema diffing is plumbing. The interesting part of
   Eagle is what we do with the schema after diffing it.
2. **We need contributors.** We support five schema formats. Sob consultaers ask for
   six more. We can't keep up internally and the obvious shape of the answer
   is "let the people who use those formats maintain them."
3. **Hiring.** Engineers who care about schema correctness are exactly the
   engineers we want to talk to. A repo is a better recruiting tool than a
   careers page.

## What we're not open-sourcing

The runtime. The router. The storage. Everything that's actually a moat.

This isn't a strategy shift. It's `vxdiff`-shaped. If we open-source
something else later, it'll be for `vxdiff`-shaped reasons.
