import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

const PostList = () => {
  const data = useStaticQuery(graphql`
    query {
      allPrismicPost(sort: { fields: data___date }, limit: 9) {
        nodes {
          data {
            date(formatString: "MMM DD, YYYY")
            title {
              text
            }
            content {
              text
            }
          }
          uid
          id
        }
      }
    }
  `);
  return (
    <article className="grid grid-cols-1 gap-4 my-7 sm:grid-cols-2 lg:grid-cols-3">
      {data.allPrismicPost.nodes.map((node) => (
        <Link
          to={`/blog/${node.uid}`}
          key={node.id}
          className="text-white bg-[#3B3B3C] h-72 flex flex-col justify-between py-6 px-6 border-[1px] border-[#3B3B3C] rounded-md"
        >
          <h2 className="text-2xl font-bold pb-4">{node.data.title.text}</h2>
          <p className="text-sm">{node.data.date}</p>
        </Link>
      ))}
    </article>
  );
};

export default PostList;
