import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title, description,openGraph }) => {
  const [canonicalUrl, setCanonicalUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCanonicalUrl(window.location.href);
    } else {
      setCanonicalUrl("https://www.google.com");
    }
  }, []);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={openGraph.title} />
    </Helmet>
  );
};

export default SEO;
