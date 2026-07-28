import { defineCollection, reference, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    // `author` references a slug from the `team` collection. The blog detail
    // page renders the linked team member's name, role, and headshot.
    author: reference("team"),
    tags: z.array(z.string()).default([]),
    category: z.enum(["Engenharia", "Produto", "Codigo aberto"]),
    image: z.string().optional(),
  }),
});

const features = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/features" }),
  schema: z.object({
    title: z.string(),
    eyebrow: z.string().default("Recursos"),
    bullets: z.array(z.string()).min(1).max(6),
    /** Hero right column bottom copy — short paragraph that elaborates on
     *  the feature. Rendered below the bullets with `flex justify-between`
     *  so it pins to the bottom of the right column. */
    heroCopy: z.string(),
    coreTitle: z.string(),
    coreBody: z.string(),
    benefitsTitle: z.string(),
    benefits: z.array(z.object({ title: z.string(), body: z.string() })).min(1).max(4),
    image: z.string().optional(),
    order: z.number().default(0),
  }),
});

const team = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/team" }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    image: z.string().optional(),
    bio: z.string().optional(),
    socials: z
      .object({
        linkedin: z.string().optional(),
        twitter: z.string().optional(),
        github: z.string().optional(),
        website: z.string().optional(),
      })
      .optional(),
    order: z.number().default(0),
  }),
});

export const collections = { blog, team, features };
