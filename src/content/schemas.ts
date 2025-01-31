import { z } from "astro:content";



export const ToolSchema = z.object({
  title: z.string(),
  icon: z.string(),
  tool_url: z.string().url(),
  created: z.string(),
  updated: z.string(),
});

export const ProjectsSchema = z.object({
  title: z.string(),
  preview: z.string().url(),
  expand: z.object({
    tools: z.array(ToolSchema),
  }),
  description: z.object({ en: z.string(), ru: z.string() }),
  status: z.enum(["beta", "prod", "dev", "fin/archive"]),
  link: z.string().url(),
  started: z.string(),
  created: z.string(),
  updated: z.string(),
});

export const SocialsSchema = z.object({
  title: z.string(),
  icon: z.string(),
  link: z.string().url(),
  created: z.string(),
  updated: z.string(),
});
