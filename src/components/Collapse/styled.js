import styled from "styled-components";

export const CollapseWrapper = styled.div`
  position: relative;
  margin: 2em;
`;

export const CheckBox = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  visibility: 0;
  &:checked ~ h1 ~ .collapse-child {
    max-height: fit-content;
    transition: height 0.5s linear;
  }
  &:checked ~ h1 label::before {
    border-left: 15px solid transparent;
    border-top: 20px solid white;
    margin-top: 12px;
    margin-right: 10px;
  }
`;

export const Header = styled.h1`
  background: steelblue;
  color: white;
  padding: 10px;
  position: relative;
`;

export const Label = styled.label`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  &::before {
    content: "";
    display: inline-block;
    border: 15px solid transparent;
    border-left: 20px solid white;
  }
`;

export const CollapseChild = styled.div`
  max-height: 0px;
  overflow: hidden;
  transition: max-height 0.5s linear;
  background-color: white;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
`;
