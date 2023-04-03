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
import { Dropdown } from 'antd';


const drawerWidth = 240;

function Navbar(props) {
  const location = useLocation();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {t, i18n} = useTranslation()
  const items = [
  {
    label: (
      <span className="px-5" onClick={(e)=> i18n.changeLanguage("en")}>
        English
      </span>
    ),
  },
  {
    label: (
      <span className="px-5" onClick={(e)=> i18n.changeLanguage("uz")}>
        Uzbek
      </span>
    ),
  },
  {
    label: (
      <span className="px-5" onClick={(e)=> i18n.changeLanguage("ru")}>
        Русский
      </span>
    ),
  }
];
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
      <AppBar className="navbg text-xl" component="nav">
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
              display: { xs: "block", sm: "block" },
              fontSize: "33px",
              fontSize: { xs: "21px",sm:"33px", md: "33px", lg: "33px", xl: "33px" },
            }}
          >
            <Link
              to="/"
              className="bg-slate-500 bg-opacity-40 rounded-lg px-3 py-1 font-bold whitespace-nowrap"
            >
              START <span className="text-red-500">21</span>
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button
              className="navLinkBtn "
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
              className="navLinkBtn "
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
              className="navLinkBtn "
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
              className="navLinkBtn "
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
              className="navLinkBtn "
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
          </Box>
            <Dropdown
              menu={{ items }}
              className="navSelect"
              placement="bottomRight"
              trigger={"click"}
              arrow={{ pointAtCenter: true }}
            >
              <Button>
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  height="30"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
                  ></path>
                </svg>
              </Button>
            </Dropdown>
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
