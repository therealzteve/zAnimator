import factory from '~/factories/createjs/factory';
import abstractGroup from './abstract_group';
import checkParameter from '~/internal/check_parameter';

export default function(options){

    checkParameter(options, 'children', true);
    checkParameter(options, 'width', false, 10);
    checkParameter(options, 'height', false, 10);

    var rectangleGroup = abstractGroup(options.children);
    rectangleGroup.width = options.width;
    rectangleGroup.height = options.height;

    rectangleGroup.refresh = function(){
      this.view.removeAllChildren();
      for(var i = 0; i < this.children.length; i++){
        var container = factory.container();
        container.addChild(this.children[i].view);
        container.x = Math.floor(thid.width * Math.random());
        container.y = Math.floor(this.height * Math.random());
        this.view.addChild(container);
      }
    };

    rectangleGroup.refresh();
    return rectangleGroup;
}
