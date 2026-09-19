import { defineField, defineType } from "sanity";
export const experienceItemType = defineType({
  name: "experienceItem", title: "Experience Item", type: "document",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "category", type: "string" }),
    defineField({ name: "description", type: "text" }),
    defineField({ name: "media", type: "image" }),
    defineField({ name: "displayOrder", type: "number" }),
    defineField({ name: "featured", type: "boolean" })
  ]
});
