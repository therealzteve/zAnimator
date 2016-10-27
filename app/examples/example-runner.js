/* global $: true, Mustache: true, zAnimator: true */
'use strict';
function createExampleRunner(){
  var TEMPLATE_PATH = '/examples/button.mustache.html';
  var EXAMPLES_CANVAS = 'example-canvas';
  var EXAMPLES_LIST_CONTAINER = '#examples-container';
  var EXAMPLES_SEARCH_FIELD = '#examples-search';
  var template;

  $.get(TEMPLATE_PATH, function(scriptContent){
    template = scriptContent;
    Mustache.parse(template);
  });

  var list = [];


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

  var animator = zAnimator.create(EXAMPLES_CANVAS);
  var main = {name: 'main', examples: [], subFolders: {}}
  var tree;

  var runner = {
    getAnimator: () => {
      return animator;
    },
    addExample: (example) => {
      var folder = main;
      if(example.path){
        for(var pathPart  of example.path){
          if(!folder.subFolders[pathPart]){
            folder.subFolders[pathPart] = {name: pathPart, examples: [], subFolders: {}};
          }
          folder = folder.subFolders[pathPart];
        }
        folder.examples.push(example);
        if(list[example.name]){
          throw 'Duplicate example name!';
        }else{
          list[example.name] = example;
        }
        runner.render();
      }
    },
    render: () => {
      var view = convertToView(main);
      var rendered = Mustache.render(template, view, {subFolder: template} );

      if(tree){
        tree.jstree(true).destroy(true);
      }
      $(EXAMPLES_LIST_CONTAINER).children().first().html(rendered);
      tree = $(EXAMPLES_LIST_CONTAINER).jstree({
                "plugins" : [ "search" ],
                "search": {
                  "show_only_matches": true,
                  "show_only_matches_children": true
                }
      })
      .on('ready.jstree', function() {
          $(EXAMPLES_LIST_CONTAINER).jstree("open_all");
      });

      var to = false;
      $(EXAMPLES_SEARCH_FIELD).keyup(function () {
          if(to) { clearTimeout(to); }
          to = setTimeout(function () {
              var v = $(EXAMPLES_SEARCH_FIELD).val();
              $(EXAMPLES_LIST_CONTAINER).jstree(true).search(v);
          }, 250);
      });

    },
    run: (name) => {
      var keys = [];
      for (var listEntry in list) {
        if (list.hasOwnProperty(listEntry)) {
          list[listEntry].stop();
        }
      }
      list[name].start();
    }
  };
  return runner;
}

/*eslint-disable */
var exampleRunner = createExampleRunner();
/*eslint-enable */
