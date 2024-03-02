/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import cx from 'clsx';
import { useEffect, useState } from 'react';
import { Table, ScrollArea } from '@mantine/core';
import classes from './Booking.module.css';
import useFetch from "../../hooks/useFetch";
import ProfileCard from '../../components/Layout/ProfileCard';

function Booking() {
  const [scrolled, setScrolled] = useState(false);
  const [data, setData] = useState([]);
  const { sendRequest } = useFetch();

  useEffect(() => {
    getBooking();
  }, []);

  const getBooking = async () => {
    try {
      const userData = await sendRequest(
        `${import.meta.env.VITE_API_URL}/booking`,
        "GET"
      );
      const formattedData = userData.map((booking) => ({
        date: booking.date,
        location: booking.location,
        numberOfTickets: booking.seat.SeatsNumber,
      }));
      setData(formattedData);
      console.log(data)
    } catch (err) {
      console.log(err);
    }
  };

  const rows = data.map((row) => (
    <Table.Tr key={row.id}>
      <Table.Td>{row.date}</Table.Td>
      <Table.Td>{row.location}</Table.Td>
      <Table.Td>{row.numberOfTickets}</Table.Td>
    </Table.Tr>
  ));

  return (
    <>
    <ProfileCard />
    <br />
    <br />
    <ScrollArea h={300} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
      <Table miw={700}>
        <Table.Thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
          <Table.Tr>
            <Table.Th>DATE</Table.Th>
            <Table.Th>LOCATION</Table.Th>
            <Table.Th>SEAT NUMBER</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </ScrollArea>
    </>
  );
}

export default Booking
