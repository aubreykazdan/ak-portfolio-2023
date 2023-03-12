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
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <Image
                    className="rounded-lg object-cover object-center shadow-lg"
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
          <div className="mt-8 lg:mt-0 content-section">
            <div className="mx-auto lg:max-w-none">
              <p>
                My name is Aubrey. With over a decade of service industry
                experience under my belt, I have set my sights on using my
                programming skills to help and support people + business in my
                community.
              </p>
            </div>
            <div className="mx-auto mt-5 lg:col-start-1 lg:row-start-1 lg:max-w-none">
              <p>
                Aside from programming, I have a distinct passion for everything
                music. In my spare time, I collect and listen to vinyl. Having
                built a collection over a decade, I am very proud to have built
                my own personal library that I share with my closest friends and
                family.
              </p>
              <p>
                I also love a good story in the form of just about anything.
                Live shows, movies and performances of all kinds are a driving
                force for building lasting stories and memories.
              </p>
              <p>Below is a list of my favourite records of the year 2022:</p>
              <ul role="list">
                <li>A Light For Attracting Attention - The Smile</li>
                <li>Mirrorcell - Greg Puciato</li>
                <li>Mr. Morale & The Big Steppers - Kendrick Lamar</li>
              </ul>
              <h3>Continuing Practice</h3>
              <p>
                I have been practicing code since the middle of 2020. After a
                career pivot from Customer Service to Front-End Web Development,
                I continue to believe in using my skills for the betterment of
                my community.
              </p>
              <p>
                If you are hiring, or simply want to collaborate on a project of
                any kind, I am reachable via{" "}
                <a href="mailto:aubrey.j.kazdan@gmail.com">email</a>. Thank you.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
