import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

const userEndpoint = "https://jsonplaceholder.typicode.com/users/1";

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get(userEndpoint).then((response) => {
      console.log(response.data);
      setUser(response.data);
    });
  }, []);
  return <div></div>;
}

export default App;
