import { ComponentInterface } from '../component.interface';
import { RectangleFormat } from '../../geometry/formats/rectangle.format';
import { Shape } from './shape.abstract';

export class Rectangle extends Shape {

  public rectangleFormat: RectangleFormat;

  constructor(rectangleFormat: RectangleFormat){
    super();
    this.rectangleFormat = rectangleFormat;
  }

  public specificDraw(){
    this.innerView.graphics.clear();
    this.innerView.graphics.beginFill(this.color).beginStroke(this.strokeColor).drawRect(0, 0, this.rectangleFormat.width * this.scale, this.rectangleFormat.height * this.scale);
  };

  getWidth(): number {
    return this.rectangleFormat.width * this.scale;
  }
  getHeight(): number {
    throw this.rectangleFormat.height * this.scale;
  }

}
