import * as React from "react";

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import Grid from "@mui/material/Grid";
//import Link from '@mui/material/Link';
import { Link as RouterLink } from "react-router-dom";

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (index, event) => {
    setAnchorEl({ [index]: event.currentTarget });
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  //Above code is for dropdown menu of about

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#2C5F2DFF" }}>
        <Toolbar>
          <Grid container spacing={0.5}>
            <Grid item xs={2}>
              <Typography> A a s t h a </Typography>
            </Grid>
            <Grid item xs={0.75}>
              <Button component={RouterLink} to="/" color="inherit">
                Home
              </Button>
            </Grid>

            {Object.keys(menuItems).map((item, index) => (
              <Grid item xs={1} key={index}>
                <Button color="inherit" onClick={(e) => handleClick(index, e)}>
                  {item} <i className="fas fa-caret-down" />
                </Button>
                <Menu
                  anchorEl={anchorEl && anchorEl[index]}
                  keepMounted
                  open={anchorEl && Boolean(anchorEl[index])}
                  onClose={handleClose}
                  getContentAnchorEl={null}
                  anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                  transformOrigin={{ vertical: "top", horizontal: "center" }}
                >
                  {menuItems[item].map((menuitems, menuindex) => (
                    <MenuItem
                      key={menuindex}
                      component={RouterLink}
                      to={menuitems.path}
                      selected={menuitems === item}
                      onClick={handleClose}
                    >
                      {menuitems.title}
                    </MenuItem>
                  ))}
                </Menu>
              </Grid>
            ))}
            {/* <Button
                color="inherit"
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                About
              </Button>

              <Menu
                id="basic-menu"
                anchorEl={anchorEl && anchorEl[index]}
                open={Boolean(anchorEl && anchorEl[index])}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem
                  component={RouterLink}
                  to="/aboutus"
                  onClick={handleClose}
                >
                  About Us
                </MenuItem>
                <MenuItem
                  component={RouterLink}
                  to="/mission&vision"
                  onClick={handleClose}
                >
                  Mission & Vision
                </MenuItem>
                <MenuItem
                  component={RouterLink}
                  to="/bod"
                  onClick={handleClose}
                >
                  BOD
                </MenuItem>
                <MenuItem
                  component={RouterLink}
                  to="/subcommittees"
                  onClick={handleClose}
                >
                  Sub Committees
                </MenuItem>
                <MenuItem
                  component={RouterLink}
                  to="/message-from-chairperson"
                  onClick={handleClose}
                >
                  Message from Chairperson
                </MenuItem>
                <MenuItem
                  component={RouterLink}
                  to="/message-from-ceo"
                  onClick={handleClose}
                >
                  Message from CEO
                </MenuItem>
              </Menu> */}

            <Grid item xs={1}>
              <Button component={RouterLink} to="/gallery" color="inherit">
                Gallery
              </Button>
            </Grid>
            <Grid item xs={1}>
              <Button component={RouterLink} to="/notice" color="inherit">
                Notice
              </Button>
            </Grid>
            <Grid item xs={1}>
              <Button component={RouterLink} to="/news" color="inherit">
                News
              </Button>
            </Grid>
            <Grid item xs={1}>
              <Button component={RouterLink} to="/downloads" color="inherit">
                Downloads
              </Button>
            </Grid>
            <Grid item xs={1}>
              <Button component={RouterLink} to="/contact" color="inherit">
                Contact
              </Button>
            </Grid>
          </Grid>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const menuItems = {
  About: [
    {
      title: "About Us",
      path: "/aboutus",
      cName: "dropdown-link",
    },
    {
      title: "BOD",
      path: "/bod",
      cName: "dropdown-link",
    },
    {
      title: "Sub Committees",
      path: "/subcommittees",
      cName: "dropdown-link",
    },
    {
      title: "Message from Chairperson",
      path: "/message-from-chairperson",
      cName: "dropdown-link",
    },
    {
      title: "Message from CEO",
      path: "/message-from-ceo",
      cName: "dropdown-link",
    },
  ],
  Service: [
    {
      title: "Savings",
      path: "/saving",
      cName: "dropdown-link",
    },
    {
      title: "Loan",
      path: "/loan",
      cName: "dropdown-link",
    },
  ],
};
