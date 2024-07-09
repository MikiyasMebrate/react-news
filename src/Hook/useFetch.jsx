import axios from "axios";
import { useEffect, useState } from "react";

let useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


  useEffect(() => {
    axios.get(url)
    .then((data) => {
       setData(data.data)
       setLoading(false)
    })
    .catch(error => setError(error.message));
  }, [url]);


  return [loading, data, error]
};

export default useFetch;
