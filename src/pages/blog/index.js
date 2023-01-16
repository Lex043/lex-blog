import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/Seo";

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <h1 className="text-white mt-10 text-4xl font-bold underline">Blog</h1>
      <article className="grid grid-cols-1 gap-4 my-5 sm:grid-cols-2 lg:grid-cols-3">
        {data.allPrismicPost.nodes.map((node) => (
          <Link
            to={`/blog/${node.uid}`}
            key={node.id}
            className="text-white bg-[#3B3B3C] h-72 flex flex-col justify-between py-6 px-6 border-[1px] border-[#3B3B3C] rounded-md"
          >
            <h2 className="text-xl font-bold pb-4">{node.data.title.text}</h2>
            <p className="text-sm">{node.data.date}</p>
          </Link>
        ))}
      </article>
    </Layout>
  );
};

export const query = graphql`
  query {
    allPrismicPost(sort: { fields: data___date }) {
      nodes {
        data {
          date(formatString: "MMM DD, YYYY")
          title {
            text
          }
        }
        uid
        id
      }
    }
  }
`;

export const Head = () => <Seo title="BlogPage" />;

export default BlogPage;
