/* global $: true, Mustache: true */
'use strict';
function createExampleRunner(){
  var template = $('#example-template').html();
  Mustache.parse(template);

  var list = [];
  var addIndexes = function(){
    for(var i in list){
      list[i].index = i;
    }
  };

  var runner = {
    addExample: (example) => {
      list.push(example);
      runner.render();
    },
    render: () => {
      addIndexes();
      var rendered = Mustache.render(template, {examples: list });
      $('#examples-container').html(rendered);
    }
  };
  return runner;
}

/*eslint-disable */
var exampleRunner = createExampleRunner();
/*eslint-enable */
