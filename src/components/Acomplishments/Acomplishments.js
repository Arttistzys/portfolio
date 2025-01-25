import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { id: 1, number: 20, text: 'Open Source Projects' },
  { id: 2, number: 50, text: 'Shell Scripts', },
  { id: 3, number: 250000, text: 'Downloads', },
  { id: 4, number: 150, text: 'Github Stars', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index + card.id}>
          <BoxNum>{`${card.number.toLocaleString('en-IN')}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
