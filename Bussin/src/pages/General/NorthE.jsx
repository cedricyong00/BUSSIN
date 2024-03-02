/* eslint-disable react-hooks/exhaustive-deps */
import {
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    Image,
    Button,
  } from "@mantine/core";
  import classes from "./North.module.css";
  import northE from "../../assets/Product Images/Northeast.gif";
  import { useEffect, useState } from "react";
  import useFetch from "../../hooks/useFetch";
  import useToast from "../../hooks/useToast";
  import { useOutletContext, useNavigate } from "react-router-dom";
  
  const mockdata = [
    {
      title: "WHAT IS ON-DEMAND?",
      description: `Our buses will travel based on a route that is subject to demand within North of Singapore. For instance, if there are only ticket holders for Woodlands, Sembawang, and Yishun, our bus will only stop at these 3 areas.`,
    },
    {
      title: "WHICH AREA?",
      description:
        "Serangoon, Hougang, Punggol, Sengkang",
    },
    {
      title: "SERVICE ASSURANCE",
      description:
        "Rest assured, all vehicles are in serviceable condition, and both drivers' details and licenses to operate are verified before providing services to the public.",
    },
  ];
  
  export function NorthE() {
    // bus layout
    const [data, setData] = useState([]);
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");
    const [selectedSeats, setSelectedSeats] = useState([]);
    const { sendRequest } = useFetch();
    const { user } = useOutletContext();
    const { successToast, errorToast } = useToast();
    const navigate = useNavigate();
  
    useEffect(() => {
      getSeats();
    }, []);
  
    // GET list of seats
    const getSeats = async (seatId) => {
      try {
        const busData = await sendRequest(
          `${import.meta.env.VITE_API_URL}/bus`,
          "GET"
        );
        const formattedData = busData.buses.map((seat) => {
          return { ...seat };
        });
        setData(formattedData);
        const seat = formattedData.find((seat) => seat._id === seatId);
        if (seat.booked) {
          if (seat.user === user.id) {
            removeSeatBooking(seatId);
            setSelectedSeats((prevSelectedSeats) => {
              if (prevSelectedSeats.includes(seatId)) {
                return prevSelectedSeats.filter((seat) => seat !== seatId);
              } else {
                return [...prevSelectedSeats, seatId];
              }
            });
            return;
          }
          // if seat's user id is not tied to the user
          else if (seat.user !== null && seat.user !== user.id && seat.booked) {
            errorToast();
            return;
          }
        }
        setSelectedSeats((prevSelectedSeats) => {
          if (prevSelectedSeats.includes(seatId)) {
            return prevSelectedSeats.filter((seat) => seat !== seatId);
          } else {
            return [...prevSelectedSeats, seatId];
          }
        });
        // update seat booked status to "BOOKED"
        handleSeatUpdate(seatId);
      } catch (err) {
        console.log(err);
      }
    };
  
    // Seat Selection
    const handleSeatClick = async (seatId) => {
      await getSeats(seatId);
    };
  
    const handleSubmit = async () => {
      if (!user) {
        navigate("/signin");
        return;
      }
      try {
        await sendRequest(
          `${import.meta.env.VITE_API_URL}/booking/create`,
          "POST",
          {
            SeatsNumber: selectedSeats,
            user: user.id,
            date: date,
            location: location
          }
        );
        successToast({
          title: "Seat(s) Booked!",
          message: "You may check your bookings under your account",
        });
      } catch (err) {
        console.log(err);
      }
    };
  
    const handleSeatUpdate = async (seatId) => {
      if (!user) {
        navigate("/signin");
        return;
      }
      try {
        await sendRequest(
          `${import.meta.env.VITE_API_URL}/bus/${seatId}`,
          "POST",
          {
            booked: true,
            user: user.id,
          }
        );
      } catch (err) {
        console.log(err);
      }
      getSeats();
    };
  
    const removeSeatBooking = async (seatId) => {
      if (!user) {
        navigate("/signin");
        return;
      }
      try {
        await sendRequest(
          `${import.meta.env.VITE_API_URL}/bus/${seatId}`,
          "POST",
          {
            booked: false,
            user: null,
          }
        );
      } catch (err) {
        console.log(err);
      }
      getSeats();
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
        <Image src={northE} className={classes.image} />
        <Container size="lg" py="xl">
          <Group justify="center">
            <Badge variant="filled" size="lg">
              Taylor Swift
            </Badge>
          </Group>
  
          <Title order={2} className={classes.title} ta="center" mt="sm">
            NORTHEAST
          </Title>
  
          <Text c="dimmed" className={classes.description} ta="center" mt="md">
            This product/service entitles you to a one-time bus ride from AROUND
            THE STADIUM to MRT STATIONS IN THE NORTHEAST AREA IN SINGAPORE ON-DEMAND
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
          <select name="date" onChange={(e) => setDate(e.target.value)} value={date}>
            <option disabled defaultValue>
              Select Date
            </option>
            <option value="02 March 2024">02 March 2024</option>
            <option value="03 March 2024">03 March 2024</option>
            <option value="04 March 2024">04 March 2024</option>
            <option value="07 March 2024">07 March 2024</option>
            <option value="08 March 2024">08 March 2024</option>
            <option value="09 March 2024">09 March 2024</option>
          </select>
          <br />
          <h2>DROP-OFF</h2>
          <select
            name="location"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          >
            <option disabled defaultValue>
              Select Location
            </option>
            <option value="sengkang">Sengkang</option>
            <option value="punggol">Punggol</option>
            <option value="serangoon">Serangoon</option>
            <option value="hougang">Hougang</option>
          </select>
          <br />
        </Group>
        <br />
        <Group justify="center">
          <h2>Seat Selection</h2>
        </Group>
        <Group justify="center">
          <div className={classes.seats}>
            {/* 12 rows */}
            {[...Array(12)].map((_, rowIndex) => (
              <div key={`row-${rowIndex}`} className={classes.row}>
                {data.slice(rowIndex * 4, (rowIndex + 1) * 4).map((seat) => (
                  <div
                    key={seat._id}
                    className={`${classes.seat} ${
                      selectedSeats.includes(seat._id) ? classes.selected : ""
                    } ${seat.booked ? classes.booked : ""}`}
                    onClick={() => handleSeatClick(seat._id)}
                  >
                    {seat.SeatsNumber}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Group>
        <br />
        <Group justify="center">
          <Button onClick={handleSubmit}>BOOK</Button>
        </Group>
      </>
    );
  }
  