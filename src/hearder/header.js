import "./header.css";
import { Link } from "react-router-dom";
import styled from "styled-components";


export default function Header() {
  return (
<nav className="header">
      <Link to="/" className="title" style={{}}>
        yuvdeek
      </Link>
      <ul>
        <Link to="/" className="">Home</Link>
        <Link to="/contactUs"> ContactUS</Link>
        <Link to="/aboutUs">AboutUs</Link>
      </ul>
      </nav>
  );
}

