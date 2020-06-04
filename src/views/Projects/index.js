import React from 'react';

import Section from '../../components/Section';
import SectionTitle from '../../components/SectionTitle';
import { COLORS } from '../../style/variables';

export default function Projects() {
  return (
    <Section style={{ backgroundColor: COLORS.$blue_9 }}>
      <SectionTitle>Projetos</SectionTitle>
    </Section>
  );
}
