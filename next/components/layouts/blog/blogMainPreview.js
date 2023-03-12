import BlogContent from "@/components/sanity/blogContent";
import Link from "next/link";
import Container from "../container";
import { urlForImage } from "/lib/sanity";

export default function BlogMainPreview({ data, showHeading }) {
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const { mainImage, title, slug, publishedAt, categories, description } = data;
  return (
    <div>
      <Container>
        <div className="relative">
          {showHeading === true ? (
            <div className="mb-8">
              <h2>Featured Blog Post</h2>
              <Link
                href="/blog"
                aria-label="Go to blog page"
                className="btn btn-accent-light mt-4"
              >
                View All Posts
              </Link>
            </div>
          ) : null}
          <div className="relative max-w-md sm:max-w-3xl">
            <div className="relative aspect-[3/2] py-28 lg:py-64">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src={urlForImage(mainImage.asset).url()}
                alt={mainImage.imageAlt}
              />
            </div>

            <div className=" h-full w-full lg:absolute lg:inset-y-0 lg:-right-[41%] xl:-right-[70%]">
              <div className="h-full flex-col items-center justify-center lg:flex">
                <Link href={`blog/${slug}`}>
                  <div className="lg:max-w-xl transition-animate hover:bg-accent-light bg-white shadow-lg p-8">
                    <div className="category mt-2">
                      {categories.map((item) => {
                        return (
                          <span className="" key={item._id}>
                            {item.title}
                          </span>
                        );
                      })}
                    </div>
                    <h3 className="my-2">{title}</h3>
                    <time>
                      {new Date(publishedAt).toLocaleDateString(
                        "en-us",
                        options
                      )}
                    </time>
                    <div className="mt-2">
                      <BlogContent content={description} />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
