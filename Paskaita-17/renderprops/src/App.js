import "./App.css";
import DataFetcher from "./components/Datafetcher/DataFetcher";

function App() {
  return (
    <div>
      <DataFetcher
        render={(data) => {
          return (
            <div>
              <h1>{data.title}</h1>
              <p>is completed: {data.completed?.toString()}</p>
            </div>
          );
        }}
      />
      <DataFetcher
        render={(data) => {
          return (
            <div>
              <h3>{data.id}</h3>
              <h3>{data.userId}</h3>
            </div>
          );
        }}
      />
    </div>
  );
}

export default App;
