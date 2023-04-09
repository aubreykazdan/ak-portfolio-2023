import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  initialValue: {
    featured: false,
  },
  fields: [
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      default: false,
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'string',
    }),
    defineField({
      name: 'createdAt',
      title: 'Created at',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM',
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'imageAlt',
          type: 'string',
          title: 'Image Alternative Text',
        },
      ],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'liveUrl',
      title: 'Live URL',
      type: 'url',
    }),
    defineField({
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
    }),
  ],
  orderings: [
    {
      title: 'Created At, New',
      name: 'createdAtDesc',
      by: [{field: 'createdAt', direction: 'desc'}],
    },
    {
      title: 'Created At, Old',
      name: 'createdAtAsc',
      by: [{field: 'createdAt', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'createdAt',
      media: 'mainImage',
    },
  },
})
