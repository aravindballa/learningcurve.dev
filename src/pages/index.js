import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Logo from "../images/lc-logo.png";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[
          `podcast`,
          `beginner`,
          `developer`,
          `learning curve`,
          `dev podcast`
        ]}
        title="Home"
      />

      <section className="text-center">
        <img
          alt="Cat and human sitting on a couch"
          className="block mx-auto w-1/2 rounded  shadow-2xl"
          src={Logo}
        />

        <h2 className="text-lg my-8 p-3">
          An informal conversation between a developer and UX thinker.
        </h2>
        <p>
          🎙Co-hosted by{` `}
          <a href="https://twitter.com/brittikbasu" target="_blank">
            Brittik
          </a>
          {` `}&{` `}
          <a href="https://twitter.com/aravindballa" target="_blank">
            Aravind
          </a>
        </p>
      </section>
    </Layout>
  );
}

export default IndexPage;
