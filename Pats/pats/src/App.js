import "./App.css";
import Counter from "./Counter.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import Student from "./Student.jsx";

function App() {
  return (
    <>
      <Header />
      <Student name="John" age={50} isStudent={true} />
      <Student name="Jane" age={20} isStudent={false} />
      <Counter />
      <Footer />
    </>
  );
}

export default App;
