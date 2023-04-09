import GridWideImages from "../../components/layouts/grids/gridWideImages";
import SimpleBanner from "../../components/layouts/banners/simpleBanner";
import Layout from "../../components/layouts/base/layout";
import { getAllProjects } from "@/lib/api";

export default function Projects({ allProjects, preview }) {
  return (
    <Layout page="Projects">
      <main>
        <SimpleBanner title="Projects" />
        <div className="py-8 sm:py-16 lg:py-20">
          <GridWideImages data={allProjects} />
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const allProjects = await getAllProjects(preview);
  return {
    props: { allProjects, preview },
    revalidate: 1,
  };
}
