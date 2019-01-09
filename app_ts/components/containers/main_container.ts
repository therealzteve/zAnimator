import { ContainerInterface } from '../container.interface';
import { Component } from '../component.abstract';

export class MainContainer implements ContainerInterface {

  view: createjs.Stage;

  constructor(stageId: String){
    this.view = new createjs.Stage(stageId);
    let canvas:HTMLCanvasElement = <HTMLCanvasElement>this.view.canvas;
    this.view.setBounds(0,0, canvas.width, canvas.height);
  }

  draw(): void {
    this.view.update();
  };

  public add(component:Component): void{
    component.parent = this;
    this.view.addChild(component.view);
  };

  public remove(component:Component): void{
    component.parent = undefined;
    this.view.removeChild(component.view);
  };

  public removeAll(): void{
    this.view.removeAllChildren();
  }

  getWidth(): number {
    return this.view.getBounds().width;
  }
  getHeight(): number {
    return this.view.getBounds().height;
  }

  addEventListener(eventName: String, callback: (T: any) => void) {
    throw new Error("Method not implemented.");
  }
}
