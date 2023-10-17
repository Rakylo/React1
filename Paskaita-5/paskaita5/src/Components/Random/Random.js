import React, { useState, useEffect } from "react";
import axios from "axios";
import Radom from "../Radom/Radom";

const ENDPOINT = "https://api.quotable.io/random";

export default function Random() {
  const [quote, setQuote] = useState(null);

  const fetchRandomQuote = () => {
    axios
      .get(ENDPOINT)
      .then(({ data }) => {
        setQuote(data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <div>
      {quote === null ? (
        <h1>Loading...</h1>
      ) : (
        <Radom quote={quote.content} author={quote.author} />
      )}
      <div>
        <button onClick={fetchRandomQuote}>Push for a random quote</button>
      </div>
    </div>
  );
}
