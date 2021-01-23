import React from "react";
import styled from "styled-components";
import range from "lodash/fp/range";
import map from "lodash/fp/map";
import logo from "./assets/logo.png";

const rangeFromZero = range(0);

const SidebarContainer = styled.div`
  width: 80px;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: -80px;
  top: 0;
  background: #1c1d29;
  .logo-container {
    line-height: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 55px 0 0;
    li {
      cursor: pointer;
      opacity: 0.6;
      border: 3px solid white;
      height: 20px;
      width: 20px;
      border-radius: 20px;
      margin: 0 auto;
      &:hover,
      &:focus {
        opacity: 1;
      }
      &:not(:first-child) {
        margin-top: 50px;
      }
    }
  }
`;

const SidebarMenu = () => (
  <SidebarContainer>
    <div className="logo-container">
      <img src={logo} alt="logo" />
    </div>
    <ul>
      {map(
        (index) => (
          <li key={index} />
        ),
        rangeFromZero(8)
      )}
    </ul>
  </SidebarContainer>
);

export default SidebarMenu;
