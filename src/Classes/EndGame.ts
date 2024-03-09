import GameResult from "./GameResult";
import ResetterGame from "./ResetterGame";

export default class EndGame{
   constructor(){
      document.addEventListener("click", this._announceWinner);   
   }
   
   private _announceWinner(){
    debugger
      let gameResult = GameResult.getGameResult();
      if(!gameResult){
        return;
      }

      setTimeout(() => {
        alert(gameResult);
        GameResult.resetGameResult();
        new ResetterGame();
      }, 500)
   }
}
