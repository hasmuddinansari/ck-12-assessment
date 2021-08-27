import React, { useMemo } from "react";
import { Collapse, Show } from "../../components";
import { ChapterStatus } from "../../components/ChapterStatus";
import { Spinner } from "../../components/Spinner";
import { useFetch } from "../../hooks";
import { factorySection } from "./helper";
import {
  ListWrapper,
  SectionList,
  ErrorMessage,
  LoadingSpinner,
  Status,
} from "./styled";

export const Section = ({ title, sectionId, bookId }) => {
  const { getApi, fetchData, data, loading, error } = useFetch();

  const fetchChapter = () => {
    const url = getApi({ bookId, sectionId }).SECTION;
    fetchData(url);
  };

  const section = useMemo(
    () => factorySection({ sectionId, sectionData: data }),
    [data, sectionId]
  );

  return (
    <Collapse
      {...{
        onHeaderClick: fetchChapter,
        title,
        childSize: section.length,
      }}
    >
      <Show show={loading}>
        <LoadingSpinner className="flex-center">
          <Spinner />
        </LoadingSpinner>
      </Show>
      <Show show={error}>
        <ErrorMessage>{error}</ErrorMessage>
      </Show>
      <Show show={!loading && !!section?.length && !error}>
        <ListWrapper>
          {section.map(({ title, id, status }) => (
            <SectionList key={id}>
              <Status>
                <ChapterStatus {...{ status }} />
              </Status>
              <div>{title}</div>
            </SectionList>
          ))}
        </ListWrapper>
      </Show>
    </Collapse>
  );
};
