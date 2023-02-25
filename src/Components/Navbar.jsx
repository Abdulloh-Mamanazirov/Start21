import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useLocation } from "react-router-dom";

const drawerWidth = 240;

function Navbar(props) {
  const location = useLocation()
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link to="/" className="font-bold">
          START <span className="text-red-500">21</span>
        </Link>
      </Typography>
      <Divider />
      <List className="flex flex-col">
            <Button sx={{ color: "#000" }}>
              <Link to="/">Home</Link>
            </Button>
            <Button sx={{ color: "#000" }}>
              <Link to="/about">About</Link>
            </Button>
            <Button sx={{ color: "#000" }}>
              <Link to="/contact">Contact</Link>
            </Button>
            <Button sx={{ color: "#000" }}>
              <Link to="/news">News</Link>
            </Button>
            <Button sx={{ color: "#000" }}>
              <Link to="/register">Register</Link>
            </Button>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar className="navbg text-xl py-[5px]" component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              fontSize: "33px",
            }}
          >
            <Link
              to="/"
              className="bg-slate-500 bg-opacity-40 rounded-lg px-3 py-1 font-bold"
            >
              START <span className="text-red-500">21</span>
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {location.pathname === "/" ? (
              <Button
                sx={{ color: "#fff", fontSize: "17px", marginRight: "7px" }}
              >
                <Link to="/" className="underline underline-offset-2">
                  Home
                </Link>
              </Button>
            ) : (
              <Button
                sx={{ color: "#fff", fontSize: "17px", marginRight: "7px" }}
              >
                <Link to="/">Home</Link>
              </Button>
            )}
            {location.pathname === "/about" ? (
              <Button
                sx={{ color: "#fff", fontSize: "17px", marginRight: "7px" }}
              >
                <Link to="/about" className="underline underline-offset-2">
                  About
                </Link>
              </Button>
            ) : (
              <Button
                sx={{ color: "#fff", fontSize: "17px", marginRight: "7px" }}
              >
                <Link to="/about">About</Link>
              </Button>
            )}
            {location.pathname === "/contact" ? (
              <Button
                sx={{ color: "#fff", fontSize: "17px", marginRight: "7px" }}
              >
                <Link to="/contact" className="underline underline-offset-2">
                  Contact
                </Link>
              </Button>
            ) : (
              <Button
                sx={{ color: "#fff", fontSize: "17px", marginRight: "7px" }}
              >
                <Link to="/contact">Contact</Link>
              </Button>
            )}
            {location.pathname === "/news" ? (
              <Button
                sx={{ color: "#fff", fontSize: "17px", marginRight: "7px" }}
              >
                <Link to="/news" className="underline underline-offset-2">
                  News
                </Link>
              </Button>
            ) : (
              <Button
                sx={{ color: "#fff", fontSize: "17px", marginRight: "7px" }}
              >
                <Link to="/news">News</Link>
              </Button>
            )}
            {location.pathname === "/register" ? (
              <Button
                sx={{ color: "#fff", fontSize: "17px", marginRight: "7px" }}
              >
                <Link to="/register" className="underline underline-offset-2">
                  Register
                </Link>
              </Button>
            ) : (
              <Button
                sx={{ color: "#fff", fontSize: "17px", marginRight: "7px" }}
              >
                <Link to="/register">Register</Link>
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main">
        <Toolbar />
      </Box>
    </Box>
  );
}

// DrawerAppBar.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

export default Navbar;
