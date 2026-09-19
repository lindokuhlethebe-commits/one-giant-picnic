import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "./src/sanity/schemaTypes";

// Use environment variables, or fallback to dummy values for development UI to load
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "demo-project-id";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  title: "One Giant Picnic CMS",
  schema,
  plugins: [structureTool()],
});
