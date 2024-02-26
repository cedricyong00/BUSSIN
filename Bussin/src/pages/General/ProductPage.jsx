import { Fragment } from "react";
import { Text, Title, Button, Image, Card } from "@mantine/core";
import north from "../../assets/Product Images/North.gif";
import northeast from "../../assets/Product Images/Northeast.gif";
import west from "../../assets/Product Images/West.gif";
import east from "../../assets/Product Images/East.gif";
import central from "../../assets/Product Images/Central.gif";
import classes from "./ProductPage.module.css";
import { Link } from "react-router-dom";

const products = [
  { title: "NORTH", locations: ["Yishun", "Canberra", "Sembawang", "Admiralty", "Woodlands", "Woodlands CIQ"], image: north, link: "/taylor-swift-north" },
  { title: "N-EAST", locations: ["Serangoon", "Punggol", "Hougang", "Sengkang"], image: northeast, link: "/taylor-swift-northeast" },
  { title: "WEST", locations: ["Choa Chu Kang", "Jurong East", "Boon Lay", "Joo Koon", "Pioneer", "NTU"], image: west, link: "/taylor-swift-west" },
  { title: "EAST", locations: ["Bedok", "Tampines", "Pasir Ris", "Simei"], image: east, link: "/taylor-swift-east" },
  { title: "CENTRAL", locations: ["Tanjong Pagar", "Chinatown", "Clarke Quay", "Esplanade", "Dhoby Ghaut", "Somerset", "Orchard"], image: central, link: "/taylor-swift-central" }
];

export function ProductPage() {
  return (
    <>
      {products.map((product, index) => (
        <Fragment key={index}>
          <Card radius="md" withBorder padding="xl">
            <div className={classes.wrapper}>
              <div className={classes.body}>
                <Title className={classes.title}>{product.title}</Title>
                <Text fw={500} fz="lg" mb={5}>Drop-off Locations :</Text>
                <Text fz="sm" c="dimmed">{product.locations.map((location, index) => <Fragment key={index}>{location}<br /></Fragment>)}</Text>
                <div className={classes.controls}>
                  <Button component={Link} to={product.link}>Book Now</Button>
                </div>
              </div>
              <Image src={product.image} className={classes.image} />
            </div>
          </Card>
          <br />
        </Fragment>
      ))}
    </>
  );
}

