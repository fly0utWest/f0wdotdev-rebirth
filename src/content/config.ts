import { defineCollection, z } from "astro:content";
import { getAdminPB } from "../server/pb";
import {
  ProjectsSchema,
  SocialsSchema,
  ToolSchema,
} from "./schemas";

const adminPB = await getAdminPB();

const projects = defineCollection({
  loader: async () => {
    const projectRecords = await adminPB
      .collection("projects")
      .getFullList({ expand: "tools" });

    const expandedProjects = projectRecords.map((record) => {
      const preview = adminPB.files.getURL(record, record.preview);
      return {
        ...record,
        preview,
      };
    });

    return expandedProjects;
  },
  schema: ProjectsSchema,
});

const tools = defineCollection({
  loader: async () => {
    const tools = await adminPB.collection("tools").getFullList();
    return tools;
  },
  schema: ToolSchema,
});

const socials = defineCollection({
  loader: async () => {
    const socials = await adminPB.collection("socials").getFullList();
    return socials;
  },
  schema: SocialsSchema,
});
export const collections = { tools, socials, projects };
