import { ComponentInterface } from '../component.interface';
import { RectangleFormat } from '../../geometry/formats/rectangle.format';
import { Shape } from './shape.abstract';

export class Rectangle extends Shape implements ComponentInterface {

  public rectangleFormat: RectangleFormat;

  constructor(rectangleFormat: RectangleFormat){
    super();
    this.rectangleFormat = rectangleFormat;
  }

  public draw(){
    this.view.graphics.clear();
    this.view.graphics.beginFill(this.color).beginStroke(this.strokeColor).drawRect(0, 0, this.rectangleFormat.width * this.scale, this.rectangleFormat.height * this.scale);
  };


}
