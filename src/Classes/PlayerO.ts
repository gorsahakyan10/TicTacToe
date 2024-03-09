import CurrentPlayer from "./CurrentPlayer";
import FieldsCounter from "./FilledFieldsCounter";
import Player from "./Player";

type PlayerOType = "O";

export default class PlayerO extends Player {
    private _player: PlayerOType = "O";

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
            PlayerO.getPositions().push(e.target.dataset.position as string);
            FieldsCounter.increment();
            new CurrentPlayer().setHandler(new PlayerO());
        }
    }

    get player() {
        return this._player;
    }
}
