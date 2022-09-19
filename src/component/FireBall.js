import { useEffect, useState } from "react";
import styled from "styled-components";

function FireBall({ time = 1, rnd }) {
  let [check, setCheck] = useState(false);
  let [check2, setCheck2] = useState(false);
  let [ptc, setPtc] = useState([]);

  useEffect(() => {
    if (ptc.length === 0) {
      let sub = [];
      for (let i = 0; i < 32; i++) {
        let k = Math.random() * Math.PI * 2;
        sub.push(k);
      }
      setPtc(sub);
    }

    setTimeout(() => {
      setCheck(true);
      return () => {
        setTimeout(() => {
          setCheck2(true);
          setPtc([]);
        }, time * 1000);
      };
    }, time * 1000);
  }, [time, check, setCheck, check2, setCheck2]);

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
        <> </>
      )}
      {check && !check2 ? (
        <>
          {ptc.map((x, i) => {
            let rx = 50 * Math.cos(x),
              ry = 50 * Math.sin(x);

            return (
              <svg key={i}>
                <circle
                  cx={window.innerWidth * 0.5}
                  cy={window.innerHeight * (0.4 - rnd * 0.2)}
                  r={2}
                  fill={"red"}
                >
                  <animate
                    attributeName="opacity"
                    values="0;1;0"
                    dur={`${Math.random() / 2}s`}
                    repeatCount="indefinite"
                  />
                  <animateMotion
                    dur={`${time}s`}
                    repeatCount="definite"
                    path={`M 0 0 L ${rx} ${-ry}`}
                  />
                </circle>
              </svg>
            );
          })}
        </>
      ) : (
        <></>
      )}
    </svg>
  );
}

export default FireBall;
