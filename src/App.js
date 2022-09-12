import styled from "styled-components";
import FireBall from "./component/FireBall";

const Frame = styled.div`
  height: 100vh;
  width: 100vw;
`;

function App() {
  return (
    <Frame>
      <FireBall height="300px" width="300px"></FireBall>
    </Frame>
  );
}

export default App;
