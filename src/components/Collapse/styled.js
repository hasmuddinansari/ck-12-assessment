import styled from "styled-components";

export const CollapseWrapper = styled.div`
  position: relative;
  padding-block: 5px;
  overflow: hidden;

  & .rotate {
    transition: 0.1s linear;
    transform: rotate(90deg);
  }
`;

export const Header = styled.h1`
  padding: 10px;
  position: relative;
  font-size: 18px;
  display: flex;
  align-items: center;
  cursor: pointer;
  & svg {
    transition: 0.1s linear;
  }
  & > p {
    padding-inline: 1rem;
  }
`;

export const CollapseChild = styled.div`
  transition: height 0.1s linear;
  background-color: white;
  height: 0px;
  ${({ theme }) => theme.shadow1};
  &.collapse {
    transition: 0.1s linear;
    height: ${({ size }) => `${Number(size) * 42}px`};
  }
`;
