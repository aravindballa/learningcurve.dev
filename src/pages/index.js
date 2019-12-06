import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Logo from "../images/lc-logo.png";
import Host from "../components/Host";

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
          🎙 An informal conversation between a developer and UX thinker.
        </h2>
        <p className="mt-8">Hosts</p>
        <div className="flex justify-between max-w-lg mx-auto mt-4">
          <Host
            img="https://pbs.twimg.com/profile_images/1139116508011831297/ZTCh8sAg_400x400.png"
            name="@brittikbasu"
            role="UX Thinker"
            twitter="brittikbasu"
          />
          <Host
            img="https://pbs.twimg.com/profile_images/1187261838234251264/MZ2GZDyc_400x400.jpg"
            name="@aravindballa"
            role="Javascript Dev"
            twitter="aravindballa"
          />
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
