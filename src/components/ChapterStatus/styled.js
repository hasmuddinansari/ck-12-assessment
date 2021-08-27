import styled, { css } from "styled-components";

export const line = css`
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: -210%;
    left: 50%;
    transform: translate(-50%);
    height: 32px;
    width: 1px;
    background: black;
    overflow: hidden;
    z-index: 0;
  }
`;

export const Circle = styled.div`
  height: 15px;
  width: 15px;
  border: 1px solid black;
  border-radius: 50%;
  background: ${({ theme }) => theme.white};
  ${line};
  &:before {
    top: -270%;
    height: 33px;
  }
`;

export const ProgressCircle = styled(Circle)`
  border: 2px dotted ${({ theme }) => theme.green};
  background: ${({ theme }) => theme.white};
  ${line};
  &:before {
    top: -300%;
    height: 30px;
  }
`;

export const CompleteCircle = styled(Circle)`
  position: relative;
  border: none;
  ${line};
  &:after {
    content: "✔";
    position: absolute;
    left: 0;
    top: 2px;
    width: 15px;
    height: 15px;
    text-align: center;
    font-size: 10px;
    background: ${({ theme }) => theme.green};
    color: ${({ theme }) => theme.white};
    border-radius: 50%;
  }
`;
