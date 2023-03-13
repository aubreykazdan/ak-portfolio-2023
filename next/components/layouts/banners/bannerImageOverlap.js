import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

export default function BannerImageOverlap({}) {
  return (
    <div
      data-aos="fade-down"
      data-aos-duration="3000"
      className="bg-gray-100 pb-16 lg:relative lg:z-10 lg:pb-0"
    >
      <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 px-4 sm:px-6 lg:px-8">
        <div className="relative lg:-my-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
          />
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:h-full lg:p-0">
            <div className=" aspect-[2/2] overflow-hidden shadow-lg h-full w-full">
              <Image
                fill
                sizes="(min-width: 768px) 100vw,
                  100vw"
                src="/images/portrait-two.jpg"
                alt="Aubrey with mom"
                className="object-cover relative"
              />
            </div>
          </div>
        </div>
        <div className="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
            <blockquote>
              <div>
                <p className="mt-12 text-xl sm:text-2xl">
                  Documenting some of my hobbies & passions is how I keep my
                  creative spirit alive. Check them out with the links below.
                  <span className="block text-accent-light font-semibold">
                    Get to know me.
                  </span>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row sm:space-x-4 mt-8">
                <a
                  href="https://www.instagram.com/aubreykazdan/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Go to Aubrey's Instagram page"
                  className="btn btn-accent-light"
                >
                  Instagram
                  <ArrowTopRightOnSquareIcon className="ml-2 h-4" />
                </a>
                <Link
                  href="/about"
                  aria-label="Go to About page"
                  className="btn btn-accent-light mt-2 sm:mt-0"
                >
                  About
                </Link>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
