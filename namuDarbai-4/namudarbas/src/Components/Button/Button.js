import React, { useState } from "react";
import axios from "axios";
import Mygtukui from "../Mygtukui/Mygtukui";

export default function Get() {
  const [users, setusers] = useState([]);

  async function getUsers1() {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setusers(data);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <button onClick={getUsers1}>Get Comments</button>
      {users.map((user) => {
        return (
          <Mygtukui late={user.company.catchPhrase} website={user.website} />
        );
      })}
    </div>
  );
}
