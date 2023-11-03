import React from "react";

export default function Footer() {
  return (
    <footer>
      <hr />
      <h1>Footer</h1>
      <p>© {new Date().getFullYear()}</p>
    </footer>
  );
}
