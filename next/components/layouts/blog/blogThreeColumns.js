import BlogContent from "@/components/sanity/blogContent";
import Link from "next/link";
import Container from "../container";
import { urlForImage } from "/lib/sanity";
import Image from "next/image";

export default function BlogThreeColumns({ data }) {
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return (
    <div data-aos="fade-down" data-aos-duration="3000">
      <Container>
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {data.map((post) => {
              const {
                mainImage,
                title,
                slug,
                publishedAt,
                categories,
                description,
              } = post;
              return (
                <Link href={`blog/${slug}`} key={title}>
                  <div className="flex flex-col overflow-hidden transition-animate hover:bg-accent-light bg-white shadow-lg min-h-full">
                    <div className="flex-shrink-0">
                      <Image
                        src={urlForImage(mainImage.asset).url()}
                        alt={mainImage.imageAlt}
                        height={200}
                        width={500}
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between p-6">
                      <div className="flex-1">
                        <div className="category my-2">
                          {categories.map((item) => {
                            return (
                              <span className="text-sm" key={item._id}>
                                {item.title}
                              </span>
                            );
                          })}
                        </div>
                        <div className="mt-2 block">
                          <h4>{title}</h4>
                          <time className="text-base">
                            {new Date(publishedAt).toLocaleDateString(
                              "en-us",
                              options
                            )}
                          </time>
                          <div className="mt-3">
                            <BlogContent content={description} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}
