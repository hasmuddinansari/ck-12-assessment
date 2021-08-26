import { useRef, useState } from "react";

const STATUS = {
  IDLE: "IDLE",
  SUCCESS: "SUCCESS",
  FAILED: "FAILED",
};

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null,
  status: STATUS.IDLE,
};

const getApi = ({ bookId, sectionId }) => ({
  BOOK: `http://localhost:3000/api/book/${bookId}`,
  CHAPTER: `http://localhost:3000/api/book/${bookId}/section/${sectionId}`,
});

export const useFetch = () => {
  const cache = useRef({});
  const [state, setState] = useState(INITIAL_STATE);

  const handleSetState = (newState) => {
    setState((prevState) => ({
      ...prevState,
      ...newState,
    }));
  };

  const handleError = (err) => {
    handleSetState({
      loading: false,
      data: [],
      status: STATUS.ERROR,
      error: err.message,
    });
  };

  const handleFetchURL = async (url) => {
    const response = await fetch(url);
    const { response: newData, statusCode } = await response.json();
    cache.current[url] = newData;
    if (statusCode === 200) {
      handleSetState({
        loading: false,
        data: newData,
        status: STATUS.SUCCESS,
      });
      return;
    }
    handleError(newData);
  };

  const fetchData = async (url) => {
    if (cache.current[url]) {
      const cachedData = cache.current[url];
      handleSetState({
        data: cachedData,
        error: null,
        status: STATUS.SUCCESS,
      });
      return;
    }
    handleSetState({ ...INITIAL_STATE, loading: true });
    try {
      handleFetchURL(url);
    } catch (err) {
      handleError(err);
    }
  };

  return { ...state, fetchData, getApi };
};
