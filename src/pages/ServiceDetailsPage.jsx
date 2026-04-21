import React from 'react';
import { useParams } from 'react-router-dom';
import SEO from '../components/SEO';
import ServiceDetails from '../components/ServiceDetails';
import TestimonialsSSVC from '../components/TestimonialsSSVC';
import ContactCTA from '../components/ContactCTA';

export default function ServiceDetailsPage() {
  const { tab } = useParams();
  const validTabs = ['mapping', 'assessment', 'search'];
  const initialTab = validTabs.includes(tab) ? tab : 'mapping';

  return (
    <>
      <SEO title={`${initialTab.charAt(0).toUpperCase() + initialTab.slice(1)} Services`} description={`Detailed information about our ${initialTab} services and executive recruitment strategies.`} />
      <ServiceDetails initialTab={initialTab} key={initialTab} />
      <TestimonialsSSVC />
      <ContactCTA />
    </>
  );
}
