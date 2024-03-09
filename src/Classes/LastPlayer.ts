import { PlayersType } from "./CurrentPlayer";

export default class LastPlayer{
    private static _lastPlayer: PlayersType;  

    public static readonly getLastPlayer = () =>{
       return this._lastPlayer;
    }

    public static readonly setLastPlayer = (Player: PlayersType) =>{
        this._lastPlayer = Player;
    }
}
