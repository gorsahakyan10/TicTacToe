import CurrentPlayer from "./CurrentPlayer";
import EndGame from "./EndGame";
import GameResult from "./GameResult";
import PlayerO from "./PlayerO";
import Winner from "./Winner";

export default class GameManager{
    public static run(lastPlayer: PlayerO){
       new CurrentPlayer().setHandler(lastPlayer);
       new Winner();
       new GameResult();
       new EndGame();
    }
}
