import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import Container from "../container";

export default function GridWideImages({ data }) {
  return (
    <div data-aos="fade-down" data-aos-duration="3000">
      <Container>
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="space-y-16">
            {data.map((item) => (
              <div
                key={item.name}
                className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
              >
                <div className="mt-6 lg:col-span-5 lg:mt-0 xl:col-span-4">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="mt-2 text-base">{item.skills}</p>
                  <p className="mt-2 text-base text-gray-500">
                    {item.description}
                  </p>
                  <div className="sm:flex space-x-4 mt-6">
                    <a className="btn btn-accent-light" href={item.live}>
                      Live
                      <ArrowTopRightOnSquareIcon className="ml-2 h-4" />
                    </a>
                    <a className="btn btn-accent-light" href={item.github}>
                      GitHub
                      <ArrowTopRightOnSquareIcon className="ml-2 h-4" />
                    </a>
                  </div>
                </div>
                <div className="flex-auto lg:col-span-7 xl:col-span-8">
                  <div className="aspect-[5/2] overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                    {console.log(item.imageSrc)}
                    <img
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      className="object-cover object-top"
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
