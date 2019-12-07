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

        <p className="text-lg my-8 p-3">
          Ease the curve as we share what we have learnt. 📈
          <br />
          🎙 An informal conversation between UX Thinker and a JS Dev.
        </p>

        <p className="mt-8 uppercase">Hosts</p>
        <div className="flex sm:flex-row sm:justify-between sm:max-w-lg flex-col max-w-xs mx-auto">
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
