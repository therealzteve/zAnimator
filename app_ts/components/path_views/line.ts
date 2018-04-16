import { ComponentInterface } from '../component.interface';
import { PathView } from './path_view.abstract';
import { LinePath } from '../../geometry/paths/line.path';

export class Line extends PathView implements ComponentInterface {

  public linePath: LinePath;

  constructor(linePath: LinePath){
    super();
    this.linePath = linePath;
  }

  public draw(){
    this.view.graphics.clear();
    this.view.graphics
      .setStrokeStyle(this.thickness * this.scale)
      .beginStroke(this.strokeColor)
      .moveTo(this.linePath.start.x * this.scale, this.linePath.start.y * this.scale)
      .lineTo(this.linePath.end.x * this.scale, this.linePath.end.y * this.scale);
  };


}
