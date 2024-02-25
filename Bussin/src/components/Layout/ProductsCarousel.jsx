import { Image, Card, Text, Group, Button} from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import classes from './ProductCarousel.module.css';
import taylorBanner from "../../assets/Taylor.png";
import { Link } from "react-router-dom";

const images = [
  taylorBanner,
];

function ProductCarousel() {
    console.log(taylorBanner)
  const slides = images.map((image) => (
    <Carousel.Slide key={image}>
      <Image src={image} alt="Taylor Banner"height={150} />
    </Carousel.Slide>
  ));

  return (
    <div style={{width:"50%"}}>
    <Card radius="md" withBorder padding="xl">
      <Card.Section>
        <Carousel
          withIndicators
          loop
          classNames={{
            root: classes.carousel,
            controls: classes.carouselControls,
            indicator: classes.carouselIndicator,
          }}
        >
          {slides}
        </Carousel>
      </Card.Section>

      <Group justify="space-between" mt="lg">
        <Text fw={500} fz="lg">
          Taylor Swift
        </Text>
      </Group>

      <Text fz="sm" c="dimmed" mt="sm">
        From stage to station, we got you!
      </Text>

      <Group justify="space-between" mt="md">
        <div>
          <Text fz="xl" span fw={500} className={classes.price}>
            $15
          </Text>
          <Text span fz="sm" c="dimmed">
            {' '}
            / pax
          </Text>
        </div>

        <Button radius="md" component={Link} to="/taylor-swift">Browse</Button>
      </Group>
    </Card>
    </div>
  );
}

export default ProductCarousel;

