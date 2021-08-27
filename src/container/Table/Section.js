import React, { useMemo } from "react";
import { Collapse, Show } from "../../components";
import { useFetch } from "../../hooks";
import { factorySection } from "./helper";
import { ListWrapper, SectionList } from "./styled";

export const Section = ({ title, sectionId, bookId }) => {
  const { getApi, fetchData, data, loading } = useFetch();

  const fetchChapter = () => {
    const url = getApi({ bookId, sectionId }).SECTION;
    fetchData(url);
  };

  const section = useMemo(
    () => factorySection({ sectionId, sectionData: data }),
    [data]
  );

  console.log(section);

  return (
    <Collapse
      {...{
        onHeaderClick: fetchChapter,
        title,
        childSize: section.length,
      }}
    >
      <Show show={loading}>
        <ListWrapper>Loading...</ListWrapper>
      </Show>
      <Show show={!loading && !!section?.length}>
        <ListWrapper>
          {section.map(({ title, id }) => (
            <SectionList key={id}>{title}</SectionList>
          ))}
        </ListWrapper>
      </Show>
    </Collapse>
  );
};
