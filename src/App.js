import styled from "styled-components";

import SvgFrame from "./component/SvgFrame";

const Frame = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`;

function App() {
  return (
    <Frame>
      <SvgFrame></SvgFrame>
    </Frame>
  );
}

export default App;
