import CurrentPlayer from "./CurrentPlayer";
import FilledFieldsCounter from "./FilledFieldsCounter";
import GameResult from "./GameResult";
import PlayerO from "./PlayerO";
import PlayerX from "./PlayerX";
import Winner from "./Winner";

export default class ResetterGame{
    constructor(){
        debugger
       const fields = Array.from(document.querySelectorAll(".Field")) as HTMLElement[];
       fields.forEach((field) => field.innerHTML = "");
       FilledFieldsCounter.reset();
       GameResult.resetGameResult();
       Winner.resetWinner();
       PlayerX.resetPositions();
       PlayerO.resetPositions();
       new CurrentPlayer().setHandler(new PlayerO());
    }  
}
