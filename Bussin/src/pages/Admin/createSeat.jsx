import {
    Button,
    Container,
    Paper,
    TextInput,
    Title,
  } from "@mantine/core";
  import classes from "../User/Signin.module.css";
  import { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import useFetch from "../../hooks/useFetch";
  import useToast from "../../hooks/useToast";
  
  function CreateSeat() {
    //Function to redirect users upon clicking button
    const navigate = useNavigate();
    const { sendRequest } = useFetch();
    const { successToast } = useToast();
    const [submitting, setSubmitting] = useState(false);
    const [number, setNumber] = useState();
    const booked = false;
    const user = null;

    //user input
    const seatState = {
      SeatsNumber: number,
      booked: booked,
      user: user

    };
  
    async function create(evt) {
      evt.preventDefault();
      setSubmitting(true);
      const formData = { ...seatState };
      await sendRequest(
        `${import.meta.env.VITE_API_URL}/bus/create`,
        "POST",
        formData
      );
      setSubmitting(false);
      setNumber(null);
      successToast({
        title: "Seat Created!",
        message: "You have successfully created the seat.",
      });
    }

    async function backButton(evt) {
        evt.preventDefault();
        navigate("/boss");
    }
  
    return (
      <>
        <Container size={420} my={40}>
          <Title ta="center" className={classes.title}>
            Seat Creation
          </Title>
          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <TextInput
              mt="md"
              withAsterisk
              label="Seat Number"
              onChange={(e) => setNumber(e.target.value)}
              value={number}
              required
            ></TextInput>
            <Button fullWidth mt="xl" onClick={create} loading={submitting}>
              Create
            </Button>
            <Button fullWidth mt="xl" onClick={backButton} loading={submitting}>
            Back
          </Button>
          </Paper>
        </Container>
      </>
    );
  }

  export default CreateSeat;