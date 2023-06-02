import "./App.css";
//
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
//
import Bitcoin from "./pages/Bitcoin";
import SearchBar from "./pages/SearchBar";
import NoPage from "./pages/NoPage";
import Home from "./pages/Home";
import Test from "./pages/Test";
//
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
//
import VideoSettingsIcon from "@mui/icons-material/VideoSettings";
import InventoryIcon from "@mui/icons-material/Inventory";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import Stack from "@mui/material/Stack";
////////////////
export default function App() {
  ////////////////
  return (
    <div className="App">
      {/* main page      */}
      <h1> rocnogu react library </h1>

      <BrowserRouter>
        {/* sideBar nav      */}
        <div id="sideBar">
          <NavLink to="/" end id="top_side_bar">
            <VideoSettingsIcon style={{ fontSize: 60 }} />
            <h3> Bitcoin system </h3>
          </NavLink>

          <Nav id="navSideBar">
            <NavLink to="/" end>
              <Stack direction="row" alignItems="center" gap={1}>
                <HomeIcon />
                <Typography variant="body1">Home</Typography>
              </Stack>
            </NavLink>

            <NavLink to="/Bitcoin" end>
              <Stack direction="row" alignItems="center" gap={1}>
                <InventoryIcon />
                <Typography variant="body1">Bitcoin</Typography>
              </Stack>
            </NavLink>

            <NavLink to="/SearchBar" end>
              <Stack direction="row" alignItems="center" gap={1}>
                <InventoryIcon />
                <Typography variant="body1">SearchBar</Typography>
              </Stack>
            </NavLink>

            <NavLink to="/Test" end>
              <Stack direction="row" alignItems="center" gap={1}>
                <InventoryIcon />
                <Typography variant="body1">Test</Typography>
              </Stack>
            </NavLink>
          </Nav>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Bitcoin" element={<Bitcoin />} />
          <Route path="SearchBar" element={<SearchBar />} />
          <Route path="Test" element={<Test />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>

      {/* end      */}
    </div>
  );
}
