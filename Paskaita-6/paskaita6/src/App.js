import "./App.css";
import DigitalClock from "./Components/DigitalClock/DigitalClock";
import Timer from "./Components/Timer/Timer";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";

function App() {
  return (
    <div>
      <VideoPlayer />
      <Timer />
      <br />
      <DigitalClock />
    </div>
  );
}

export default App;
