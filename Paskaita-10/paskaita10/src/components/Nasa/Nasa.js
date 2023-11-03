import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../Loading/Loading";

const NASA_HOST = process.env.REACT_APP_NASA_HOST;
const NASA_API = process.env.REACT_APP_API_KEY;

export default function Nasa() {
  const [data, setData] = useState({});
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${NASA_HOST}?api_key=${NASA_API}&date=${date}`)
      .then(({ data }) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [date]);

  return (
    <div>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      {loading ? (
        <Loading />
      ) : (
        <div>
          <h4>{data.title}</h4>
          <img src={data.url} alt="" width="150px" />
          <p>{data.explanation}</p>
        </div>
      )}
    </div>
  );
}
