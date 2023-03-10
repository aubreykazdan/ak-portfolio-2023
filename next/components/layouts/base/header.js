import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Container from "../container";
import Image from "next/image";

export default function Header({}) {
  return (
    <Popover className="relative shadow z-50">
      <Container>
        <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div>
            <span className="sr-only">Aubrey Kazdan's Logo</span>
            <Link href="/" passHref aria-label="Go to home page">
              <div className="hover:shadow-xl hover:shadow-accent transition-animate">
                <Image
                  src="/assets/logo.svg"
                  alt="Aubrey Kazdan's logo"
                  width={80}
                  height={80}
                />
              </div>
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 hover:bg-accent hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent transition-animate">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
            <Popover.Group as="nav" className="flex space-x-10">
              <Link href="/about" className="nav-item nav-animated">
                About
              </Link>
              <Link href="/projects" className="nav-item nav-animated">
                Projects
              </Link>
              <Link href="/blog" className="nav-item nav-animated">
                Blog
              </Link>
            </Popover.Group>
            <div className="flex items-center md:ml-12">
              <a
                href="mailto:aubrey.j.kazdan@gmail.com"
                aria-label="Send an email to Aubrey"
                className="btn btn-accent"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
          >
            <div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <Link href="/" passHref aria-label="Go to home page">
                    <div className="hover:shadow-xl transition-animate">
                      <Image
                        src="/assets/logo.svg"
                        alt="Aubrey Kazdan's logo"
                        width={60}
                        height={60}
                      />
                    </div>
                  </Link>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 hover:bg-accent hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent transition-animate">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="py-6 px-5">
                <div className="grid gap-4">
                  <Link href="/about" className="nav-item nav-animated">
                    About
                  </Link>
                  <Link href="/projects" className="nav-item nav-animated">
                    Projects
                  </Link>
                  <Link href="/blog" className="nav-item nav-animated">
                    Blog
                  </Link>
                </div>
                <div className="mt-6">
                  <a
                    href="mailto:aubrey.j.kazdan@gmail.com"
                    aria-label="Send an email to Aubrey"
                    className="btn btn-accent"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Container>
    </Popover>
  );
}
