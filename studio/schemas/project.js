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
  preview: {
    select: {
      title: 'title',
      featured: 'featured',
      media: 'mainImage',
    },
    prepare(selection) {
      const {title, featured, media} = selection
      return {
        title: title,
        subtitle: `${featured === true ? 'Featured' : ''}`,
        media: media,
      }
    },
  },
})
