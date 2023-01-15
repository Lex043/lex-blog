import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/Seo";

const BlogPost = ({ data }) => {
  return (
    <Layout>
      <section className="md:mx-8">
        <h1 className="text-white mt-5 text-2xl font-bold">
          {data.prismicPost.data.title.text}
        </h1>
        <p className="text-white text-xs">{data.prismicPost.data.date}.</p>
        <p className="text-white my-5">{data.prismicPost.data.content.text}</p>
      </section>
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
