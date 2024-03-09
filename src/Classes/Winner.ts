import { PlayersType } from "./CurrentPlayer";
import LastPlayer from "./LastPlayer";
import PlayerO from "./PlayerO";
import PlayerX from "./PlayerX";
import VictoryCombinationsManager from "./VictoryCombinationsManager";

type WinnerType = PlayersType | undefined;

export default class Winner {
    private static _winner: WinnerType = undefined;

    constructor() {
        document.addEventListener("click", this.defineWinner);
    }

    public readonly defineWinner = () => {
        const { victoryCombinations } = new VictoryCombinationsManager();
        const lastPlayer = LastPlayer.getLastPlayer();
        const positions = lastPlayer.player === "X" ?
                          PlayerX.getPositions() : PlayerO.getPositions();
        if (positions.length < 3) {
            return;
        }
        victoryCombinations.forEach((victoryCombination) => {
            const [a, b, c] = victoryCombination;
            if (
                positions.includes(a) &&
                positions.includes(b) &&
                positions.includes(c)
            ){
                Winner._winner = lastPlayer;
            }
        });
    };

    public static readonly getWinner = () => {
        return this._winner;
    };

    public static readonly resetWinner = () => {
        this._winner = undefined;
    };
}
