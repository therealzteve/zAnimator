export default class<T>{

  private _callbacks: Array<(T) => void> = [];

  public handle(param?: T): void{
    for(let callback of this._callbacks){
      callback(param);
    }
  }

  public addCallback(cb: (T) => void){
    this._callbacks.push(cb);
  }

  public removeCallback(cb: (T) => void){
    var index = this._callbacks.indexOf(cb);
    if (index > -1) {
      this._callbacks.splice(index, 1);
    }
  }

  public getCallbacks(): Array<(T) => void>{
    return this._callbacks;
  }
}
