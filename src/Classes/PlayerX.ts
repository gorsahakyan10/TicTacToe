import CurrentPlayer from "./CurrentPlayer";
import FieldsCounter from "./FilledFieldsCounter";
import Player from "./Player";

type PlayerXType = "X";

export default class PlayerX extends Player {
    private _player: PlayerXType = "X";

    private static _positions: string[] = [];

    public static readonly resetPositions = () => {
        this._positions = [];
    }

    public static readonly getPositions = () => {
        return this._positions;
    }

    public handler(e: Event) {
        if (
            e.target instanceof HTMLElement &&
            e.target.closest(".Field") &&
            e.target.innerHTML === ""
        ) {
            e.target.innerHTML = this._player;
            PlayerX.getPositions().push(e.target.dataset.position as string);
            FieldsCounter.increment();
            new CurrentPlayer().setHandler(new PlayerX());
        }
    }

    get player() {
        return this._player;
    }
}
