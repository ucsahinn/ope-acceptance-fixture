import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Mirrors the OPE generic Astro adapter frontmatter contract.
const articles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
  schema: z.object({
    translationKey: z.string(),
    locale: z.enum(["tr", "en"]),
    section: z.string(),
    articleType: z.enum(["news", "analysis", "guide", "deep_dive"]),
    title: z.string(),
    description: z.string(),
    authorId: z.string(),
    publishedAt: z.string(),
    modifiedAt: z.string(),
    tags: z.array(z.string()),
    heroImage: z.string(),
    heroImageAlt: z.string(),
    sources: z.array(z.object({
      id: z.string(),
      title: z.string(),
      url: z.string(),
      role: z.enum(["primary", "independent", "supporting"])
    })),
    generatedWithAI: z.boolean()
  })
});

export const collections = { articles };
