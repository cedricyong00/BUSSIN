import taylorBanner from "../../assets/Taylor.png";
import MainBanner from "../../assets/browse_our_services.png";
import { Image, Anchor } from "@mantine/core";
import ServiceIntroduction from "../../components/Layout/ServiceIntroduction";
import { Link } from "react-router-dom";
import Headline from "../../assets/Headline.png";
import ProductCarousel from "../../components/Layout/ProductsCarousel";

function Homepage() {
  return (
    <>
      <Image src={taylorBanner} alt="Taylor Banner" h={500} />
      <br />
      <Anchor component={Link} to="/taylor-swift" underline="never">
      <Image src={Headline} alt="Headline" />
      </Anchor>
      <br />
      <ServiceIntroduction />
      <br />
      <Anchor component={Link} to="/taylor-swift" underline="never">
        <Image src={MainBanner} alt="Main Banner" style={{ width: "100%" }} />
      </Anchor>
      <h1>Upcoming Event</h1>
      <ProductCarousel />
    </>
  );
}

export default Homepage;
