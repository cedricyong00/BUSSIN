/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import cx from 'clsx';
import { useEffect, useState } from 'react';
import { Table, ScrollArea, Button, Group } from '@mantine/core';
import classes from './Admin.module.css';
import useFetch from "../../hooks/useFetch";
import AdminProfileCard from './AdminProfile';
import { Link } from "react-router-dom";

function Admin() {
  const [scrolled, setScrolled] = useState(false);
  const [data, setData] = useState([]);
  const { sendRequest } = useFetch();

  useEffect(() => {
    getBooking();
  }, []);

  const getBooking = async () => {
    try {
      const userData = await sendRequest(
        `${import.meta.env.VITE_API_URL}/booking/boss`,
        "GET"
      );
      const formattedData = userData.bookings.map((booking) => ({
        name: booking.user.name,
        date: booking.date,
        location: booking.location,
        numberOfTickets: booking.seat.SeatsNumber,
      }));
      setData(formattedData);
    } catch (err) {
      console.log(err);
    }
  };

  const rows = data.map((row) => (
    <Table.Tr key={row.id}>
      <Table.Td>{row.name}</Table.Td>
      <Table.Td>{row.date}</Table.Td>
      <Table.Td>{row.location}</Table.Td>
      <Table.Td>{row.numberOfTickets}</Table.Td>
    </Table.Tr>
  ));

  return (
    <>
    <AdminProfileCard />
    <br />
    <br />
    <ScrollArea h={300} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
      <Table miw={700}>
        <Table.Thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
          <Table.Tr>
          <Table.Th>NAME</Table.Th>
            <Table.Th>DATE</Table.Th>
            <Table.Th>LOCATION</Table.Th>
            <Table.Th>SEAT NUMBER</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </ScrollArea>
    <br />
    <Group justify='center'>
    <Button component={Link} to="/boss/create">Create Seats</Button>
    </Group>
    </>
  );
}

export default Admin
