import { useState, useEffect } from "react";
export default function useApi(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => setData(data))
      .catch(() => console.log("Error"));
  }, [url]);

  return data;
}
