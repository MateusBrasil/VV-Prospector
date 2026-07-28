---
title: "From Cron Jobs to Streams: Migrating Off Legacy ETL"
description: "Cron is the duct tape of data infrastructure. Eventually it stops holding. Here's how we moved a 12-year-old pipeline to streams without a rewrite."
date: 2026-02-28
author: aspen-westervelt
tags: ["etl", "migration", "streaming"]
category: "Engenharia"
image: "/blog/dot-cron-to-streams.webp"
---

The customer's setup, on day one of the audit:

- **340 cron jobs**, orchestrated by a 4,000-line bash script.
- Half ran nightly, a third overlapped on the same tables.
- **Two of them silently corrupted data** when run in the wrong order.

It worked, in the same way a Jenga tower works.

> "If your `crontab` needs a comment to explain what comes after `*/5 *`,
> the system is already telling you something."

## The strangler approach

We didn't rewrite. We wrapped. Each cron job got a thin event emitter on
completion: when the job finished writing to its target table, it emitted
`table-X updated` to a stream.

Downstream consumers got two paths to the same data:

1. **Legacy path** — read the target table. No code change for the consumer.
2. **New path** — subscribe to the event stream. Get push semantics, retries,
   and replay for free.

Over six months, every consumer migrated to the stream at their own pace.
Zero downtime, zero data migration, zero "big bang" weekend.

## The trap

Don't let "we'll migrate later" become permanent. We set a hard sunset date
for the legacy paths from week one. Two consumers asked for extensions:

- **One legitimate** — compliance review needed an extra month. Granted.
- **One political** — a team didn't want to schedule the work. Refused.

The team that refused the extension had moved by month three. The team we
extended took eight months. Lesson: **deadlines move work; extensions don't
move deadlines.**

## What's still legacy

Three jobs. They're orchestration glue between two SaaS tools and have no
real-time consumers. Cron is the right tool for them.

Migrating everything is a vanity project — migrate what's painful.
