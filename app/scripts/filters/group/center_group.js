import abstractGroup from './abstract_group';
import factory from '~/factories/createjs/factory';

export default function(children, options){
    var centerGroup = abstractGroup(children);

    /* Params and defaults */
    centerGroup.width = options.width ? options.width : false;
    centerGroup.height = options.height ? options.height : false;

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
