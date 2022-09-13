import { useState } from "react";
import styled from "styled-components";

function FireBall({ time = 1 }) {
  let [check, setCheck] = useState(false);
  setTimeout(() => {
    setCheck(true);
  }, time * 1000);
  return (
    <>
      {!check ? (
        <rect x={"0px"} y={"10px"} height={"10px"} width={"10px"} fill={"red"}>
          {/* <animate
            attributeName="rx"
            values="0;50;0"
            dur="10s"
            repeatCount="indefinite"
          /> */}
          <animateMotion
            dur={`${1}s`}
            repeatCount="definite"
            path="M 0 0 l 200 0  M 200 0 l -200 0"
          />
        </rect>
      ) : (
        <rect x={"0px"} y={"10px"} height={"10px"} width={"10px"} fill={"red"}>
          <animate
            attributeName="rx"
            values="0;50;0"
            dur="10s"
            repeatCount="definite"
          />
        </rect>
      )}
    </>
  );
}

export default FireBall;
