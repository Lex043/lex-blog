import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author {
            name
          }
        }
      }
    }
  `);
  return (
    <section className="bg-[#252526] flex flex-col justify-between px-5 py-5 xl:px-16 min-h-screen font-mainFont">
      <section>
        <nav className="flex justify-between items-center py-3">
          <h1 className="text-white text-[1.2rem]">
            <Link to="/">LEX BLOG</Link>
          </h1>
          <ul className="text-white text-xs flex flex-wrap gap-2 sm:gap-3 xl:gap-10">
            <li>
              <Link to="/blog">BLOG</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </nav>
      </section>

      <main>{children}</main>
      <footer className="flex flex-col gap-3 sm:flex-row sm:justify-between">
        <section className="text-white text-sm flex gap-2">
          <a
            className="underline"
            href="https://github.com/lex043"
            target="_blank"
            rel="noreferrer"
          >
            GH
          </a>
          <a
            className="underline"
            href="https://twitter.com/Lex_Feranmi"
            target="_blank"
            rel="noreferrer"
          >
            TW
          </a>
          <a
            className="underline"
            href="https://www.linkedin.com/in/oyebamiji-alex-7a5878195/"
            target="_blank"
            rel="noreferrer"
          >
            LN
          </a>
        </section>
        <p className="text-white text-sm">
          Crafted with love by&nbsp;
          <a
            className="underline"
            href="https://github.com/lex043"
            target="_blank"
            rel="noreferrer"
          >
            {data.site.siteMetadata.author.name}
          </a>
        </p>
      </footer>
    </section>
  );
};

export default Layout;
