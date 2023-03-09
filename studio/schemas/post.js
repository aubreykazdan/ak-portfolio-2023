import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
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
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
        {
          name: 'imageAlt',
          type: 'string',
          title: 'Image Alternative Text',
        },
      ],
    }),
    defineField({
      name: 'mainImageTwo',
      title: 'Main image two',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
        {
          name: 'imageAlt',
          type: 'string',
          title: 'Image Alternative Text',
        },
      ],
    }),
    defineField({
      name: 'imagesArray',
      title: 'Images Array',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'imageAlt',
              type: 'string',
              title: 'Image Alternative Text',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'bodyTwo',
      title: 'Body Two',
      type: 'blockContent',
    }),
  ],
  initialValue: {
    featured: false,
  },

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
