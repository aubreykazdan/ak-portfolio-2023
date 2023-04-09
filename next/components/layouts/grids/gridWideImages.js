import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import SanityBlockContent from "@sanity/block-content-to-react";
import Container from "../container";
import { urlForImage } from "/lib/sanity";
import Image from "next/image";

export default function GridWideImages({ data }) {
  const options = {
    month: "long",
    year: "numeric",
  };
  return (
    <div data-aos="fade-down" data-aos-duration="3000">
      <Container>
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="space-y-16">
            {data.map((item) => (
              <div
                key={item.title}
                className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
              >
                <div className="mt-6 lg:col-span-5 lg:mt-0 xl:col-span-4">
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <div className="text-base">
                    <time>
                      {new Date(item.createdAt).toLocaleDateString(
                        "en-us",
                        options
                      )}
                    </time>
                  </div>
                  <p className="mt-2 text-base">{item.skills}</p>
                  <div className="mt-2 text-base text-gray-600">
                    <SanityBlockContent blocks={item.description} />
                  </div>
                  <div className="sm:flex space-x-4 mt-4">
                    {item.liveUrl && (
                      <a className="btn btn-accent-light" href={item.liveUrl}>
                        Live
                        <ArrowTopRightOnSquareIcon className="ml-2 h-4" />
                      </a>
                    )}
                    {item.githubUrl && (
                      <a className="btn btn-accent-light" href={item.githubUrl}>
                        GitHub
                        <ArrowTopRightOnSquareIcon className="ml-2 h-4" />
                      </a>
                    )}
                  </div>
                </div>
                <div className="flex-auto lg:col-span-7 xl:col-span-8">
                  <div className=" overflow-hidden rounded-lg bg-gray-100 shadow-lg shadow-accent">
                    <Image
                      src={urlForImage(item.mainImage.asset).url()}
                      alt={item.mainImage.imageAlt}
                      width={item.mainImage.asset.metadata.dimensions.width}
                      height={item.mainImage.asset.metadata.dimensions.height}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
