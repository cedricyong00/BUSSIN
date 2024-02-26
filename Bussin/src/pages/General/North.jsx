import {
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  Image,
} from "@mantine/core";
import classes from "./North.module.css";
import north from "../../assets/Product Images/North.gif";
import { useState } from "react";

const mockdata = [
  {
    title: "WHAT IS ON-DEMAND?",
    description: `Our buses will travel based on a route that is subject to demand within North of Singapore. For instance, if there are only ticket holders for Woodlands, Sembawang, and Yishun, our bus will only stop at these 3 areas.`,
  },
  {
    title: "WHICH AREA?",
    description:
      "Yishun, Canberra, Sembawang, Admiralty, Woodlands, Woodlands CIQ",
  },
  {
    title: "SERVICE ASSURANCE",
    description:
      "Rest assured, all vehicles are in serviceable condition, and both drivers' details and licenses to operate are verified before providing services to the public.",
  },
];

export function North() {
  // bus layout
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seatNumber) => {
    setSelectedSeats((prevSelectedSeats) => {
      if (prevSelectedSeats.includes(seatNumber)) {
        return prevSelectedSeats.filter((seat) => seat !== seatNumber);
      } else {
        return [...prevSelectedSeats, seatNumber];
      }
    });
  };

  const features = mockdata.map((feature, index) => (
    <Card
      key={index}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <>
      <Image src={north} className={classes.image} />
      <Container size="lg" py="xl">
        <Group justify="center">
          <Badge variant="filled" size="lg">
            Taylor Swift
          </Badge>
        </Group>

        <Title order={2} className={classes.title} ta="center" mt="sm">
          NORTH
        </Title>

        <Text c="dimmed" className={classes.description} ta="center" mt="md">
          This product/service entitles you to a one-time bus ride from AROUND
          THE STADIUM to MRT STATIONS IN THE NORTH AREA IN SINGAPORE ON-DEMAND
          THROUGH MULTIPLE STOPS.
        </Text>

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
          {features}
        </SimpleGrid>
        <h1></h1>
      </Container>
      <br />
      <Group justify="center">
        <text>
          Please note that by purchasing this product, you agree that you have
          read and accepted our{" "}
          <a
            href="/terms-and-condition"
            className={`${classes.termsLink} ${classes.otherClass}`}
          >
            Terms & Conditions
          </a>{" "}
          for taking this bus ride.
        </text>
        <br />
        <h1>DETAILS</h1>
        <ol>
          <li>
            Our bus will depart from the pick-up point only when it is either{" "}
            <b>
              full OR past our cut-off timing of 45 minutes after the end of the
              concert
            </b>
            . BUSSIN shall not take any responsibility for any parties that fail
            to board the bus before the stated time, and no refunds will be
            issued.
          </li>
          <br />
          <li>
            Your ticket includes <b>1x condiment refreshment and 1x snack</b>.
          </li>
          <br />
          <li>
            Rest assured that as long you have a ticket, you have a reserved
            seat allocation on the bus{" "}
            <b>IF you do arrive before the cut-off timing.</b>
          </li>
          <br />
          <li>
            A Telegram group channel invitation will be sent along with the
            invoice for easier communication on the day itself.
          </li>
        </ol>
        <h2>DATE</h2>
        <br />
        <select name="date">
          <option value="1">02 March 2024</option>
          <option value="2">03 March 2024</option>
          <option value="3">04 March 2024</option>
          <option value="4">07 March 2024</option>
          <option value="5">08 March 2024</option>
          <option value="6">09 March 2024</option>
        </select>
        <br />
        <h2>DROP-OFF</h2>
        <select name="location">
          <option value="sembawang">Sembawang</option>
          <option value="canberra">Canberra</option>
          <option value="yishun">Yishun</option>
          <option value="admiralty">Admiralty</option>
          <option value="woodlands">Woodlands</option>
          <option value="woodlandsc">Woodlands CIQ</option>
        </select>
        <br />
        <h2>QUANTITY</h2>
        <select name="quantity">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
        </Group>
        <br />
        <Group justify="center">
        <h2>Seat Selection</h2>
        </Group>
        <Group justify="center">
        <div className={classes.seats}>
          {[...Array(11)].map((_, rowIndex) => (
            <div key={rowIndex} className={classes.row}>
              {[...Array(4)].map((_, seatIndex) => {
                const seatNumber = rowIndex * 4 + seatIndex + 1;
                return (
                  <div
                    key={seatIndex}
                    className={`${classes.seat} ${
                      selectedSeats.includes(seatNumber) ? classes.selected : ""
                    }`}
                    onClick={() => handleSeatClick(seatNumber)}
                  >
                    {seatNumber}
                  </div>
                );
              })}
            </div>
          ))}
          {/* Last row with 5 seats */}
          <div className={classes.row}>
            {[...Array(4)].map((_, seatIndex) => {
              const seatNumber = 11 * 4 + seatIndex + 1;
              return (
                <div
                  key={seatIndex}
                  className={`${classes.seat} ${
                    selectedSeats.includes(seatNumber) ? classes.selected : ""
                  }`}
                  onClick={() => handleSeatClick(seatNumber)}
                >
                  {seatNumber}
                </div>
              );
            })}
          </div>
        </div>
      </Group>
    </>
  );
}
