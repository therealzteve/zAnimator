import abstractGroup from './abstract_group';
import factory from '~/factories/createjs/factory';
import checkParameter from '~/internal/check_parameter';

export default function(options){

    checkParameter(options, 'children', true);
    checkParameter(options, 'width', false, false);
    checkParameter(options, 'height', false, false);

    var centerGroup = abstractGroup(options.children);
    centerGroup.width = options.width;
    centerGroup.height = options.height;

    centerGroup.refresh = function(){
      centerGroup.view.removeAllChildren();
      for(var i = 0; i < centerGroup.children.length; i++){
        var container = factory.container();
        container.addChild(centerGroup.children[i].view);

        if(centerGroup.width){
          container.x = container.x = (i + 1) * centerGroup.width / (centerGroup.children.length + 1);
        }

        if(centerGroup.height){
          container.y = container.x = (i + 1) * centerGroup.height / (centerGroup.children.length + 1);
        }

        centerGroup.view.addChild(container);
      }
    };

    centerGroup.refresh();
    return centerGroup;
}
