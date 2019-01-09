import { Component } from "../component.abstract";

export abstract class PathView extends Component<createjs.Shape>{
  strokeColor: string = "#0000FF";
  thickness: number = 1;
  scale: number = 1;

  constructor(){
    super(new createjs.Shape());
  }
}
