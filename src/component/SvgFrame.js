import { useState } from "react";
import styled from "styled-components";
import FireBall from "./FireBall";
function SvgFrame() {
  let [actions, setActions] = useState([]);
  return (
    <svg
      height={window.innerHeight}
      width={window.innerWidth}
      viewBox={`0 0 ${window.innerWidth} ${window.innerHeight}`}
      onClick={() => {
        setActions([...actions, Math.random()]);
      }}
    >
      {actions.map((x, i) => {
        return <FireBall key={i} time={3} rnd={x}></FireBall>;
      })}
    </svg>
  );
}

export default SvgFrame;
