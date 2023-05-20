import { useEffect, useState } from "react";

const UseApi = (url) => {

  const [apiState, setApiState] = useState({
    data: [],
    isLoading: false,
    error: "",
  });

  useEffect(() => {
    async function fetching() {
      try {
        setApiState({ ...apiState, isLoading: true });
        const response = await fetch(url);
        const dataare= await response.json();
        setApiState({ ...apiState, isLoading: false, data: dataare });
      } catch (err) {
        setApiState({ ...apiState, isLoading: false, error: err });
      }
    }

    fetching();
  }, [url]);

  const { data, error, isLoading } = apiState;

  return { data, error, isLoading };
};

export default UseApi;