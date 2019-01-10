import { Component } from "../component.abstract";

export class Text extends Component<createjs.Text> {

  public text: string;
  public fontSize: string;
  public font: string;
  public color: string;

  constructor(){
    super(new createjs.Text());
  }

  specificDraw(): void {
    this.innerView.text = this.text;
    this.innerView.font = this.fontSize + "px " + this.font;
    this.innerView.color = this.color;
  }

  getWidth(): number {
    return this.innerView.getMeasuredWidth();
  }
  getHeight(): number {
    return this.innerView.getMeasuredHeight();
  }
}
