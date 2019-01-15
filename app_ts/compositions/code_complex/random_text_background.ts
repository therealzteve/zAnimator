import { Component } from "../../components/component.abstract";
import { Text } from '../../components/shapes/text';
import RandomValueModificator from '../../modificators/random_value.modificator';

export default class RandomTextBackground extends Component<createjs.Container> {

  public width: number;
  public height: number;
  private _textValues: Array<String>;
  private _textOptions: Object;

  private texts: Array<Text> = [];
  private textModificators: Array<RandomValueModificator> = [];
  private fontSizeModificators: Array<RandomValueModificator> = [];

  constructor(numberOfTexts: number, textValues: Array<string>, fontRange: { min: number, max: number}, textOptions: Object = {}, changeProbability: number = 1){
    super(new createjs.Container);
    this._textValues = textValues;

    for(let i = 0; i < numberOfTexts; i++){
      let newText = new Text();
      (<any>Object).assign(newText, textOptions);
      newText.text = textValues[Math.floor(Math.random() * textValues.length)];
      newText.fontSize = fontRange.min + Math.random() * (fontRange.max - fontRange.min);
      this.texts.push(newText);

      let textModificator = new RandomValueModificator(this._textValues);
      textModificator.subjects.push({ subject:newText, property: "text" });
      textModificator.changeProbability = changeProbability;
      this.textModificators.push(textModificator);


      let fontSizeModificator = new RandomValueModificator();
      fontSizeModificator.range = fontRange;
      fontSizeModificator.subjects.push({subject: newText, property: "fontSize"});
      fontSizeModificator.changeProbability = changeProbability;
      this.fontSizeModificators.push(fontSizeModificator);

      this.innerView.addChild(newText.view);
    }
  }

  get textValues(){
    return this._textValues;
  }

  set textValues(newTextValues: Array<String>){
    this._textValues = newTextValues;
    for(let modificator of this.textModificators){
      modificator.valueList = newTextValues;
    }
  }

  get textOptions(){
    return this._textOptions;
  }

  set textOptions(newTextOptions: Object){
    this._textOptions = newTextOptions;
    for(let text of this.texts){
      (<any>Object).assign(newTextOptions, text);
    }
  }

  specificDraw(): void {
    for(let text of this.texts){
      text.draw();
    }
  }

  private initialize(){
    for(let text of this.texts){
      text.x = Math.random() * this.getWidth();
      text.y = Math.random() * this.getHeight();
    }
  }

  public getWidth(): number {
    if(typeof this.width !== "undefined"){
      return this.width;
    }
    return this.parent.getWidth();
  }

  public getHeight(): number {
    if(typeof this.height !== "undefined"){
      return this.height;
    }
    return this.parent.getHeight();
  }

  public start(){
    this.initialize();
    for(let modificator of this.textModificators){
      modificator.start();
    }
    for(let modificator of this.fontSizeModificators){
      modificator.start();
    }
  }

  public stop(){
    for(let modificator of this.textModificators){
      modificator.stop();
    }
    for(let modificator of this.fontSizeModificators){
      modificator.stop();
    }
  }
}
