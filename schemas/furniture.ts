import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'furniture',
  title: 'furniture',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'text',
      validation: rule => rule.required(),
    }),
    {
      title: 'min price',
      validation: rule => rule.min(50).max(1000).required(),
      name: 'minPrice',
      type: 'number'
    },
    {
      title: 'max price',
      validation: rule => rule.min(100).max(1200).required(),
      name: 'maxPrice',
      type: 'number'
    },
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'secondImage',
      title: 'second image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'thirdImage',
      title: 'third image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'reference',
      to: [{type: 'category'}],
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],
})
