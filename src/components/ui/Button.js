import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import theme from "../../styles/theme";

const Button = props => {
  const Button = styled.button`
    display: block;
    margin: 0 auto;
    color: ${props => props.theme.white};
    background-color: black;
    border: 1px solid ${props => props.theme.white};
    border-radius: 3px;
    font-size: 2rem;
    padding: 1rem;
    &:hover {
      background-color: ${props => props.theme.white};
      color: black;
    }
  `;
  const LinkButton = Button.withComponent(Link);
  const StyledLinkButton = LinkButton.extend`
    text-decoration: none;
    text-align: center;
    width: 50%;
    margin: 2rem auto;
  `;
  return props.link ? (
    <StyledLinkButton to={props.to}>{props.label}</StyledLinkButton>
  ) : (
    <Button onClick={props.clickHandler}>{props.label}</Button>
  );
};

export default Button;
