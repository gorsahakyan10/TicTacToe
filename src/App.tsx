import GameManager from "./Classes/GameManager";
import PlayerO from "./Classes/PlayerO";

function App() {
  const lastPlayer = new PlayerO();
  GameManager.run(lastPlayer);

  return <></>;
}

export default App;
