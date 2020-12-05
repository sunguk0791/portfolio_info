import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Container, Paper } from "@material-ui/core";
import SimpleHeader from "./components/SimpleHeader";
import SimpleAppBar from "./components/SimpleAppBar";
import "./App.css";
const useStyles = makeStyles((theme) => ({
  containerColor: {
    backgroundColor: "#000000",
    padding: "4px",
    opacity: "0.8",
  },
  textColor: {
    color: "#000",
    letterSpacing: "-1.2px",
    padding: "16px",

    fontWeight: "300",
    lineHeight: "24px",
  },
  secondContainerColor: {
    backgroundColor: "#FAFAFA",
    padding: "4px",
  },
  minimumHeight: {
    height: "100%",
    minHeight: "864px",
  },
  simplePadding: {
    padding: theme.spacing(2),
  },
  boldText: {
    fontWeight: 700,
    opacity: "0.8",
    lineHeight: "32px",
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(14),
    height: theme.spacing(14),
    margin: theme.spacing(1),
    // padding: theme.spacing(1),
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" disableGutters={true}>
      {/* <SimpleHeader /> */}
      <SimpleAppBar />
      <Container className={classes.simplePadding}>
        <Paper elevation={10}>
          <br />
          <Paper>
            <Avatar
              alt="SUNG WOOK"
              src="/image/SUNGWOOK.jpg"
              className={classes.large}
            />
            Hello
            <br />
          </Paper>
          <br />
        </Paper>
      </Container>
    </Container>
  );
};

export default App;
