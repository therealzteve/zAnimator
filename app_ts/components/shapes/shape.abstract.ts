import { Component } from '../component.abstract';

export abstract class Shape extends Component<createjs.Shape>{

  color: string = "#000000";
  strokeColor: string = "#0000FF";
  strokeWidth: number = 1;
  scale: number = 1;

  constructor(){
    super(new createjs.Shape());
  }


}
