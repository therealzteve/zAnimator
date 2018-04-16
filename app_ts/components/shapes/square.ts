import { ComponentInterface } from '../component.interface';
import { SquareFormat } from '../../geometry/formats/square.format';
import { Shape } from './shape.abstract';

export class Square extends Shape implements ComponentInterface {

  public squareFormat: SquareFormat;

  constructor(squareFormat: SquareFormat){
    super();
    this.squareFormat = squareFormat;
  }

  public draw(){
    this.view.graphics.clear();
    this.view.graphics.beginFill(this.color).beginStroke(this.strokeColor).drawRect(0, 0, this.squareFormat.sideLength * this.scale, this.squareFormat.sideLength * this.scale);
  };


}
