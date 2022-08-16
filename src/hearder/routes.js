import React from "react";
import { Route,Routes } from "react-router-dom";
import { Home } from "./home";
import { ContactUs } from "./contact";
import { AboutUs } from "./aboutUs";
import Header from "./header";
const RoutePaths=()=>{
    return(
<>
      <Header/>
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/aboutUs" element={<AboutUs/>}/>
           <Route path="/contactUs" element={<ContactUs/>}/>
        </Routes> 
        </>
    );
};



export default RoutePaths;