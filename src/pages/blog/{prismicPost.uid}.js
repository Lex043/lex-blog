import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";
import Seo from "../../components/Seo";

const BlogPost = ({ data }) => {
  const image = getImage(data.prismicPost.data.image);
  return (
    <Layout>
      <article className="md:mx-8">
        <h1 className="text-white mt-5 text-2xl font-bold">
          {data.prismicPost.data.title.text}
        </h1>
        <p className="text-white text-xs pb-5">{data.prismicPost.data.date}.</p>
        <GatsbyImage image={image} alt={data.prismicPost.data.content.text} />
        <p className="text-white my-5">{data.prismicPost.data.content.text}</p>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    prismicPost(id: { eq: $id }) {
      data {
        title {
          text
        }
        image {
          gatsbyImageData(width: 300, placeholder: DOMINANT_COLOR)
        }
        date(formatString: "MMM DD, YYYY")
        content {
          text
        }
      }
    }
  }
`;

export const Head = ({ data }) => (
  <Seo title={data.prismicPost.data.title.text} />
);

export default BlogPost;
