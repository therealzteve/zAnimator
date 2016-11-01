function menu(state){
  var EXAMPLES_LIST_CONTAINER = '#examples-container';
  var EXAMPLES_SEARCH_FIELD = '#examples-search';
  var TEMPLATE_PATH = 'examples/ui/menu/button.mustache.html';
  var template;
  var tree;

  var menu = {
    render: function(){
      var view = convertToView(state.data);
      var rendered = Mustache.render(template, view, {subFolder: template} );

      if(tree){
        tree.jstree(true).destroy(true);
      }
      $(EXAMPLES_LIST_CONTAINER).children().first().html(rendered);
      tree = $(EXAMPLES_LIST_CONTAINER).jstree({
                'plugins' : [ 'search' ],
                'search': {
                  'show_only_matches': true,
                  'show_only_matches_children': true
                }
      })
      .on('ready.jstree', function() {
          $(EXAMPLES_LIST_CONTAINER).jstree('open_all');
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
    select: function(name){
      state.select(getExample(name));
    }
  };
  var init = function(){
    $.get(TEMPLATE_PATH, function(scriptContent){
      template = scriptContent;
      Mustache.parse(template);
    });
  };

  var convertToView = function(data){
    var view = {};
    view.name = 'examples';
    view.subFolders = [];
    view.examples = [];
    for(var example of data){
      var folder = view;
      if(example.path){
        for(var pathPart of example.path){
          if(!getSubFolder(folder, pathPart)){
            folder.subFolders.push({name: pathPart, examples: [], subFolders: []});
          }
          folder = getSubFolder(folder, pathPart);
        }
        folder.examples.push(example);
      }
    }

    function getSubFolder(folder, pathPart){
      for(var subFolder of folder.subFolders){
        if(subFolder.name == pathPart){
          return subFolder;
        }
      }
      return false;
    }

    return view;
  };

  function getExample(name){
    for(var example of state.data){
      if(example.name == name){
        return example;
      }
    }
  };

  state.on('refresh', function(){ menu.render();});
  init();
  return menu;
};
