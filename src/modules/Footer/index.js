import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 25px 15px;
  height: 50px;
  align-items: center;
  color: #7b7d7e;
  font-size: 0.9em;
  flex-flow: row wrap;
  span:first-child {
    flex-basis: 100%;
    border-top: 1px solid #e3e3e3;
  }
  span:last-child {
    padding-right: 25px;
  }
`;

const Footer = () => (
  <FooterContainer>
    <span />
    <span>@ IT Promocodes, {new Date().getFullYear()}</span>
  </FooterContainer>
);

export default Footer;
