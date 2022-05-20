/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Exp from 'assets/feature/exp.svg';
import Know from 'assets/feature/know.svg';
import Reso from 'assets/feature/reso.svg';
import Time from 'assets/feature/time.svg';

const data = [
  {
    id: 1,
    imgSrc: Exp,
    altText: 'Expertise',
    title: 'Expertise',
    text:
      'Experience the caliber of our cloud consulting services. Get strategic guidance options fast.',
  },
  {
    id: 2,
    imgSrc: Time,
    altText: 'Time Savings',
    title: 'Time Savings',
    text:
      'We deliver simple and well thought ideas on business efficiency improvement.',
  },
  {
    id: 3,
    imgSrc: Reso,
    altText: 'Resources',
    title: 'Resources',
    text:
      'Discover the advantage of on-demand resources hosted with a cloud service provider.',
  },
  {
    id: 4,
    imgSrc: Know,
    altText: 'Knowledge',
    title: 'Knowledge',
    text:
      'We happily share our knowledge through our work towards a solution and during the training. ',
  },
];

export default function Feature() {
  return (
   <section sx={{variant: 'section.feature'}}>
    <Container>
      <SectionHeader
        slogan="Quality Services"
        title="Inspired by the Cloud"
      />
      <Grid sx={styles.grid}>
        {data.map ((item) => (
          <FeatureCard
            key={item.id}
            src={item.imgSrc}
            alt={item.altText}
            title={item.title}
            text={item.text}
          />
        ))}
      </Grid>
    </Container>
   </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
