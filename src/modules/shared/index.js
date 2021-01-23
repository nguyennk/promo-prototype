import styled from "styled-components";

export const StyledInput = styled.label`
  position: relative;
  span:first-child {
    position: absolute;
    top: -35px;
    color: #7b7d7e;
    text-transform: uppercase;
    font-size: 0.7em;
  }
  span:last-child {
    margin-left: -25px;
    margin-right: 25px;
    color: #1381e8;
    cursor: pointer;
  }
  input {
    cursor: ${(props) => (props.triggerOnClick ? "pointer" : "auto")};
    outline: none;
    color: rgb(43, 43, 43);
    height: 45px;
    line-height: 45px;
    width: ${(props) => `${props.width}px` || "auto"};
    padding: 0 15px;
    border-radius: 5px;
    border-color: #cecece;
    border-width: 1px;
    border-style: solid;
    background: white;
    &:focus,
    &:hover {
      border-color: ${(props) =>
        props.triggerOnClick ? "#7b7d7e" : "#1381e8"};
    }
  }
`;

export const StyledButton = styled.button`
  outline: none;
  font-size: 1em;
  height: 45px;
  min-width: ${(props) => props.width || 100}px;
  background-color: ${(props) =>
    props.intent === "primary" ? "#1381e8" : "#f4f7f9"};
  padding: 8px 16px;
  border: 1px
    ${(props) => (props.intent === "primary" ? "none" : "solid #cecece")};
  border-radius: 5px;
  color: ${(props) =>
    props.intent === "primary" ? "white" : "rgb(43, 43, 43)"};
  &:not(:disabled) {
    cursor: pointer;
    &:hover,
    &:focus {
      background-color: ${(props) =>
        props.intent === "primary" ? "rgb(52, 122, 183)" : "#d4d4d4"};
    }
    &:active {
      background-color: ${(props) =>
        props.intent === "primary" ? "rgb(0, 53, 128)" : "#d4d4d4"};
    }
  }
  &:disabled {
    background-color: #6fbaff;
  }
`;
