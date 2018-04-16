import { ContainerInterface } from '../container.interface';

export class MainContainer implements ContainerInterface {

  view: createjs.Stage;

  constructor(stageId: String){
    this.view = new createjs.Stage(stageId);
  }

  draw(): void {
    this.view.update();
  };

  public add(component:ContainerInterface): void{
    this.view.addChild(component.view);
  };

  public remove(component:ContainerInterface): void{
    this.view.removeChild(component.view);
  };

  public removeAll(): void{
    this.view.removeAllChildren();
  }
}
