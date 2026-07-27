---
title: Why I built one blog for everything I write
date: 2026-07-27
description: >-
  This site now pulls posts from every product I ship into a single stream,
  alongside the more general things I write here. A note on why, and how it works.
tags: ['meta', 'astro', 'rss']
---

I write in two modes. Some posts are product-specific — a deep debugging story from
[warden](https://srjn45.github.io/warden/blog/), say — and they belong on that
product's own site, next to its docs. Others are more general: things I've learned
about system design, backend architecture, or building with AI agents that aren't
tied to any one project.

The problem with that split is discovery. If you land here, you'd have no idea the
product blogs exist; if you're reading a warden post, you'd never see the general
writing. So this page stitches them together.

## How it works

Every product I ship publishes an RSS feed. Because all my sites live under the same
`srjn45.github.io` domain, this page can read those feeds directly in your browser —
same-origin, no server, no build step — and merge them with the posts I write here
into one reverse-chronological stream. Product posts always link back to their
canonical home; the general ones (like this one) live here.

That's the whole idea: one place to read everything, without pretending it all came
from the same place.
