export default function(id) {
    var stage = new createjs.Stage(id);

    var container = {};

    container.add = function(child){
      stage.addChild(child.view);
    };

    container.remove = function(child){
      stage.removeChild(child.view);
    };

    container.removeAll = function(){
      stage.removeAllChildren();
    };

    container.stage = stage;

    return container;
}
