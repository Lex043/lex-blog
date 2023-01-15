/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `LEX BLOG`,
    author: {
      name: `Alex Oyebamiji`,
      summary: `Self taught front-end web dev intrested in JAMStack.`,
    },
    description: `A Blog Built With Gatsby And Prismic For Content Management.`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `lex043-blog`,
        accessToken: `${process.env.PRISMIC_ACCESS_TOKEN}`,
        linkResolver: require("./src/utilities/linkResolver").linkResolver,
        schemas: {
          post: require("./schemas/post.json"),
        },
      },
    },
  ],
};
