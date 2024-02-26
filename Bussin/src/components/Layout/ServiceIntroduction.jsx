import { Text } from '@mantine/core';
import classes from './ServiceIntroduction.module.css';

const data = [
  {
    stats: "What's Bussin?",
    description: 'We are. Say goodbye to leaving concerts earlier to beat the crowd, crowded transport and surge pricing. We offer dynamic coach services to MRT stations, ensuring a smooth and swift journey home.',
  },
  {
    stats: 'FLAT PRICE. NO TAXES.',
    description: 'At Bussin, we understand the challenge of finding affordable transportation home after concerts. Our goal is to offer affordable rides to as many people as possible.',
  },
  {
    stats: 'Not Just A Ride',
    description: (
        <>
          Revolutionising your post-concert experience! At Bussin, your comfort is our priority. Enjoy complimentary refreshments to quench your thirst after screaming your heart out, plus{' '}
          <a href="https://open.spotify.com/user/31lidapqutsxwhqccuwrjdbg3oma?si=5814e67b10504648&nd=1&dlsi=ee79781e7a5f4bac" target="_blank" className={classes.link}>
            dedicated playlists
          </a>{' '}
          to keep the fun going beyond the stadium.
        </>
      ),
  },
];

function ServiceIntroduction() {
  const stats = data.map((stat) => (
    <div key={stat.title} className={classes.stat}>
      <Text className={classes.count}>{stat.stats}</Text>
      <Text className={classes.description}>{stat.description}</Text>
    </div>
  ));
  return <div className={classes.root}>{stats}</div>;
}

export default ServiceIntroduction;
