import { CircleFormat } from '../../geometry/formats/circle.format';
import { Shape } from './shape.abstract';
import { ComponentInterface } from '../component.interface';

export class Circle extends Shape  {

  public circleFormat: CircleFormat;

  constructor(circleFormat: CircleFormat){
    super();
    this.circleFormat = circleFormat;
  }

  specificDraw(): void {
    this.innerView.graphics.clear();
    this.innerView.graphics.beginFill(this.color).beginStroke(this.strokeColor).setStrokeStyle(this.strokeWidth)
      .drawCircle(this.circleFormat.radius * this.scale, this.circleFormat.radius * this.scale, this.circleFormat.radius * this.scale);
  }

  getWidth(): number {
    return this.circleFormat.radius * 2 * this.scale;
  }
  getHeight(): number {
    return this.circleFormat.radius * 2 * this.scale;
  }

}
