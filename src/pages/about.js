import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/Seo";

const AboutPage = () => {
  return (
    <Layout>
      <section className="mx-auto max-w-lg xl:max-w-2xl text-white">
        <p>
          Hi, I'm Alex Oyebamiji, a front-end web developer and fourth year
          Anatomy undergraduate at Ladoke Akintola University of Techonology,
          Nigeria
        </p>
        <div className="py-5">
          <h1>I have interests in stuff like:</h1>
          <div className="pl-5">
            <li>Animations</li>
            <li>Linux</li>
            <li>Open Source</li>
          </div>
        </div>
        <p>About programming, my current interest is in JAMStack</p>
      </section>
    </Layout>
  );
};

export const Head = () => <Seo title="About" />;

export default AboutPage;
