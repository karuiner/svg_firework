import { useEffect, useState } from "react";
import styled from "styled-components";

function FireBall({ time = 1, rnd }) {
  let [check, setCheck] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setCheck(true);
      return () => {
        setTimeout(() => {}, time * 2000);
      };
    }, time * 1000);
  }, [time, check, setCheck]);

  return (
    <svg>
      {!check ? (
        <>
          <circle cx={0} cy={10} r={5} fill={"red"}>
            <animateMotion
              dur={`${time}s`}
              repeatCount="definite"
              path={`M 0 ${window.innerHeight} C 0 ${window.innerHeight} ${
                window.innerWidth * (0.1 + rnd * 0.1)
              } ${window.innerHeight * (0.5 - rnd * 0.2)}  ${
                window.innerWidth * 0.5
              } ${window.innerHeight * (0.4 - rnd * 0.2)}`}
            />
          </circle>
          <path
            d={`M 0 ${window.innerHeight} C 0 ${window.innerHeight} ${
              window.innerWidth * (0.1 + rnd * 0.1)
            } ${window.innerHeight * (0.5 - rnd * 0.2)}  ${
              window.innerWidth * 0.5
            } ${window.innerHeight * (0.4 - rnd * 0.2)}`}
            stroke="black"
            fill="transparent"
          ></path>
        </>
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
