import React from 'react';
import { useParams } from 'react-router-dom';
import ServiceDetails from '../components/ServiceDetails';
import TestimonialsSSVC from '../components/TestimonialsSSVC';
import ContactCTA from '../components/ContactCTA';

export default function ServiceDetailsPage() {
  const { tab } = useParams();
  const validTabs = ['mapping', 'assessment', 'strategy', 'search', 'governance'];
  const initialTab = validTabs.includes(tab) ? tab : 'mapping';

  return (
    <>
      <ServiceDetails initialTab={initialTab} key={initialTab} />
      <TestimonialsSSVC />
      <ContactCTA />
    </>
  );
}
