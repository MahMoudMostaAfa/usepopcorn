import { useState, useEffect } from "react";
const KEY = "291d12b6";
export function useMovies(query, callBack) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(
    function () {
      callBack?.();
      const controller = new AbortController(); // to solve multiple request at the same time
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal } // for solve multiple request
          );
          if (!res.ok) throw new Error("can't fetch data");
          const data = await res.json();
          if (data.Response === "False") throw new Error("can not find movie");
          setMovies(data.Search);
          setError("");
        } catch (err) {
          if (error.message !== "AbortError") setError(err.message);
          setError("");
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      // handleCloseMovie();
      fetchMovies();
      return function () {
        controller.abort();
      };
    },
    [query]
  );
  return { movies, isLoading, error };
}
