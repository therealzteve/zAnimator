function runner(state){
  var TEMPLATE_PATH = 'examples/ui/runner/editor.mustache.html';
  var RUNNER_CONTAINER = '#example-runner-editor';
  var template;

  var runner = {
    render: function(){
      var rendered = Mustache.render(template, state.selectedExample );
      $(RUNNER_CONTAINER).html(rendered);
    },
    run: function(){
      exampleRunner.run(state.selectedExample.name);
    }
  };

  var init = function(){
    $.get(TEMPLATE_PATH, function(scriptContent){
      template = scriptContent;
      Mustache.parse(template);
    });
  };

  state.on('select', function(){ runner.render();});
  init();
  return runner;
};
