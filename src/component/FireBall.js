import { useEffect, useState } from "react";
import styled from "styled-components";

function FireBall({ time = 1 }) {
  let [check, setCheck] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setCheck(true);
    }, time * 1000);
  }, [time, check, setCheck]);

  return (
    <svg height={"300px"} width={"100%"}>
      {!check ? (
        <rect x={"0px"} y={"10px"} height={"10px"} width={"10px"} fill={"red"}>
          {/* <animate
            attributeName="rx"
            values="0;50;0"
            dur="10s"
            repeatCount="indefinite"
          /> */}
          <animateMotion
            dur={`${time}s`}
            repeatCount="definite"
            path="M 0 0 l 200 0  M 200 0 l -200 0"
          />
        </rect>
      ) : (
        <rect x={"0px"} y={"10px"} height={"10px"} width={"10px"} fill={"red"}>
          <animate
            attributeName="rx"
            values="0;5;0"
            dur="10s"
            repeatCount="definite"
          />
        </rect>
      )}
    </svg>
  );
}

export default FireBall;
