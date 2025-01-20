import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { getAdminPB } from "../server/pb";
import { ToolSchema } from "./schemas";

const tools = defineCollection({
  loader: async () => {
    const adminPB = await getAdminPB();
    const tools = await adminPB.collection("tools").getFullList();
    return tools;
  },
  schema: ToolSchema,
});

// const projects = defineCollection({
//   loader: async () => {
//     const projects = await adminPB
//       .collection("projects")
//       .getFullList({ expand: "tools" });
//     return projects;
//   },
//   schema: z.array(ProjectSchema),
// });

export const collections = { tools };
