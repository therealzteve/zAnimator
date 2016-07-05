/* global $: true, Mustache: true, zAnimator: true */
'use strict';
function createExampleRunner(){
  var template;
  $.get('/examples/button.mustache.html', function(scriptContent){
    template = scriptContent;
    Mustache.parse(template);
  });
  var list = [];
  var addIndexes = function(){
    for(var i in list){
      list[i].index = i;
    }
  };
  var animator = zAnimator.create('example-canvas');

  var runner = {
    getAnimator: () => {
      return animator;
    },
    addExample: (example) => {
      list.push(example);
      runner.render();
    },
    render: () => {
      addIndexes();
      var rendered = Mustache.render(template, {examples: list });
      $('#examples-container').html(rendered);
    },
    run: (id) => {
      for(var listEntry of list){
        listEntry.stop();
      }
      list[id].start();
    }
  };
  return runner;
}

/*eslint-disable */
var exampleRunner = createExampleRunner();
/*eslint-enable */
