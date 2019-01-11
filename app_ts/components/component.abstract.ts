import { AlignX, AlignY } from './Alignments.enum';
import { ContainerInterface } from './container.interface';
import { ComponentInterface } from './component.interface';

export abstract class Component<T extends createjs.DisplayObject> implements ComponentInterface{

  public parent: ContainerInterface;
  public alignX: AlignX = AlignX.Right;
  public alignY: AlignY = AlignY.Top;
  public x: number = 0;
  public y: number = 0;
  public view: createjs.Container;
  protected innerView: T;

  constructor(innerView: T){
    this.view = new createjs.Container;
    this.view.addChild(innerView);
    this.innerView = innerView;
  }

  public draw(){

    this._updateAlignment();

    this.innerView.x = this.x;
    this.innerView.y = this.y;

    this.specificDraw();
  }

  private _updateAlignment(){

    if(!this.parent){
      return;
    }

    if(this.alignX === AlignX.Left){
      this.view.x = 0;
    }

    if(this.alignX === AlignX.Center){
      this.view.x = (this.parent.getWidth() / 2) - (this.getWidth() / 2);
    }

    if(this.alignX === AlignX.Right){
      this.view.x = this.parent.getWidth() - this.getWidth();
    }

    if(this.alignY === AlignY.Top){
      this.view.y = 0;
    }

    if(this.alignY === AlignY.Center){
      this.view.y = (this.parent.getHeight() / 2) - (this.getHeight() / 2);
    }

    if(this.alignY === AlignY.Bottom){
      this.view.y = this.parent.getHeight() - this.getHeight();
    }
  }

  abstract specificDraw(): void;

  abstract getWidth(): number;

  abstract getHeight():number;
}
