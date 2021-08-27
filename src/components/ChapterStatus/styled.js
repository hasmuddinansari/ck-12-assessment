import styled from "styled-components";

export const Circle = styled.div`
  height: 15px;
  width: 15px;
  border: 1px solid black;
  border-radius: 50%;
  background: ${({ theme }) => theme.white};
  &:after {
    content: "";
    position: absolute;
    left: 10%;
    width: 12px;
    height: 12px;
    background: ${({ theme }) => theme.white};
    border-radius: 50%;
  }
`;

export const ProgressCircle = styled(Circle)`
  border: 2px dotted ${({ theme }) => theme.green};
  background: ${({ theme }) => theme.white};
  position: relative;
  &:after {
    content: "";
    left: 0;
    width: 10px;
    height: 10px;
  }

  &:before {
    top: -300%;
    height: 30px;
  }
`;

export const CompleteCircle = styled(Circle)`
  position: relative;
  border: none;
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
