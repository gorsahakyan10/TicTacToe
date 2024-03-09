import Board from "./Board";
import LastPlayer from "./LastPlayer";
import PlayerO from "./PlayerO";
import PlayerX from "./PlayerX";

export type PlayersType = PlayerX | PlayerO

export default class CurrentPlayer{
    public readonly setHandler = (lastPlayer: PlayersType) => {
      const { board } = new Board(); 
      const currentPlayer: PlayersType = lastPlayer.player === "X" ? 
                                                        new PlayerO() : 
                                                        new PlayerX() ;
      LastPlayer.setLastPlayer(lastPlayer);
      board.onclick = (e) => currentPlayer.handler(e);
    }
}
