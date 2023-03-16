import { useState, useMemo } from "react";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Avatar, Tooltip } from "@mui/material";
import { blue, blueGrey, grey, pink, red } from "@mui/material/colors";
import texAvatar from "./../assets/tex.jpeg";
import {
  LibraryBooks,
  FavoriteBorder,
  DarkMode,
  LightMode,
  Logout,
  Book,
} from "@mui/icons-material";
import MyCollection from "./MyCollection";
import Wishlist from "./Wishlist";
import CharCard from "./CharCard";
import { Route, Routes, useNavigate } from "react-router-dom";
import useLocalStorageState from "../hooks/useLocalStorageState";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Layout() {
  const [open, setOpen] = useLocalStorageState("sidebarOpen", false);

  const [dark, setDark] = useLocalStorageState("currentTheme", true);

  const darkTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: dark ? "dark" : "light",
        },
      }),
    [dark]
  );

  const pinkTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: dark ? "dark" : "light",
          primary: pink,
        },
      }),
    [dark]
  );

  const blueTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: dark ? "dark" : "light",
          primary: blue,
        },
      }),
    [dark]
  );

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [selectedLink, setSelectedLink] = useState("");

  const list = useMemo(
    () => [
      {
        title: "Characters",
        icon: <Book />,
        link: "/api/v1/characters",
        component: (
          <CharCard {...{ setSelectedLink, link: "/api/v1/characters" }} />
        ),
      },
      {
        title: "My Collection",
        icon: <LibraryBooks />,
        link: "/api/v1/mycollection",
        component: (
          <ThemeProvider theme={blueTheme}>
            <MyCollection
              {...{ setSelectedLink, link: "/api/v1/mycollection" }}
            />
          </ThemeProvider>
        ),
      },
      {
        title: "Wishlist",
        icon: <FavoriteBorder sx={{ color: red[500] }} />,
        link: "/api/v1/wishlist",
        component: (
          <ThemeProvider theme={pinkTheme}>
            <Wishlist {...{ setSelectedLink, link: "/api/v1/wishlist" }} />
          </ThemeProvider>
        ),
      },
    ],
    [pinkTheme, blueTheme]
  );

  const navigate = useNavigate();

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open} enableColorOnDark>
          <Toolbar color="red" sx={{ background: "#043f5e" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon sx={{ color: "#fff" }} />
            </IconButton>
            <IconButton>
              <img
                alt="bonelli editore"
                style={{ width: 100 }}
                src={require("./../assets/bonelliHeader.jpeg")}
              ></img>
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, ml: 5, color: "#fff" }}
            >
              Comic book Manager
            </Typography>
            <IconButton onClick={() => setDark(!dark)}>
              {dark ? <DarkMode /> : <LightMode sx={{ color: "#fff" }} />}
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          open={open}
          sx={{
            ".MuiDrawer-paper": {
              backgroundColor: (theme) =>
                theme.palette.mode === "light" ? blueGrey[200] : blueGrey[900],
            },
          }}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {list.map((item) => (
              <ListItem
                key={item.title}
                disablePadding
                sx={{
                  display: "block",
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    "&.Mui-selected": {
                      backgroundColor: (theme) =>
                        theme.palette.mode === "light"
                          ? blueGrey[300]
                          : blueGrey[800],
                    },
                    "&.Mui-selected:hover": {
                      backgroundColor: (theme) =>
                        theme.palette.mode === "light"
                          ? blueGrey[300]
                          : blueGrey[800],
                    },
                    ":hover": {
                      backgroundColor: (theme) =>
                        theme.palette.mode === "light"
                          ? grey[300]
                          : blueGrey[600],
                    },
                  }}
                  onClick={() => navigate(item.link)}
                  selected={selectedLink === item.link}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.title}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider />
          <Box sx={{ mx: "auto", mt: 3, mb: 1 }}>
            <Tooltip title={"Igor"}>
              <Avatar
                src={texAvatar}
                {...(open && { sx: { width: 100, height: 100 } })}
              />
            </Tooltip>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            {open && <Typography>Igor Paixao</Typography>}
            <Tooltip title="Logout" sx={{ mt: 1 }}>
              <IconButton>
                <Logout />
              </IconButton>
            </Tooltip>
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Routes>
            {list.map((item) => (
              <Route
                key={item.title}
                path={item.link}
                element={item.component}
              />
            ))}
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
