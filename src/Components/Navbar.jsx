import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const drawerWidth = 240;

function Navbar(props) {
  const location = useLocation();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {t, i18n} = useTranslation()

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
          <Link to="/">{t("Nav_Home_Link")}</Link>
        </Button>
        <Button sx={{ color: "#000" }}>
          <Link to="/about">{t("Nav_About_Link")}</Link>
        </Button>
        <Button sx={{ color: "#000" }}>
          <Link to="/contact">{t("Nav_Contact_Link")}</Link>
        </Button>
        <Button sx={{ color: "#000" }}>
          <Link to="/news">{t("Nav_News_Link")}</Link>
        </Button>
        <Button sx={{ color: "#000" }}>
          <Link to="/register">{t("Nav_Register_Link")}</Link>
        </Button>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  function handleChangleLang(e){
    i18n.changeLanguage(e.target.value)
  }
    
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
            <Button
              sx={{ color: "#fff", fontSize: "17px", marginRight: "7px" }}
            >
              <Link
                to="/"
                className={
                  location.pathname === "/"
                    ? "underline underline-offset-2"
                    : ""
                }
              >
                {t("Nav_Home_Link")}
              </Link>
            </Button>
            <Button
              sx={{ color: "#fff", fontSize: "17px", marginRight: "7px" }}
            >
              <Link
                to="/about"
                className={
                  location.pathname === "/about"
                    ? "underline underline-offset-2"
                    : ""
                }
              >
                {t("Nav_About_Link")}
              </Link>
            </Button>
            <Button
              sx={{ color: "#fff", fontSize: "17px", marginRight: "7px" }}
            >
              <Link
                to="/contact"
                className={
                  location.pathname === "/contact"
                    ? "underline underline-offset-2"
                    : ""
                }
              >
                {t("Nav_Contact_Link")}
              </Link>
            </Button>
            <Button
              sx={{ color: "#fff", fontSize: "17px", marginRight: "7px" }}
            >
              <Link
                to="/news"
                className={
                  location.pathname === "/news"
                    ? "underline underline-offset-2"
                    : ""
                }
              >
                {t("Nav_News_Link")}
              </Link>
            </Button>
            <Button
              sx={{ color: "#fff", fontSize: "17px", marginRight: "7px" }}
            >
              <Link
                to="/register"
                className={
                  location.pathname === "/register"
                    ? "underline underline-offset-2"
                    : ""
                }
              >
                {t("Nav_Register_Link")}
              </Link>
            </Button>
            <select className="text-black" onChange={handleChangleLang}>
              <option value="en">English</option>
              <option value="uz">O'zbek</option>
              <option value="ru">Pусский</option>
            </select>
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

export default Navbar;
