import React from "react";
// import './App.css';
import Header from "./hearder/header";
// import Home from "./hearder/home";
// import AboutUs from "./hearder/aboutUs";
// import Contact from "./hearder/contact";
// import { Route, Routes } from "react-router-dom";
import { Search } from "./search";
// import styled from "styled-components";

function App() {
  return (
    <>
      <Header />
      <input type="text"/>
      <Search />
      <input type="text"/>

    </>
  );
}

export default App;
