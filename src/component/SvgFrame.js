import { useState } from "react";
import styled from "styled-components";
import FireBall from "./FireBall";
const Frame = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
`;
function SvgFrame({ height = "100%", width = "100%" }) {
  let [actions, setActions] = useState([]);
  console.log(actions);
  return (
    <svg
      height={"99vh"}
      width={"99vw"}
      onClick={() => {
        console.log("click");
        setActions([...actions, true]);
      }}
    >
      {actions.map((x, i) => {
        return <FireBall key={i} time={10}></FireBall>;
      })}
    </svg>
  );
}

export default SvgFrame;
