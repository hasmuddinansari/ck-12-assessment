import React, { useEffect } from "react";
import { useFetch } from "../../hooks";
import { Show } from "../../components";
import { Section } from "./Section";
import { TableWrapper, ContentWrapper, Container } from "./styled";

const bookId = "maths";

export const Table = () => {
  const { getApi, fetchData, data: books, loading, error } = useFetch();

  const getBookById = (bookId) => {
    const url = getApi({ bookId }).BOOK;
    fetchData(url);
  };

  useEffect(() => {
    getBookById(bookId);
  }, []);

  return (
    <Container>
      <Show show={error}>
        <div>{error}</div>
      </Show>
      <Show show={!error}>
        <Show show={!loading && books}>
          <ContentWrapper>
            <h1>Math Chapters</h1>
            <TableWrapper>
              {books.map(({ title, id }) => (
                <Section
                  {...{
                    title,
                    bookId,
                    sectionId: id,
                    key: id,
                  }}
                />
              ))}
            </TableWrapper>
          </ContentWrapper>
        </Show>
      </Show>
    </Container>
  );
};
