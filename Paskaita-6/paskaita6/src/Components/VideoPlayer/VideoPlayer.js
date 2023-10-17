import React, { useRef } from "react";

export default function VideoPlayer() {
  //   const [timeInput, setTimeInput] = useState(0);
  const videoRef = useRef();
  const rangeRef = useRef();

  function playButton() {
    videoRef.current.play();
  }

  function pauseButton() {
    videoRef.current.pause();
  }

  function handleRangeChange(e) {
    videoRef.current.currentTime = e.target.value;
  }

  return (
    <div>
      <video ref={videoRef} width={300} height={150}>
        <source src="/video1.mp4" />
      </video>
      <button onClick={playButton}>Play</button>
      <button onClick={pauseButton}>Pause</button>
      <input
        min={0}
        // max={videoRef.current.duration}
        onChange={handleRangeChange}
        type="range"
        ref={rangeRef}
      />
      <br />
      <input
        type="number"
        onChange={(e) => {
          videoRef.current.currentTime = e.target.value;
        }}
      />
    </div>
  );
}
