// Structured data (schema.org). Placeholder contact details for the V0 concept
// — replace address / phone / social profiles with verified values.
const siteUrl = "https://www.elineplast.tn";

const description =
  "Eline Plast manufactures durable PVC and PEHD pipes, drip irrigation lines, and fittings for agriculture and landscaping across Tunisia.";

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Eline Plast",
      url: siteUrl,
      logo: `${siteUrl}/logoelineplast.svg`,
      description,
      sameAs: [] as string[],
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#localbusiness`,
      name: "Eline Plast",
      url: siteUrl,
      image: `${siteUrl}/opengraph-image`,
      description,
      telephone: "+216 00 000 000",
      email: "contact@elineplast.tn",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Zone Industrielle",
        addressCountry: "TN",
      },
      areaServed: "TN",
    },
  ],
};
