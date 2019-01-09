import { expect } from 'chai';
import 'mocha';
import { Component } from './component.abstract';
import { AlignX, AlignY } from './Alignments.enum';
import { MainContainer } from './containers/main_container';

class MockComponent extends Component {

  constructor(){
    super(new createjs.Shape());
  }

  specificDraw(): void {

  }

  getWidth(): number {
    return 5;
  }
  getHeight(): number {
    return 5;
  }

  checkX(){
    expect(this.innerView.x).to.eq(this.x);
  }

  checkY(){
    expect(this.innerView.y).to.eq(this.y);
  }

}

describe('component test suite', () => {

  var mainContainer = new MainContainer("stage");
  mainContainer.view.setBounds(0,0,10,10);
  var comp = new MockComponent();
  mainContainer.add(comp);

  it('should return x = 0 for left align', () => {
    comp.alignX = AlignX.Left;
    comp.draw();
    expect(comp.view.x).to.eq(0);
  });

  it('should return x = 2.5 for center align', () => {
    comp.alignX = AlignX.Center;
    comp.draw();
    expect(comp.view.x).to.eq(2.5);
  });

  it('should return x = 5 for right align', () => {
    comp.alignX = AlignX.Right;
    comp.draw();
    expect(comp.view.x).to.eq(5);
  });

  it('should return correct value for top align', () => {
    comp.alignY = AlignY.Top;
    comp.draw();
    expect(comp.view.y).to.eq(0);
  });

  it('should return correct value for y center align', () => {
    comp.alignY = AlignY.Center;
    comp.draw();
    expect(comp.view.y).to.eq(2.5);
  });

  it('should return correct value for y bottom align', () => {
    comp.alignY = AlignY.Bottom;
    comp.draw();
    expect(comp.view.y).to.eq(5);
  });

  it('should move child to correct X value', () => {
    comp.x = 5;
    comp.draw();
    comp.checkX();
  });

  it('should move child to correct Y value', () => {
    comp.y = 5;
    comp.draw();
    comp.checkY();
  });

});
