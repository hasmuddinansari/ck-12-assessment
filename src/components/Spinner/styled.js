import styled from "styled-components";

export const SpinnerWrapper = styled.div`
  border: 5px solid ${({ theme }) => theme.gray};
  border-radius: 50%;
  border-top: 5px solid ${({ theme }) => theme.green};
  width: 30px;
  height: 30px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
  transform: scale(0.4);
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
