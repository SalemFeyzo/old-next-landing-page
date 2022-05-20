/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
/*import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';*/
import Cloft from 'assets/key-feature/cloft.svg';
import Crm from 'assets/key-feature/crm.svg';
import It from 'assets/key-feature/it.svg';
import Web from 'assets/key-feature/web.svg';


const data = [
  {
    id: 1,
    imgSrc: Cloft,
    altText: 'Apps',
    title: 'Apps',
    text:
      'Get support while choosing and implementing an online app.',
  },
  {
    id: 2,
    imgSrc: Crm,
    altText: 'Business Continuity',
    title: 'Business Continuity',
    text:
      'Move fast with cloud information management systems like CRM or DMS.',
  },
  {
    id: 3,
    imgSrc: Web,
    altText: 'Web Development',
    title: 'Web Development',
    text:
      'Reserve some cloud space for your company with a modern website.',
  },
  {
    id: 4,
    imgSrc: It, 
    altText: 'Tech Guide',
    title: 'Tech Guide',
    text:
      'Improve hardware by following steps from tech guide or demand a training.',
  },
];

export default function KeyFeature() {
  return (
   <section sx={{variant: 'section.keyFeature'}} id="feature">
     <Container>
       <SectionHeader
       slogan="Whats the cloud"
       title="Meet the advantages of our cloud consulting services"
       />

       <Grid sx={styles.grid}>
        {data.map((item) => (
          <FeatureCardColumn
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
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
