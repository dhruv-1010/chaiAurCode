import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`,
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
    console.log(data);
  }, [currency]);
  console.log(data);
  return data;
}
// this hook calls an api and returns some data
// we can use useEffect
// whenever we calls an api though we gets a string (just take it as a note)
// this is all about custom hook for now
export default useCurrencyInfo;
