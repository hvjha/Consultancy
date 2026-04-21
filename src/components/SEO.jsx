import React, { useEffect } from 'react';

export default function SEO({ title, description }) {
  useEffect(() => {
    // Standard Title Update
    document.title = title ? `${title} | SSV Staff Solutions` : 'SSV Staff Solutions - Executive Search & Recruitment';

    // Meta Description Update
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description || 'SSV Staff Solutions is your premier destination for hiring top executive talent and optimizing organizational architecture.';

    // Additional standard metadata tags can be injected here as well (e.g., Open Graph)
    let metaOGTitle = document.querySelector('meta[property="og:title"]');
    if (!metaOGTitle) {
      metaOGTitle = document.createElement('meta');
      metaOGTitle.setAttribute('property', 'og:title');
      document.head.appendChild(metaOGTitle);
    }
    metaOGTitle.content = document.title;

  }, [title, description]);

  return null; // This component does not render any visual UI footprint
}
