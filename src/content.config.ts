import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// My own generic posts, authored here as Markdown. Product posts are pulled in
// client-side from their RSS feeds (see src/pages/blog/index.astro) — they are not
// part of this collection.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
