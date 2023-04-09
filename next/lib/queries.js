export const allPostsQuery = `
*[_type == "post"]{
  ...,
  categories[]->,
  mainImage{
    ...,
    asset->
  },
  mainImageTwo{
    ...,
    asset->
  },
}
`;

export const featuredPostQuery = `
*[_type == "post" && featured == true][0]{
  ...,
  categories[]->,
  mainImage{
    ...,
    asset->
  },
  mainImageTwo{
    ...,
    asset->
  },
}
`;

export const postSlugQuery = `
*[_type == "post" && slug.current == $slug][0]{
  ...,
  categories[]->,
  mainImage{
    ...,
    asset->
  },
  mainImageTwo{
    ...,
    asset->
  },
}
`;

export const allProjectsQuery = `
*[_type == "project"]  | order(_createdAt asc) {
  ...,
  mainImage{
    ...,
    asset->
  },
}
`;
