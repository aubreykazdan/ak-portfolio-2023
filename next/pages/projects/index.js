import GridWideImages from "../../components/layouts/grids/gridWideImages";
import SimpleBanner from "../../components/layouts/banners/simpleBanner";
import Layout from "../../components/layouts/base/layout";

const features = [
  {
    name: "On Task",
    description:
      "Website for a new non-profit community space located in Toronto’s west-end.",
    skills: "Next.js | Tailwindcss | Headless CMS (Sanity.io)",
    imageSrc: "/images/projects/on-task.jpg",
    imageAlt: "Landing page for On Task website.",
    github: "https://github.com/aubreykazdan/on-task-behaviour",
    live: "https://www.ontaskbehaviour.com/",
  },
  {
    name: "Podcast Prioritzer",
    description:
      "An application that suggests podcasts based on commute times and user search queries.",
    skills: "React | RESTful API | CSS3 | Paired Programming",
    imageSrc: "/images/projects/podcast-prioritizer.jpg",
    imageAlt: "Double stitched black canvas hook loop.",
    github: "https://github.com/capibara33/podcastPrioritizer",
    live: "https://podcast-prioritizer.netlify.app/",
  },
  {
    name: "Movies A to Z",
    description:
      "A game to challenge users to find movies with high IMDB user-rating scores and compare them to a hand-picked array of movies selected by myself + Zach Bines.",
    skills: "HTML5 | RESTful API | CSS3 | Paired Programming",
    imageSrc: "/images/projects/movies-a-to-z.jpg",
    imageAlt: "Double stitched black canvas hook loop.",
    github: "https://github.com/ZAP-2/Movies-A-to-Z",
    live: "https://zap-2.github.io/Movies-A-to-Z/",
  },
];

export default function Projects({}) {
  return (
    <Layout page="Projects">
      <main>
        <SimpleBanner title="Projects" />
        <div className="py-8 sm:py-16 lg:py-20">
          <GridWideImages data={features} />
        </div>
      </main>
    </Layout>
  );
}
