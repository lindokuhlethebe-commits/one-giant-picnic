import { defineField, defineType } from "sanity";
export const galleryItemType = defineType({
  name: "galleryItem", title: "Gallery Item", type: "document",
  fields: [
    defineField({ name: "media", type: "image", options: { hotspot: true } }),
    defineField({ name: "caption", type: "string" }),
    defineField({ name: "event", type: "reference", to: [{ type: "event" }] }),
    defineField({ name: "featured", type: "boolean" })
  ]
});
