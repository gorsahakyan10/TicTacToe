

export default class FilledFieldsCounter{
   private static _counter: number = 0;

   public static readonly increment = () => {
      ++this._counter;
   }

   public static readonly reset = () => {
     this._counter = 0;
 }

   public static readonly getCounter = () => {
      return this._counter;
   }
}
