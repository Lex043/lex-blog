import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/Seo";

const ContactPage = () => {
  return (
    <Layout>
      <section className="text-white flex flex-col gap-6 md:flex-row md:justify-center">
        <div>
          <h1 className="text-xs">WHATSAPP & CALL</h1>
          <a
            className="underline text-xl"
            href="tel:+2348120506478"
            target="_blank"
            rel="noreferrer"
          >
            +2348120506478
          </a>
        </div>
        <div>
          <h1 className="text-xs">EMAIL</h1>
          <a
            className="underline text-xl"
            href="mailto:alexferanmi390@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            alexferanmi390@gmail.com
          </a>
        </div>
        <div>
          <h1 className="text-xs">TWITTER</h1>
          <a
            className="underline text-xl"
            href="https://twitter.com/Lex_Feranmi"
            target="_blank"
            rel="noreferrer"
          >
            @Lex_Feranmi
          </a>
        </div>
      </section>
    </Layout>
  );
};

export const Head = () => <Seo title="Contact" />;

export default ContactPage;
