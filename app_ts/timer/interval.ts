export interface Interval{
  getMs:() => number
}


export class MsInterval implements Interval{

  private ms: number;

  constructor(ms: number){
    this.ms = ms;
  }

  public getMs(){
    return this.ms;
  }
}

export class BpmInterval implements Interval{
  private bpm: number;

  constructor(bpm: number){
    this.bpm = bpm;
  }

  public getMs(){
    return 60000 / this.bpm;
  }
}
