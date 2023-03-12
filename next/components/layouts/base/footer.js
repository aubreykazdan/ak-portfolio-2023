import Container from "../container";

export default function Footer({}) {
  return (
    <div className="border-t mt-8 md:mt-16">
      <Container>
        <div className="flex items-center justify-between mb-4 py-4">
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/aubreykazdan/"
              target="_blank"
              rel="noreferrer"
              className="logo"
              aria-label="Link to Instagram"
            >
              <img
                className="w-auto h-6"
                src="/svg/instagram.svg"
                alt="Instagram Logo"
                loading="lazy"
              />
            </a>
            <a
              href="https://github.com/aubreykazdan"
              target="_blank"
              rel="noreferrer"
              className="logo"
              aria-label="Link to GitHub"
            >
              <img
                className="w-auto h-6"
                src="/svg/github.svg"
                alt="GitHub Logo"
                loading="lazy"
              />
            </a>
          </div>
          <div>
            <p className="mt-4">© {new Date().getFullYear()} Aubrey Kazdan</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
