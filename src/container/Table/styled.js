import styled from "styled-components";

export const TableWrapper = styled.div`
  border-radius: 4px;
  ${({ theme }) => theme.shadow1};
`;

export const ContentWrapper = styled.div`
  & > h1 {
    padding-block: 1.5rem;
  }
`;

export const ListWrapper = styled.ol`
  padding: 10px 28px;
`;

export const SectionList = styled.li`
  box-sizing: border-box;
  padding-block: 10px;
  height: 40px;
`;
