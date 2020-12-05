import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Container,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { AiFillGithub } from "react-icons/ai";
import { SiNotion } from "react-icons/si";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    justifyContent: "center",
    padding: theme.spacing(2),
  },
  appBar: {
    backgroundColor: "black",
    opacity: 0.8,
  },
  simplePadding: {
    padding: theme.spacing(1),
  },
  headText: {
    letterSpacing: "-0.5px",
  },
}));

const SimpleAppBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="sticky" className={classes.appBar}>
      <Toolbar>
        <Typography className={classes.title} variant="h6">
          <span className={classes.headText}>SUNG WOOK's DEV</span>
          {/* <img src="/logo/logo@2x.png" width="220px" /> */}
        </Typography>

        {/* <Typography variant="h5" className={classes.title}>
          성욱의 포트폴리오
        </Typography> */}
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          href="https://github.com/sunguk0791/"
        >
          <AiFillGithub />
        </IconButton>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={() => {
            alert("NOTION CLCIK");
          }}
        >
          <SiNotion />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default SimpleAppBar;
