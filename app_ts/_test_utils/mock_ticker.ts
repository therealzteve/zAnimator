export class MockTicker {

  callback: any;
  testScope: any;

  addCallback(func, scope) {
    this.callback = func;
    this.testScope = scope;
  }

  tick(event: any){
    this.callback.call(this.testScope, event);
  }
}

export default new MockTicker();
