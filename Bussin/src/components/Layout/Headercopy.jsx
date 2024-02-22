/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  Group,
  Button,
  Image,
  Anchor,
  Box,
  useMantineTheme,
} from '@mantine/core';
import logo from '../../assets/bussin-logo.png';
import classes from './Headercopy.module.css'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export const Header = ({ user, setUser }) => {
  const theme = useMantineTheme();

  return (
    <Box pb={120}>
      <header className={classes.header} size = "md">
      <Group justify="space-between" h="100%">
      <Anchor component={Link} to="/" underline="never">
      <Image src={logo} w={150} h={150} />
      </Anchor>
          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="/" className={classes.link}>
              Home
            </a>
            <a href="/taylor-swift" className={classes.link}>
              Taylor Swift
            </a>
            <a href="/reviews" className={classes.link}>
              Reviews
            </a>
            <a href="/faq" className={classes.link}>
              FAQ
            </a>
            <a href="/terms-and-condition" className={classes.link}>
              Terms & Condition
            </a>
          </Group>

          <Group visibleFrom="sm">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </Group>
      </header>
    </Box>
  );
}