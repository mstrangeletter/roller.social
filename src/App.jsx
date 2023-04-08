import React from "react"
import Footer from "./assets/components/Footer";
import Navbar from "./assets/components/Navbar";
import Register from "./assets/components/Register";
import Contact from "./assets/components/Contact";
import Login from "./assets/components/Login";
import { Routes, Route } from "react-router-dom";
import MapRollerSocial from "./assets/components/Map";
import { Box } from "@mui/material";
import { RoutesProvider } from "./assets/api/Routes";



 
export default function App() {
  return (

    <Box className="App">

        <Navbar />
        <main>
        <Routes>
          <Route path="/" element={<MapRollerSocial />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        
        </main>
       
          <Footer />

    </Box>
    
  );
}


 



