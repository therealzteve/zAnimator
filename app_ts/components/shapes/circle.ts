import { CircleFormat } from '../../geometry/formats/circle.format';
import { Shape } from './shape.abstract';
import { ComponentInterface } from '../component.interface';

export class Circle extends Shape implements ComponentInterface {

  public circleFormat: CircleFormat;

  constructor(circleFormat: CircleFormat){
    super();
    this.circleFormat = circleFormat;
  }

  draw(): void {
    this.view.graphics.clear();
    this.view.graphics.beginFill(this.color).beginStroke(this.strokeColor)
      .drawCircle(this.circleFormat.radius * this.scale, this.circleFormat.radius * this.scale, this.circleFormat.radius * this.scale);
  }

}
