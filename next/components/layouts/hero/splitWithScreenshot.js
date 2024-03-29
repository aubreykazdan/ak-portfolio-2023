import Image from "next/image";

export default function SplitWithScreenshot() {
  return (
    <div data-aos="fade-down" data-aos-duration="3000" className="relative">
      <main className="lg:relative">
        <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-60 lg:text-left">
          <div className="px-4 sm:px-6 lg:px-8 lg:w-1/2 xl:pr-16">
            <h1 className="">
              Hi. My name is {""}
              <span className="block text-accent xl:inline">Aubrey Kazdan</span>
            </h1>
            <p className="mx-auto max-w-md mt-5 md:max-w-3xl">
              I am a Web Developer who specializes in learning all kinds of
              frameworks to make the best sites and apps I can make. I love to
              collect vinyl, make memories at live shows and connect with
              like-minded creative people.
            </p>
          </div>
        </div>
        <div className="relative h-96 w-full lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
          <div className="absolute inset-0 h-full w-full">
            <Image
              fill
              sizes="(min-width: 640px) 100vw,
              (min-width: 768px) 100vw,
              100vw"
              className="object-cover"
              src="/images/headshot.jpg"
              alt="Aubrey standing in front of a band logo"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
