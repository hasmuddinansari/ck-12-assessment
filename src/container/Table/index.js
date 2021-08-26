import React from "react";
import { useFetch } from "../../hooks";
import { Show } from "../../components/Show";

export const Table = () => {
  const { getApi, fetchData, data, loading, error } = useFetch();

  const handleGetBook = () => {
    const bookId = "maths";
    const url = getApi({ bookId }).BOOK;
    fetchData(url);
  };

  return (
    <div>
      <button onClick={handleGetBook}>Click to fetch Books</button>
      <Show show={error}>
        <div>{error}</div>
      </Show>
      <Show show={!error}>
        <Show show={loading}>
          <p>Loading...</p>
        </Show>
        <Show show={!loading && data}>
          <table>
            {data.map(({ title, id }) => (
              <tr key={id}>{title}</tr>
            ))}
          </table>
        </Show>
      </Show>
    </div>
  );
};
