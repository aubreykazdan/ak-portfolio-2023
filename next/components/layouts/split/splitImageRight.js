import { CameraIcon } from "@heroicons/react/20/solid";
import Container from "../container";
import Image from "next/image";

export default function SplitImageRight({}) {
  return (
    <div
      data-aos="fade-down"
      data-aos-duration="3000"
      className="overflow-hidden"
    >
      <Container>
        <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
          <div>
            <h2>Hi Again</h2>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:col-start-2 lg:row-start-1">
            <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
              <figure>
                <div className="aspect-[12/7] lg:aspect-none">
                  <Image
                    className="object-cover object-center shadow-lg"
                    src="/images/portrait.jpg"
                    alt="Portrait of Aubrey against a brick backdrop"
                    width={1184}
                    height={1376}
                  />
                </div>
                <figcaption className="mt-3 flex text-base">
                  <CameraIcon
                    className="h-6 w-6 flex-none"
                    aria-hidden="true"
                  />
                  <span className="ml-2">
                    Photograph by{" "}
                    <a
                      href="https://www.instagram.com/alexlikeart/"
                      className="text-accent-blue hover:text-accent-hover underline"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Link to Alex's instagram page"
                    >
                      Alex
                    </a>
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="mx-auto lg:max-w-none">
              <p>
                My name is Aubrey. I am a highly skilled Software Developer with
                expertise in constructing functional, responsive, and accessible
                web applications.
              </p>
              <p className="mt-4">
                My specialities include building dynamic, interactive web
                applications that enhance the user experience and solve
                real-world problems as these are the issues I am most passionate
                about. Having experience working with designers and project
                managers on projects that involve digital assets, I take
                initiative on said projects through exceptional time management
                and clear communication.
              </p>
            </div>
            <div className="mx-auto mt-4 lg:col-start-1 lg:row-start-1 lg:max-w-none">
              <p>
                Aside from programming, I have a distinct passion for everything
                music. In my spare time, I collect and listen to vinyl. Having
                built a collection over a decade, I am very proud to have built
                my own personal library that I share with my closest friends and
                family.
              </p>
              <p className="mt-4">
                Below is a list of my favourite records of 2023 so far...
              </p>
              <ul className="mt-2 space-y-1" role="list">
                <li>
                  Live at Bush Hall - <strong>Black Country, New Road</strong>
                </li>
                <li>
                  SCARING THE HOES -{" "}
                  <strong>JPEGMAFIA &amp; Danny Brown</strong>
                </li>
                <li>
                  Shook - <strong>Algiers</strong>
                </li>
              </ul>
              <div className="mt-8">
                <h3>Continuing Practice</h3>
                <p className="mt-4">
                  I have been practicing code since the middle of 2020. After a
                  career pivot from Customer Service to Front-End Web
                  Development, I continue to believe in using my skills for the
                  betterment of my community.
                </p>
                <p className="mt-4">
                  <strong>Currently Learning:</strong> TypeScript, Wordpress,
                  SQL
                </p>
                <p className="mt-4">
                  If you are hiring, or simply want to collaborate on a project
                  of any kind, I am reachable via{" "}
                  <a
                    className="underline text-accent-blue"
                    href="mailto:aubrey.j.kazdan@gmail.com"
                  >
                    email
                  </a>
                  . Thank you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
