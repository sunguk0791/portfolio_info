import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  containerColor: {
    backgroundColor: "#000000",
    padding: "4px",
    opacity: "0.8",
  },
  textColor: {
    color: "#FFFFFF",
    letterSpacing: "-1px",
    padding: "2px",
    marginLeft: "24px",
    fontWeight: "700",
    lineHeight: "20px",
  },
  secondContainerColor: {
    backgroundColor: "#000000",
    padding: "4px",
    opacity: "0.7",
  },
}));

const SimpleHeader = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.containerColor}>
      <div>
        <h2 className={classes.textColor}>SUNG WOOK'S PORTFOLIO</h2>
      </div>
      <hr />
    </Container>
  );
};

export default SimpleHeader;
