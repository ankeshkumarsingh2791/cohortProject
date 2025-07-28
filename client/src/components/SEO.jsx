import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title, description, url, image }) => {
  const fullTitle = `${title} | Zenifo`;
  const canonicalUrl = `https://www.zenifo.com${url}`;

  return (
    <Helmet>
      {/* Basic Meta */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image || "https://www.zenifo.com/og-default.jpg"} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || "https://www.zenifo.com/og-default.jpg"} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zenifo",
          "url": "https://www.zenifo.com",
          "logo": "https://www.zenifo.com/logo.png",
          "sameAs": [
            "https://linkedin.com/company/zenifo",
            "https://github.com/zenifo"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
