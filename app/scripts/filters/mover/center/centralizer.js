import checkParameter from '~/internal/check_parameter';
import abstractFilter from '~/filters/abstract_filter';
import singleChildFilter from '~/filters/single_child_filter';


export default function(options){

    /* Parameters */
    checkParameter(options, 'child', true);
    checkParameter(options, 'width', true);
    checkParameter(options, 'height', true);

    /* Private vars */

    var centerFilter = singleChildFilter(abstractFilter(), options);

    /* Callbacks */
    centerFilter.onPropertyChange = () =>{
      if(centerFilter.getChild().getWidth){
        centerFilter.view.x = (options.width / 2) - (centerFilter.getChild().getWidth() / 2);
      }
      if(centerFilter.getChild().getHeight){
        centerFilter.view.y = (options.height / 2) - (centerFilter.getChild().getHeight() / 2);
      }
    };

    centerFilter.onPropertyChange();
    /* return */
    return centerFilter;
}
