export default class Board{
   private _board: HTMLElement;

   constructor(){
     this._board = document.querySelector(".Board") as HTMLElement;
   }

   get board(){
     return this._board;
   }
}
