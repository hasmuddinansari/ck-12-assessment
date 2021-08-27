import styled from "styled-components";

export const CollapseWrapper = styled.div`
  position: relative;
  overflow: hidden;

  & .rotate {
    transition: 0.1s linear;
    transform: rotate(90deg);
  }
`;

export const Header = styled.h1`
  padding: 15px 12px;
  position: relative;
  font-size: 18px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  &:hover {
    background: ${({ theme }) => theme.green};
    color: ${({ theme }) => theme.white};
    & svg {
      stroke: ${({ theme }) => theme.white};
    }
  }
  & svg {
    transition: transform 0.1s linear;
    margin-left: 5px;
  }
  & > p {
    padding-inline: 1rem;
  }
`;

export const CollapseChild = styled.div`
  transition: height 0.4s ease-in-out;
  background-color: white;
  height: ${({ size, open }) => (open ? `${Number(size || 2) * 52}px` : "0")};
  padding-inline: 4px;
`;
