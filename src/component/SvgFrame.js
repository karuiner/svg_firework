import { useState } from "react";
import styled from "styled-components";
import FireBall from "./FireBall";

function SvgFrame({ height = "100%", width = "100%" }) {
  let [actions, setActions] = useState([]);
  console.log(actions);
  return (
    <div
      onClick={() => {
        console.log("click");
        setActions([
          ...actions,
          <FireBall key={actions.length} time={2}></FireBall>,
        ]);
      }}
    >
      <svg height={height} width={width}>
        {actions.length > 0 ? actions : null}
      </svg>
    </div>
  );
}

export default SvgFrame;
