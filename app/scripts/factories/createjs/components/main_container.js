export default function(id) {
    var stage = new createjs.Stage(id);

    var container = {};

    container.add = function(child){
      stage.addChild(child.view);
    };

    container.remove = function(child){
      stage.removeChild(child.view);
    };

    container.stage = stage;

    return container;
}
