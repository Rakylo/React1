// import React from "react";
// import Label from "../Label/Label";
// import Button from "../Button/Button";
// import Input from "../TextInput/TextInput";
// import styles from "./ContactForm.module.css";

// export default function ContactForm() {

//   return (
//     <div className={styles.pagrindas}>
//       <Label for="name" text="Name:" />
//       <Input type="text" name="name"  />
//       <Label for="name" text="Username:" />
//       <Input type="text" name="username" />
//       <Label for="name" text="Email:" />
//       <Input type="email" name="email" />
//       <Label for="subject" text="Subject:" />
//       <select id="dropdown">
//         <option value="">-- Please select an option --</option>
//         <option value="option1">Option 1</option>
//         <option value="option2">Option 2</option>
//         <option value="option3">Option 3</option>
//       </select>
//       <Label for="message" text="Message:" />
//       <textarea id="message" name="message" rows="4" cols="50"></textarea>
//       <input type="checkbox" />
//       <label for="subscribe">I agree to the terms and conditions</label>
//       <input type="checkbox" /> <p>Yes</p>
//       <input type="checkbox" /> <p>No</p>
//       <Button />
//     </div>
//   );
// }

import React, { useState } from "react";
import Label from "../Label/Label";
import Button from "../Button/Button";
import Input from "../TextInput/TextInput";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    subject: "",
  });

  const [inputValidity, setInputValidity] = useState({
    name: true,
    username: true,
    email: true,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validateInput(name, value);
  };

  const validateInput = (name, value) => {
    if (name === "name") {
      setInputValidity({
        ...inputValidity,
        name: value.length >= 5,
      });
    } else if (name === "username") {
      setInputValidity({
        ...inputValidity,
        username: value.length >= 5,
      });
    } else if (name === "email") {
      setInputValidity({
        ...inputValidity,
        email: /^[A-Za-z0-9]+@[A-Za-z]+\.[A-Za-z]+$/.test(value),
      });
    }
  };

  const getInputClass = (name) => {
    return inputValidity[name] ? styles.validInput : styles.invalidInput;
  };

  return (
    <div className={styles.pagrindas}>
      <Label for="name" text="Name:" />
      <Input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        className={getInputClass("name")}
      />
      {!inputValidity.name && (
        <p className={styles.errorMessage}>
          Name should have at least 5 characters
        </p>
      )}
      <Label for="name" text="Username:" />
      <Input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleInputChange}
        className={getInputClass("username")}
      />
      {!inputValidity.username && (
        <p className={styles.errorMessage}>
          Username should have at least 5 characters
        </p>
      )}
      <Label for="name" text="Email:" />
      <Input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        className={getInputClass("email")}
      />
      {!inputValidity.email && (
        <p className={styles.errorMessage}>Invalid email format</p>
      )}
      <Label for="subject" text="Subject:" />
      <select id="dropdown">
        <option value="">-- Please select an option --</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <Label for="message" text="Message:" />
      <textarea id="message" name="message" rows="4" cols="50"></textarea>
      <input type="checkbox" />
      <label for="subscribe">
        I agree to the <span>terms and conditions</span>
      </label>
      <input type="checkbox" /> <p>Yes</p>
      <input type="checkbox" /> <p>No</p>
      <Button />
    </div>
  );
}
