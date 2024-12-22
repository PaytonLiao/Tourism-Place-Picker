import { useEffect, useState } from "react";

export function useFetch(fetchFn, initialValue) {
  const [IsFetching, setIsFetching] = useState();
  const [error, setError] = useState();
  const [fetchedData, setFetchedData] = useState(initialValue);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const data = await fetchFn();
        setFetchedData(data);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch data." });
      }

      setIsFetching(false);
    }

    fetchData();
  }, [fetchFn]);
  return {
    IsFetching,
    fetchedData,
    setFetchedData,
    error,
  };
}
