/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  Group,
  Button,
  Image,
  Anchor,
  Box,
} from "@mantine/core";
import logo from "../../assets/bussin-logo.png";
import classes from "./Header.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useToast from "../../hooks/useToast";
import useFetch from "../../hooks/useFetch";
import { logOut } from "../../service/users";

export const Header = ({ user, setUser }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { successToast, errorToast } = useToast();
  const { sendRequest } = useFetch();

  const handleLogout = () => {
    try {
      const res = sendRequest(
        `${import.meta.env.VITE_API_URL}/user/logout`,
        "POST",
        { email: user.email }
      );
      logOut();
      setUser(null);
      navigate("/");
      successToast({
        title: "See you again!",
        message: "You have successfully logged out.",
      });
    } catch (err) {
      console.log(err);
      errorToast({
        title: "Error",
        message: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <Box pb={120}>
      <header className={classes.header} size="md">
        <Group justify="space-between" h="100%">
          <Anchor component={Link} to="/" underline="never">
            <Image src={logo} w={150} h={150} />
          </Anchor>
          {location.pathname !== "/signin" && 
          location.pathname !== "/signup" && (
            <Group h="100%" gap={0} visibleFrom="sm">
            <a href="/" className={classes.link}>
              Home
            </a>
            <a href="/taylor-swift" className={classes.link}>
              Taylor Swift
            </a>
          </Group>
          )}
          {!user &&
            location.pathname !== "/signin" &&
            location.pathname !== "/signup" &&
            location.pathname !== "/boss" && (
              <>
                <Group visibleFrom="sm">
                  <Button variant="default" component={Link} to="/signin">
                    Log in
                  </Button>
                  <Button component={Link} to="/signup">
                    Sign up
                  </Button>
                </Group>
              </>
            )}
          {user && (
            
            <Group visibleFrom="sm">
              <Button component={Link} to="/booking">My Bookings</Button>
              <Button onClick={handleLogout}>Log Out</Button>
            </Group>
          )}
        </Group>
      </header>
    </Box>
  );
};
