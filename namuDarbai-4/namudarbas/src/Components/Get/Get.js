import React, { useState } from "react";
import axios from "axios";
import Button2 from "../Button2/Button2";

export default function Get() {
  const [users, setusers] = useState([]);

  async function getUsers() {
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
      <button onClick={getUsers}>Get Posts</button>
      {users.map((user) => {
        return (
          <Button2 zipcode={user.address.zipcode} name={user.company.name} />
        );
      })}
    </div>
  );
}
