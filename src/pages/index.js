import * as React from "react";
import Layout from "../components/layout";
import PostList from "../components/PostList";
import Seo from "../components/Seo";
import { useStaticQuery, graphql, Link } from "gatsby";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);
  return (
    <Layout>
      <header className="text-white my-12 max-w-lg mx-auto">
        <h1 className="text-3xl text-center font-bold pb-4">
          Welcome to {data.site.siteMetadata.title}.
        </h1>
        <p className="text-center">{data.site.siteMetadata.description}</p>
      </header>
      <PostList />
      <h1 className="text-white text-center font-bold text-xl underline my-10">
        <Link to="/blog">View All Post</Link>
      </h1>
    </Layout>
  );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
