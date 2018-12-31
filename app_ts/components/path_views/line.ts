import { ComponentInterface } from '../component.interface';
import { PathView } from './path_view.abstract';
import { LinePath } from '../../geometry/paths/line.path';

export class Line extends PathView{

  public linePath: LinePath;

  constructor(linePath: LinePath){
    super();
    this.linePath = linePath;
  }

  public specificDraw(){
    this.innerView.graphics.clear();
    this.innerView.graphics
      .setStrokeStyle(this.thickness * this.scale)
      .beginStroke(this.strokeColor)
      .moveTo(this.linePath.start.x * this.scale, this.linePath.start.y * this.scale)
      .lineTo(this.linePath.end.x * this.scale, this.linePath.end.y * this.scale);
  };


  getWidth(): number {
    return this.linePath.start.x > this.linePath.end.x ? this.linePath.start.x : this.linePath.end.x;
  }
  getHeight(): number {
    return this.linePath.start.y > this.linePath.end.y ? this.linePath.start.y : this.linePath.end.y;
  }

}
