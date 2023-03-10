import Image from "next/image";
import Container from "../container";
import { urlForImage } from "/lib/sanity";

export default function GridThreeColumnLargeImages({ data }) {
  return (
    <div data-aos="fade-up" data-aos-duration="3000">
      <Container>
        <div className="space-y-12">
          <h2 className="text-center">Gallery</h2>
          <ul
            role="list"
            className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
          >
            {data.map((item) => (
              <li key={item._key}>
                <div className="space-y-4">
                  <div className="aspect-w-3 aspect-h-2">
                    <Image
                      src={urlForImage(item.asset).url()}
                      alt={item.imageAlt}
                      height={200}
                      width={400}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}
