import { useState } from "react";
import styled from "styled-components";

function FireBall({ height = "100%", width = "100%" }) {
  let [check, setCheck] = useState(false);
  setTimeout(() => {
    setCheck(true);
  }, 1000);
  return (
    <div>
      <svg height={height} width={width}>
        {!check ? (
          <rect
            x={"0px"}
            y={"100px"}
            height={"100px"}
            width={"100px"}
            fill={"red"}
          >
            {/* <animate
            attributeName="rx"
            values="0;50;0"
            dur="10s"
            repeatCount="indefinite"
          /> */}
            <animateMotion
              dur="1s"
              repeatCount="definite"
              path="M 0 0 l 200 0  M 200 0 l -200 0"
            />
          </rect>
        ) : (
          <rect
            x={"0px"}
            y={"100px"}
            height={"100px"}
            width={"100px"}
            fill={"red"}
          >
            <animate
              attributeName="rx"
              values="0;50;0"
              dur="10s"
              repeatCount="definite"
            />
          </rect>
        )}
      </svg>
    </div>
  );
}

export default FireBall;
