import styled from "styled-components";

export const TableWrapper = styled.div`
  border-radius: 4px;
  @media (min-width: 768px) {
    ${({ theme }) => theme.shadow1};
  }
`;

export const ContentWrapper = styled.div`
  & > h1 {
    padding-block: 1.5rem;
    color: ${({ theme }) => theme.green};
    @media (max-width: 768px) {
      padding-inline: 20px;
    }
  }
`;

export const ListWrapper = styled.main`
  padding: 5px 28px;
`;

export const SectionList = styled.div`
  box-sizing: border-box;
  padding: 12px 13px;
  display: flex;
  min-height: 50px;
  align-items: center;
  &:nth-child(1) > div:nth-child(1) {
    &:before {
      content: "";
      height: 0 !important;
    }
  }
  & > div:nth-child(1) {
    margin-right: 10px;
    margin-top: 2px;
  }
`;

export const ErrorMessage = styled.div`
  font-size: 16px;
  color: red;
  padding: 20px 40px;
`;

export const Container = styled.div`
  width: calc(100% - 20rem);
  margin: auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const LoadingSpinner = styled.div`
  height: 100px;
`;
