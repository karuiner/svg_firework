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
        setActions([...actions, true]);
      }}
    >
      {actions.map((x, i) => {
        return <FireBall key={i} time={10}></FireBall>;
      })}
    </div>
  );
}

export default SvgFrame;
