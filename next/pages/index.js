import { getAllPostsForHome } from "../lib/api";

import BannerImageOverlap from "../components/layouts/banners/bannerImageOverlap";
import Layout from "../components/layouts/base/layout";
import SplitWithScreenshot from "../components/layouts/hero/splitWithScreenshot";
import SplitGridRight from "../components/layouts/split/splitGridRight";
import BlogMainPreview from "@/components/layouts/blog/blogMainPreview";

export default function Home({ blogPost, preview }) {
  return (
    <Layout page="Home">
      <main>
        <div className="pb-8 sm:pb-16">
          <SplitWithScreenshot />
        </div>
        <div className="py-8 sm:py-16">
          <BlogMainPreview showHeading data={blogPost[0]} />
        </div>
        <div className="sm:py-8 py-16">
          <SplitGridRight />
        </div>
        <div className="py-8 lg:py-20">
          <BannerImageOverlap />
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const blogPost = await getAllPostsForHome(preview);
  return {
    props: { blogPost, preview },
    revalidate: 1,
  };
}
