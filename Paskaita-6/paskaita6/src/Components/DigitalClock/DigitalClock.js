// import React, { useRef } from "react";

// export default function DigitalClock() {
//   const clockRef = useRef();

//   return (
//     <div>
//       <h1 ref={clockRef}>00:00:00</h1>
//       <button
//         onClick={() => {
//           setInterval(() => {
//             const date = new Date();
//             const hours = date.getHours();
//             const minutes = date.getMinutes();
//             const seconds = date.getSeconds();
//             clockRef.current.innerText = `${hours}:${minutes}:${seconds}`;
//           }, 1000);
//         }}
//       >
//         Start
//       </button>
//     </div>
//   );
// }

import React, { useRef } from "react";

export default function DigitalClock() {
  const clockRef = useRef();

  return (
    <div>
      <h1 ref={clockRef}>00:00:00</h1>
      <button
        onClick={() => {
          setInterval(() => {
            const date = new Date();
            const hours = date.getHours().toString().padStart(2, "0");
            const minutes = date.getMinutes().toString().padStart(2, "0");
            const seconds = date.getSeconds().toString().padStart(2, "0");
            clockRef.current.innerText = `${hours}:${minutes}:${seconds}`;
          }, 1000);
        }}
      >
        Start
      </button>
    </div>
  );
}
