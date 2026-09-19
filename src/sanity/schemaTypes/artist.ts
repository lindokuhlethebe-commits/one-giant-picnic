import { defineField, defineType } from "sanity";
export const artistType = defineType({
  name: "artist", title: "Artist", type: "document",
  fields: [
    defineField({ name: "name", type: "string" }),
    defineField({ name: "slug", type: "slug", options: { source: "name" } }),
    defineField({ name: "profileImage", type: "image", options: { hotspot: true } }),
    defineField({ name: "biography", type: "text" }),
    defineField({ name: "genre", type: "string" }),
    defineField({ name: "artistType", type: "string" }),
    defineField({ name: "spotifyUrl", type: "url" }),
    defineField({ name: "featured", type: "boolean" }),
    defineField({ name: "displayOrder", type: "number" })
  ]
});
