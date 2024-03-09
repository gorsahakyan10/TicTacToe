import FilledFieldsCounter from "./FilledFieldsCounter"
import Winner from "./Winner";

export default class GameResult{
   constructor(){
      document.addEventListener("click", GameResult._finishGame) 
   } 

   private static _gameResult: string = "";  
 
   public static readonly getGameResult = () => {
       return this._gameResult;
   }

   public static readonly resetGameResult = () => {
      this._gameResult = "";
      console.log(this._gameResult)
  }

   public static readonly _finishGame = () => {
       const counter = FilledFieldsCounter.getCounter();
       const winner = Winner.getWinner();

       if(!winner && counter === 9){
          this._gameResult = "Draw";
       }

       switch(winner?.player){
          case "X":  this._gameResult = "Won 'X'";
              break;
          case "O": this._gameResult = "Won 'O'";   
       }
   }
}
