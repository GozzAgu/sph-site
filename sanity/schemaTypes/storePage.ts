import { defineArrayMember, defineField, defineType } from 'sanity'

export const storePageType = defineType({
  name: 'storePage',
  title: 'Store Page Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      initialValue: 'The best way to buy the products you love.',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'latestHeadline',
      title: 'Latest Section Headline',
      type: 'string',
      initialValue: "Take a look at what's new right now.",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'experienceCards',
      title: 'Experience Cards',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'tag', title: 'Tag', type: 'string', validation: Rule => Rule.required() }),
            defineField({ name: 'title', title: 'Title', type: 'string', validation: Rule => Rule.required() }),
            defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'quickLinks',
      title: 'Quick Links',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string', validation: Rule => Rule.required() }),
            defineField({ name: 'to', title: 'Internal Path', type: 'string' }),
            defineField({ name: 'href', title: 'External URL', type: 'url' }),
            defineField({ name: 'external', title: 'Open in New Tab', type: 'boolean', initialValue: true }),
          ],
        }),
      ],
    }),
  ],
})
