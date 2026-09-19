import { defineField, defineType } from "sanity";
export const productType = defineType({
  name: "product", title: "Product", type: "document",
  fields: [
    defineField({ name: "name", type: "string" }),
    defineField({ name: "slug", type: "slug", options: { source: "name" } }),
    defineField({ name: "price", type: "number" }),
    defineField({ name: "images", type: "array", of: [{ type: "image" }] }),
    defineField({ name: "category", type: "string" }),
    defineField({ name: "purchaseUrl", type: "url" })
  ]
});
