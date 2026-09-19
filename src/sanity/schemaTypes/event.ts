import { defineField, defineType } from "sanity";

export const eventType = defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "date",
      title: "Event Date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      type: "datetime",
    }),
    defineField({
      name: "venue",
      title: "Venue Name",
      type: "string",
    }),
    defineField({
      name: "location",
      title: "Location Details",
      type: "text",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "heroMedia",
      title: "Hero Media (Video/Image)",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "ticketUrl",
      title: "Ticket URL",
      type: "url",
    }),
    defineField({
      name: "ticketStatus",
      title: "Ticket Status",
      type: "string",
      options: {
        list: [
          { title: "Available", value: "available" },
          { title: "Selling Fast", value: "selling_fast" },
          { title: "Sold Out", value: "sold_out" },
          { title: "Coming Soon", value: "coming_soon" },
        ],
      },
      initialValue: "available",
    }),
    defineField({
      name: "featured",
      title: "Featured Event",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "published",
      title: "Published Status",
      type: "boolean",
      initialValue: true,
    }),
  ],
});
