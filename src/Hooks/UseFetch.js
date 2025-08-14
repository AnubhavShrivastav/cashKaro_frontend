import { useEffect, useState } from "react";

function useFetch(Url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(Url);
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError("Error Fetching Data: ", error);
      }
    };

    fetchData();
  }, [Url]);
  return { data, error };
}

export default useFetch;
