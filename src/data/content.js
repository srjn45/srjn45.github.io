// Single source of content for the whole site. Every page imports from here —
// edit these data blocks, not the page markup.

export const profile = {
  name: 'Srajan Pathak',
  role: 'Staff Software Engineer',
  tagline:
    '10+ years building backend systems — and lately, the tooling for running fleets of AI coding agents.',
  github: 'https://github.com/srjn45',
  linkedin: 'https://www.linkedin.com/in/srajan-pathak-9938b055',
  email: 'srajanpathak45@gmail.com',
};

export const featured = {
  name: 'warden',
  gif: 'https://srjn45.github.io/warden/media/hero.gif',
  tagline: 'Run a fleet of AI coding agents from one cockpit.',
  desc:
    'A single Go binary that spawns, monitors, and tears down coding agents — each in an isolated git worktree — with real dollar cost tracking, a tmux TUI + embedded web dashboard, and MCP tools so one agent can orchestrate the rest. Self-hosted, no database, no telemetry.',
  tags: ['Go', 'MCP', 'tmux', 'Astro', 'self-hosted'],
  links: [
    { label: 'GitHub', url: 'https://github.com/srjn45/warden' },
    { label: 'Docs', url: 'https://srjn45.github.io/warden/' },
    { label: 'Why I built it', url: 'https://srjn45.github.io/warden/blog/running-a-fleet-of-claude-code-agents/' },
  ],
};

// Each card's title/body opens `site` if present, else `github`.
// A GitHub button in the bottom-right corner always opens `github`.
export const projects = [
  {
    name: 'Warden',
    desc: 'Run a fleet of AI coding agents from one cockpit — a single Go binary that spawns, monitors, and tears them down in isolated git worktrees.',
    lang: 'Go',
    github: 'https://github.com/srjn45/warden',
    site: 'https://srjn45.github.io/warden/',
  },
  {
    name: 'spaiSH',
    desc: 'Experimental AI shell assistant — ask questions, get shell commands, run an autonomous agent loop in your terminal.',
    lang: 'Go',
    github: 'https://github.com/srjn45/spaiSH',
    site: 'https://srjn45.github.io/spaiSH/',
  },
  {
    name: 'ScrivaDB',
    desc: 'Lightweight, embeddable, local-first database — single binary, NDJSON storage, gRPC/REST API, full CLI.',
    lang: 'Go',
    github: 'https://github.com/srjn45/scriva',
    site: 'https://srjn45.github.io/scriva/',
  },
  {
    name: 'sp-treeview',
    desc: 'Material-design tree view component for Angular, published on npm.',
    lang: 'TypeScript',
    github: 'https://github.com/srjn45/sp-treeview',
    site: 'https://srjn45.github.io/sp-treeview-v2/',
  },
  {
    name: 'Pocket Money',
    desc: 'Family-oriented chore tracking and pocket-money app — parents define and approve chores, kids log them and track their earnings and payouts.',
    lang: 'Go · React Native',
    github: 'https://github.com/srjn45/pocket-money',
    site: 'https://srjn45.github.io/pocket-money/',
  },
  {
    name: 'Kept',
    desc: 'Private expense tracker',
    lang: 'Python · React',
    github: 'https://github.com/srjn45/kept',
    site: 'https://srjn45.github.io/kept/',
  },
];

// Professional work — problem-and-impact focused. Each entry names my role and
// what shipped. `metric` is the headline stat; `oneLiner` is the tile headline;
// `summary` + `detail` are the deeper story shown on the /work/<slug> detail page.
export const work = [
  {
    slug: 'promotions-retrieval-redesign',
    name: 'Promotions Retrieval Redesign',
    role: 'Staff Engineer — end-to-end owner, RFC author & technical lead',
    stack: ['Java', 'MySQL', 'Kafka', 'Redis', 'Domain-driven design'],
    metric: '300ms p95 → 20ms p99',
    oneLiner:
      'Split one overloaded promotions API into purpose-built domains and indexed endpoints, taking retrieval from a best-effort dependency to a sub-20ms path shown to every user.',
    summary:
      "Product-level deals (BOGO, % off) and checkout-level deals (free delivery, service-fee discounts) were served through one generalized model and a single API that returned every promotion for a list of stores — so the storewall loaded ~200 stores just to show two badges each, and catalog views fetched all promos up front, leaning on a client SDK to match promos to products that slowed every client release.",
    detail:
      "I authored the RFC to split promotions into two first-class domains — ProductPromotions and CheckoutPromotions — redesigned the schema, and introduced three purpose-built, indexed APIs. I ran it as a phased, fully backward-compatible migration: dual-writing old and new models before cutover, moving promo-to-product matching server-side to retire the client SDK, and caching the hot storewall path. Cutting latency this far let promotions graduate from a best-effort tier-2 dependency — dropped on timeout — to a reliable service shown to every user.",
  },
  {
    slug: 'in-store-promotions-ingestion',
    name: 'In-Store Promotions Ingestion',
    role: 'Staff Engineer — RFC author, design & delivery',
    stack: ['Java', 'Kafka', 'S3', 'MySQL', 'Async workers'],
    metric: '~6 hr lag → <10 min',
    oneLiner:
      'Built a bulk promotion-ingestion pipeline and re-architected the conflict check onto a denormalized index, cutting partner-to-app lag from ~6 hours to under 10 minutes at peak.',
    summary:
      'Large grocery partners run flat-price deals on thousands of individual products daily, but there was no practical way to model them — the portal required a separate form per product, so those deals never reached the app and customers went in-store for them, leaving store and app prices inconsistent.',
    detail:
      'I authored the RFC for a public bulk-ingestion API: partners push their entire promotion list in one call, a thin synchronous front persists it to S3, emits a Kafka event, and returns a job ID, while a horizontally scalable async worker pool validates and creates the promotions. The bottleneck was the per-product conflict check — a heavy multi-table join whose cost grew with the dataset, so lag compounded with every new partner. I re-architected it onto a purpose-built denormalized, composite-indexed table (written transactionally with the source of truth), turning each check from a linear scan into a near-constant index seek — so ingestion latency stopped scaling with partner count. End-to-end lag dropped from ~6 hours (8 a.m. submissions live at 2 p.m.) to under 10 minutes even at peak, keeping the app in sync with in-store pricing.',
  },
  {
    slug: 'cross-company-promotions-platform-migration',
    name: 'Cross-Company Promotions Platform Migration',
    role: 'Program lead — migration strategy & growth-platform delivery owner',
    stack: ['Cross-org program', 'Phased migration', 'BFF', 'EU Omnibus', 'Stakeholder alignment'],
    metric: '7 teams · 8 promo types · 3 quarters',
    oneLiner:
      'Led a 7-team, cross-company migration of the growth platform onto the group\'s central promotions backend — adding the missing promo types and EU price-transparency compliance first — with zero disruption to live deals.',
    summary:
      'The growth platform had to migrate onto the group\'s central promotions backend — the one other brands already ran on — without disrupting live deals. It looked like a data migration and was not one: the central platform did not yet support some of the promotion types being migrated or the EU price-transparency rules the markets require, so those capabilities had to be added there first, and every consumer surface (catalog, storewall, store view, pricing, checkout) was affected — spanning roughly seven teams across two companies.',
    detail:
      'I owned the program end to end and led a four-engineer team that migrated the promotion data and adapted the BFF services to consume the new backend. I turned an ambiguous "migrate everything" mandate into a phased, vertical-by-vertical plan — nothing moved big-bang, each capability migrated behind a fully working system and rolled out market by market. In parallel I drove the central-platform team to add the capabilities the migration needed — including EU Omnibus price-transparency compliance, the regulatory blocker gating every European market — as additive features that did not disturb the brands already live on it. I ran a weekly lead sync across all seven teams, aligned PMs and EMs on both sides, and traveled on-site to unblock the hardest cross-company dependencies. We migrated eight promotion types across grocery and food and rolled out across every market with zero disruption to live promotions — surfacing and re-baselining each dependency delay transparently along the way.',
  },
];

export const career = [
  {
    role: 'Staff Software Engineer · Affirm',
    period: '2025 — present',
    desc: 'Backend, Barcelona.',
  },
  {
    role: 'Staff Software Engineer · Glovo',
    period: '2023 — 2025',
    desc: 'Owned the promotions platform architecture in the Growth domain — including its zero-downtime migration to a domain-driven design and a real-time pipeline ingesting millions of partner promotions daily.',
  },
  {
    role: 'Technical Lead · Gojek',
    period: '2019 — 2023',
    desc: 'Led backend teams across GoPay (payments) and Discovery — bank integrations, the relevancy platform behind merchant/promo discovery, and order history as a single source of truth.',
  },
  {
    role: 'Software Engineer · Quintype',
    period: '2018 — 2019',
    desc: 'Full-stack work — built a configurable publisher component library that stood up a full news site in minutes.',
  },
  {
    role: 'Software Engineer · Infobeans',
    period: '2015 — 2018',
    desc: 'Java platform work — from a PCI-DSS-certified loyalty processing engine for POS systems to cross-platform mobile apps.',
  },
];

// Product sites that publish their own blog. Drives the /blog page's client-side
// feed aggregation and the static, crawlable "Product blogs" links. All feeds are
// under srjn45.github.io, so the browser fetch is same-origin (no CORS). Add an
// entry here when a product gains a blog.
export const productBlogs = [
  {
    product: 'warden',
    label: 'warden',
    blog: 'https://srjn45.github.io/warden/blog/',
    rss: 'https://srjn45.github.io/warden/blog/rss.xml',
  },
];

export const skills = [
  { group: 'Languages', items: ['Go', 'Java', 'Clojure', 'Python', 'Kotlin', 'TypeScript'] },
  { group: 'Data & messaging', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Kafka', 'RabbitMQ'] },
  { group: 'Focus areas', items: ['System Design (HLD & LLD)', 'MicroService Architecture', 'Distributed Systems', 'Developer tooling', 'AI agent infrastructure'] },
];
