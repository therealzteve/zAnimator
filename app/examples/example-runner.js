/* global $: true, Mustache: true, zAnimator: true */
'use strict';
function createExampleRunner() {
  var EXAMPLES_CANVAS = 'example-canvas';

  var state = createState();
  var animator = zAnimator.create(EXAMPLES_CANVAS);
  var myMenu = menu(state);
  var myRunner = runner(state);

  var exampleRunner = {
    getAnimator: () => {
      return animator;
    },
    addExample: (example) => {
      if (containsExample(example)) {
        throw 'Duplicate example name!';
      } else {
        state.data.push(example);
      }
      state.trigger('refresh');
    },
    run: (name) => {
      var exampleToStart;
      for(var example of state.data) {
        example.stop();
        if(example.name == name){
          exampleToStart = example;
        }
      }
      exampleToStart.start();
    },
    menu: myMenu,
    runner: myRunner
  };

  function containsExample(name){
    for(var example of state.data){
      if(example.name == name){
        return true;
      }
    }
    return false;
  };

  return exampleRunner;
}



/*eslint-disable */
var exampleRunner;
$(function(){
  exampleRunner = createExampleRunner();
})
/*eslint-enable */
