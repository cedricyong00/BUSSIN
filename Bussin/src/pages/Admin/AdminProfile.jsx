/* eslint-disable react-hooks/exhaustive-deps */
import { Text } from "@mantine/core";
import classes from "./AdminProfile.module.css";
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";

function AdminProfileCard() {
    const { sendRequest } = useFetch();
    const [loading, setLoading] = useState(true);
    const [bookingNumber, setBookingNumber] = useState(0);
  
    useEffect(() => {
      getData();
    }, []);
  
    const getData = async () => {
      try {
        const userData = await sendRequest(
          `${import.meta.env.VITE_API_URL}/booking/boss`,
          "GET"
        );
        const bookingCounts = {};
        console.log(userData)
        userData.bookings.forEach((booking) => {
          // Count number of bookings
          const userId = booking.user.id;
          bookingCounts[userId] = (bookingCounts[userId] || 0) + 1;
        });
  
        // Calculate the total number of bookings
        const totalBookings = Object.values(bookingCounts).reduce(
          (acc, count) => acc + count,0
        );
        setBookingNumber(totalBookings)
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    const data = [
      {
        title: "BOSS",
        stats: "HELLO",
      },
      {
        stats: "TOTAL NUMBER OF BOOKINGS",
        title: `Number of bookings: ${bookingNumber}`
      },
    ];
  
    const stats = data.map((stat) => (
      <div key={stat.stats} className={classes.stat}>
        <Text className={classes.count}>{stat.stats}</Text>
        <Text className={classes.title}>{stat.title}</Text>
      </div>
    ));
    return <div className={classes.root}>{stats}</div>;
  }
  
  export default AdminProfileCard;

