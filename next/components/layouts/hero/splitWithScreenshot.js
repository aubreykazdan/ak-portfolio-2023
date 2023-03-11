import Image from "next/image";

export default function SplitWithScreenshot() {
  return (
    <div className="relative">
      <main className="lg:relative">
        <div
          data-aos="fade-right"
          data-aos-duration="3000"
          className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-60 lg:text-left"
        >
          <div className="px-4 sm:px-6 lg:px-8 lg:w-1/2 xl:pr-16">
            <h1 className="">
              <span className="block xl:inline">Hi. My name is</span>{" "}
              <span className="block text-accent xl:inline">Aubrey Kazdan</span>
            </h1>
            <p className="mx-auto max-w-md mt-5 md:max-w-3xl">
              I am a Web Developer who specializes in learning all kinds of
              frameworks to make the best sites and apps I can make. I love to
              collect vinyl, make memories at live shows and connect with
              like-minded people.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="3000"
          className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2"
        >
          <div className="absolute inset-0 h-full w-full">
            <Image
              fill
              sizes="(min-width: 640px) 100vw,
              (min-width: 768px) 50vw,
              100vw"
              style={{ objectFit: "cover" }}
              src="/images/nin-fan-day.jpg"
              alt="Aubrey standing in front of a band logo"
            />
          </div>
        </div>
      </main>
    </div>
  );
}