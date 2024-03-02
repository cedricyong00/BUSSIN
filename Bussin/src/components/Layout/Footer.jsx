import { Container, Text, Anchor } from "@mantine/core";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Text c="dimmed" size="sm">
          <Anchor component={Link} to="/boss">
          ©2024 Bussin Buses All rights reserved.
          </Anchor>
        </Text>
      </Container>
    </div>
  );
}
