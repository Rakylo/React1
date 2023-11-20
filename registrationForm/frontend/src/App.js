import "./App.css";
import Modal from "./components/Modal/Modal";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleButton() {
    setIsModalOpen((prev) => !prev);
  }

  return (
    <div>
      <button onClick={handleButton}>Sign up</button>

      <Modal isOpen={isModalOpen} />
    </div>
  );
}

export default App;
