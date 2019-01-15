import { Component } from "../component.abstract";

export class Text extends Component<createjs.Text> {

  public text: string;
  public fontSize: number;
  public font: string;
  public color: string;
  public textAlign: string = "left";

  constructor(){
    super(new createjs.Text());
  }

  specificDraw(): void {
    this.innerView.text = this.text;
    this.innerView.font = this.fontSize + "px " + this.font;
    this.innerView.color = this.color;
    this.innerView.textAlign = this.textAlign;
  }

  getWidth(): number {
    return this.innerView.getMeasuredWidth();
  }
  getHeight(): number {
    return this.innerView.getMeasuredHeight();
  }
}
