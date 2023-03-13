import BlogContent from "@/components/sanity/blogContent";
import Container from "../container";
import { urlForImage } from "/lib/sanity";
import Image from "next/image";

export default function BlogContentCentered({ data }) {
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const {
    mainImage,
    mainImageTwo,
    title,
    publishedAt,
    categories,
    description,
    body,
    bodyTwo,
  } = data;
  return (
    <div className="relative overflow-hidden">
      <Container>
        <div className="mx-auto max-w-4xl">
          <figure data-aos="fade-left" data-aos-duration="3000">
            <Image
              src={urlForImage(mainImage.asset).url()}
              alt={mainImage.imageAlt}
              width={mainImage.asset.metadata.dimensions.width}
              height={mainImage.asset.metadata.dimensions.height}
              className="aspect-[3/2] object-cover"
            />
            <figcaption className="mt-2 text-gray-500 italic">
              {mainImage.caption}
            </figcaption>
          </figure>
          <div className="flex justify-center space-x-4 mt-8">
            <div className="category">
              {categories.map((item) => {
                return (
                  <span className="text-sm" key={item._id}>
                    {item.title}
                  </span>
                );
              })}
            </div>
          </div>
          <h1 className="mt-4">{title}</h1>
          <div className="flex justify-center mt-2">
            <time dateTime={publishedAt}>
              Published{" "}
              {new Date(publishedAt).toLocaleDateString("en-us", options)}
            </time>
          </div>
          <div className="mt-8 border-b border-black pb-6">
            <BlogContent content={description} />
          </div>
        </div>
        <div className="mx-auto max-w-4xl content-section mt-6">
          <BlogContent content={body} />
          {mainImageTwo && (
            <figure data-aos="fade-right" data-aos-duration="3000">
              <Image
                src={urlForImage(mainImageTwo.asset).url()}
                alt={mainImageTwo.imageAlt}
                width={1310}
                height={873}
              />
              <figcaption className="mt-2 text-gray-500 italic">
                {mainImageTwo.caption}
              </figcaption>
            </figure>
          )}
          {bodyTwo && (
            <div className="mt-4">
              <BlogContent content={bodyTwo} />
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
