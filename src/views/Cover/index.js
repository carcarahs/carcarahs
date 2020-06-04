import React from 'react';

import Section from '../../components/Section';
import CoverSocialMedia from '../../components/CoverSocialMedia';
import { COLORS } from '../../style/variables';

import { Container } from './style';

function Cover() {
  return (
    <Section style={{ backgroundColor: COLORS.$blue_9 }}>
      <Container>
        <img src="" alt="Carcartá Hackspace Logo" title="CHS Logo" />
        <CoverSocialMedia />
      </Container>
    </Section>
  );
}

export default Cover;
