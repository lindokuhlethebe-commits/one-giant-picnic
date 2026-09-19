import { defineField, defineType } from "sanity";
export const performanceType = defineType({
  name: "performance", title: "Performance", type: "document",
  fields: [
    defineField({ name: "event", type: "reference", to: [{ type: "event" }] }),
    defineField({ name: "artist", type: "reference", to: [{ type: "artist" }] }),
    defineField({ name: "stage", type: "string" }),
    defineField({ name: "startTime", type: "datetime" }),
    defineField({ name: "endTime", type: "datetime" }),
    defineField({ name: "notes", type: "text" })
  ]
});
