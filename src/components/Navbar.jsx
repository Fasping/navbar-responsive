import React from "react";
import styled from "styled-components";
import BurgerButton from "./BurgerButton";


const NavbarBox = styled.nav`
h2{
    color: white;
    font-weight: 400;
    span{
        font-weight: bold;
    }
}
padding: .4rem;
background-color: #333;
display: flex;
align-items: center;
justify-content: space-between;
a{
    color:white;
    text-decoration: none;
    margin-right: 1rem;
}
`

function Navbar() {
  return (
    <div>
      <NavbarBox>
        <h2>
          Navbar <span>Resposive</span>
        </h2>
        <div>
          <a href="Home">Home</a>
          <a href="Shop">Shop</a>
          <a href="About">About</a>
          <a href="Contact">Contact</a>
          <a href="Blog">Blog</a>
              </div>
              <BurgerButton />
      </NavbarBox>
    </div>
  );
}

export default Navbar




