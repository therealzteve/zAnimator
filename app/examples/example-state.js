function createState(){
  var state = {
    _callbacks: {},
    data: [],
    selectedExample: null,
    select: function(example){
      state.selectedExample = example;
      state.trigger('select');
    },
    on: function(eventName, cb) {
      if (!state._callbacks[eventName]) {
        state._callbacks[eventName] = [];
      }
      state._callbacks[eventName].push(cb);
    },
    trigger: function(eventName) {
      if(state._callbacks[eventName]){
        for (var cb of state._callbacks[eventName]) {
          cb();
        }
      }
    },
    get(name){
      for(var example of data){
        if(example.name == name){
          return example;
        }
      }
    }
  };

  return state;
}
