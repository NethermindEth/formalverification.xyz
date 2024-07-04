import React from 'react';
import { Helmet } from 'react-helmet';

type ISEOWrapper = { title: string, description: string, canonicalUrl: string, children: React.ReactNode }

export const SEOWrapper:React.FC<ISEOWrapper> = ({ title, description, canonicalUrl, children }) => (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>
      {children}
    </>
  );
