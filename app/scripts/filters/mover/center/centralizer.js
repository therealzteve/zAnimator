import checkParameter from '~/internal/check_parameter';
import abstractFilter from '~/filters/abstract_filter';
import singleChildFilter from '~/filters/single_child_filter';

export default function(options){

    /* Parameters */
    checkParameter(options, 'width', true);
    checkParameter(options, 'height', true);

    /* Private vars */

    var centerFilter = singleChildFilter(abstractFilter(), options);

    /* public vars */
    centerFilter.width = options.width;
    centerFilter.height = options.height;

    /* Callbacks */
    centerFilter.onPropertyChange = () =>{
      if(this.getChild().getWidth){
        this.view.x = (this.width / 2) - (this.getChild().getWidth() / 2);
      }
      if(this.getChild().getHeight){
        this.view.y = (this.height / 2) - (this.getChild().getHeight() / 2);
      }
    };

    centerFilter.onPropertyChange();
    /* return */
    return centerFilter;
}
