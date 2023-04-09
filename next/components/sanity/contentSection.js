import SanityBlockContent from "@sanity/block-content-to-react";
import markdownStyles from "../../styles/markdown-styles.module.css";

export default function ContentSection({ content }) {
  return (
    <SanityBlockContent
      blocks={content}
      className={markdownStyles.markdownStyles}
    />
  );
}
