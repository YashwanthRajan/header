import "./header.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderStyle = styled.nav`
  background-color: orange;
  display: flex;
  color: azure;
  justify-content: space-between;
  align-items: stretch;
  gap: 3rem;
  padding: 0px 1rem;
`;
export default function Header() {
  return (
    <HeaderStyle className="nav">
      <Link to="/" className="title" style={{}}>
        yuvdeek
      </Link>
      <ul>
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/contact"> Contact</CustomLink>
        <CustomLink to="/aboutus">AboutUs</CustomLink>
      </ul>
    </HeaderStyle>
  );
}
function CustomLink({ href, children, ...props }) {
  const path = window.location.pathname;

  return (
    <li className={path === href ? "active" : ""}>
      <a href={href} {...props}>
        {children}
      </a>
    </li>
  );
}
