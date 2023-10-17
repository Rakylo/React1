import "./App.css";
import UserList from "./components/UserList/UserList";

function App() {
  // const [isRendering, setisRendering] = useState(false);

  // if (isRendering) {
  //   return (
  //     <div>
  //       <h1>Labas</h1>
  //     </div>
  //   );
  // }

  return (
    <div>
      <UserList />

      {/* {isRendering ? (
        <h1>is Rendering yra true</h1>
      ) : (
        <h1>is Rendering yra false</h1>
      )}
      <h1>Viso gero</h1>
      <button onClick={() => setisRendering((prev) => !prev)}>Push</button> */}
    </div>
  );
}

export default App;

// puslapyje yra 2 mygtukai posts ir comments. paspaudus posts atsivaizduoja postai, o paspaudus comments atsivaizduoja komentarai. Informaciją imti iš jsonplaceholder ir daryti requestam naudojam axios
