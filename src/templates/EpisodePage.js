import React from "react";
import Layout from "../components/layout";

const EpisodePage = ({ pageContext }) => {
  console.log(pageContext);
  return (
    <Layout>
      <pre>{JSON.stringify(pageContext, null, 2)}</pre>
    </Layout>
  );
};

export default EpisodePage;
