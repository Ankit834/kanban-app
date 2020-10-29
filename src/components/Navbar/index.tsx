import React, { Component } from "react";
import styled from "styled-components";

export class Navbar extends Component {
  render() {
    return (
      <Nav>
        <Header>ClearTax Board</Header>
      </Nav>
    );
  }
}

const Nav = styled.div`
  width: 100%;
  display: flex;
  background-color: #d3d3d3;
  align-items: center;
  justify-content: space-between;
  max-height: 55px;
`;

const Header = styled.h3`
  font-size: x-large;
  margin-left: 10px;
`;

export default Navbar;
