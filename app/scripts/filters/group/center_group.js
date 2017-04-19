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
      this.view.removeAllChildren();
      for(var i = 0; i < this.children.length; i++){
        var container = factory.container();
        container.addChild(this.children[i].view);

        if(this.width){
          container.x = container.x = (i + 1) * this.width / (this.children.length + 1);
        }

        if(this.height){
          container.y = container.x = (i + 1) * this.height / (this.children.length + 1);
        }

        this.view.addChild(container);
      }
    };

    centerGroup.refresh();
    return centerGroup;
}
