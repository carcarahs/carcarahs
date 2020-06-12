import React from 'react';

import Section from '../../components/Section';
import SectionTitle from '../../components/SectionTitle';
import Member from '../../components/Member';
import { COLORS } from '../../style/variables';

import { Container } from './style';

export default function About() {
  const FOUNDERS = [
    {
      id: 1,
      name: 'Igor',
      thumb: 'igor.png',
    },
    {
      id: 2,
      name: 'Helton',
      thumb: 'helton.png',
    },
    {
      id: 3,
      name: 'Lusca',
      thumb: 'lusca.png',
    },
    {
      id: 4,
      name: 'Oscar',
      thumb: 'oscar.png',
    },
  ];

  return (
    <Section style={{ backgroundColor: COLORS.$blue_8, paddingBottom: '0' }}>
      <SectionTitle>Quem somos</SectionTitle>

      <Container>
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint saepe
            ratione quidem odit cupiditate, fugiat accusamus ex dicta expedita
            recusandae quod alias repellat dolore fugit quisquam nobis debitis
            quo suscipit. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Sint saepe ratione quidem odit cupiditate, fugiat accusamus ex
            dicta expedita recusandae quod alias repellat dolore fugit quisquam
            nobis debitis quo suscipit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint saepe
            ratione quidem odit cupiditate, fugiat accusamus ex dicta expedita
            recusandae quod alias repellat dolore fugit quisquam nobis debitis
            quo suscipit.
          </p>
        </div>

        <h2 className="sub-title">Membros:</h2>
        <div className="carousel">
          {FOUNDERS.map(founder => {
            return (
              <Member
                name={founder.name}
                thumb={founder.thumb}
                key={founder.id}
              />
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
