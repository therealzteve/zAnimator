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

  var convertToView = function(folder){
    var view = {};
    view.subFolders = [];
    view.name = folder.name;
    view.examples = folder.examples;


    for (var key in folder.subFolders) {
      // skip loop if the property is from prototype
      if (!folder.subFolders.hasOwnProperty(key)) continue;

      var obj = folder.subFolders[key];
      view.subFolders.push(convertToView(obj));
    }

    return view;
  };

  var animator = zAnimator.create('example-canvas');
  var main = {name: 'main', examples: [], subFolders: {}}
  var runner = {
    getAnimator: () => {
      return animator;
    },
    addExample: (example) => {
      var folder = main;
      if(example.path){
        console.log(example.path);
        for(var pathPart  of example.path){
          if(!folder.subFolders[pathPart]){
            folder.subFolders[pathPart] = {name: pathPart, examples: [], subFolders: {}};
          }
          folder = folder.subFolders[pathPart];
        }
        folder.examples.push(example);
        runner.render();
      }
    },
    render: () => {
      addIndexes();
      var view = convertToView(main);
      console.log(view);
      var rendered = Mustache.render(template, view, {subFolder: template} );
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
