import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import logoImg from "./images/logo.svg";
import SwipeableDrawer from "@mui/material/SwipeableDrawer/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { createTheme, ThemeProvider } from "@mui/material";
import { Theme } from "@mui/material/styles/createTheme";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import products from "../../api/products";
import { SearchProducts } from "./Search";

const Header: React.FC = () => {
  const [allCategories, setAllCategories] = useState<string[]>([]);

  useEffect(() => {
    products.getAllCategories().then((e) => setAllCategories(e.data));
  }, []);

  type Anchor = "left" | "right";

  const [state, setState] = React.useState({
    left: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const theme: Theme = createTheme({
    // @ts-ignore
    overrides: {
      MuiTypography: {
        root: {
          fontSize: 40,
        },
      },
    },
  });

  const CustomListItemText = styled(ListItemText)(({ theme }) => ({
    "& .MuiTypography-root": {
      color: "coral",
      fontSize: 20,
    },
  }));

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <Link to={"/"}>
              <img src={logoImg} alt="No logo" />
            </Link>
          </Typography>

          {(["left"] as const).map((anchor) => (
            <React.Fragment key={anchor}>
              <Button
                sx={{ color: "coral" }}
                onClick={toggleDrawer(anchor, true)}
              >
                Catalog
              </Button>
              <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                <ThemeProvider theme={theme}>
                  <List sx={{ mr: 5, ml: 1, margin: 0, width: 250 }}>
                    {allCategories.map((text, index) => (
                      <>
                        <Link
                          to={`/category/${text}`}
                          style={{ textDecoration: "none" }}
                        >
                          <ListItem
                            onClick={toggleDrawer(anchor, false)}
                            button
                            key={text}
                          >
                            <CustomListItemText
                              sx={{ textTransform: "uppercase" }}
                              primary={text}
                            />
                          </ListItem>
                        </Link>
                        <Divider />
                      </>
                    ))}
                  </List>
                </ThemeProvider>
              </SwipeableDrawer>
            </React.Fragment>
          ))}

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link style={{ textDecoration: "none" }} to={"support"}>
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Support
              </Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to={"login"}>
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Login
              </Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to={"createProduct"}>
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Create Product
              </Button>
            </Link>
          </Box>
          <SearchProducts />
          <Box sx={{ flexGrow: 0 }}>
            {(["right"] as const).map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>
                  <Avatar
                    sx={{ color: "coral" }}
                    alt="Remy Sharp"
                    src="/static/images/avatar/2.jpg"
                  />
                </Button>
                <SwipeableDrawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                  onOpen={toggleDrawer(anchor, true)}
                >
                  <List sx={{ mr: 5, ml: 1, margin: 0, width: 250 }}>
                    <Link style={{ textDecoration: "none" }} to={"myOrders"}>
                      <ListItem onClick={toggleDrawer(anchor, false)} button>
                        <CustomListItemText primary="My Orders" />
                      </ListItem>
                      <Divider />
                    </Link>
                    <Link
                      onClick={toggleDrawer(anchor, false)}
                      style={{ textDecoration: "none" }}
                      to={"myWishList"}
                    >
                      <ListItem button>
                        <CustomListItemText primary="My Wish List" />
                      </ListItem>
                      <Divider />
                    </Link>
                    <Link
                      onClick={toggleDrawer(anchor, false)}
                      style={{ textDecoration: "none" }}
                      to={"My reviews"}
                    >
                      <ListItem button>
                        <CustomListItemText primary="My reviews" />
                      </ListItem>
                      <Divider />
                    </Link>
                    <Link
                      onClick={toggleDrawer(anchor, false)}
                      style={{ textDecoration: "none" }}
                      to={"Settings"}
                    >
                      <ListItem button>
                        <CustomListItemText primary="Settings" />
                      </ListItem>
                      <Divider />
                    </Link>
                    <Link
                      onClick={toggleDrawer(anchor, false)}
                      style={{ textDecoration: "none" }}
                      to={"Notifications"}
                    >
                      <ListItem button>
                        <CustomListItemText primary="Notifications" />
                      </ListItem>
                      <Divider />
                    </Link>
                    <ListItem
                      button
                      onClick={() => {
                        localStorage.setItem("token", "");
                      }}
                    >
                      <CustomListItemText primary="Logout" />
                    </ListItem>

                    <Divider />
                  </List>
                </SwipeableDrawer>
              </React.Fragment>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
