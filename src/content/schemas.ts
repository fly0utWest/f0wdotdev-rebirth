import { z } from "astro:content";

export const ToolSchema = z.object({
    title: z.string(),
    icon: z.string(),
    tool_url: z.string().url(),
    created: z.string(),
    updated: z.string(),   
})
