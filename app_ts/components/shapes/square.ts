import { ComponentInterface } from '../component.interface';
import { SquareFormat } from '../../geometry/formats/square.format';
import { Shape } from './shape.abstract';

export class Square extends Shape {

  public squareFormat: SquareFormat;

  constructor(squareFormat: SquareFormat){
    super();
    this.squareFormat = squareFormat;
  }

  public specificDraw(){
    this.innerView.graphics.clear();
    this.innerView.graphics.beginFill(this.color).beginStroke(this.strokeColor).setStrokeStyle(this.strokeWidth).drawRect(0, 0, this.squareFormat.sideLength * this.scale, this.squareFormat.sideLength * this.scale);
  };

  getWidth(): number {
    return this.squareFormat.getWidth() * this.scale;
  }
  getHeight(): number {
    return this.squareFormat.getHeight() * this.scale;
  }
}
