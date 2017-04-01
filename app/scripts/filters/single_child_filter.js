import checkParameter from '~/internal/check_parameter';

export default function(filter, options){

    /* Parameters */
    checkParameter(options, 'child', true);

    /* private vars */
    var child = options.child;

    /* callbacks */
    var onPropertyChange = () =>{
      filter.onPropertyChange();
      filter.sendEvent('property_change');
    };

    /* methods */
    filter.setChild = function(newChild){
      if(child.removeEventListener){
        child.removeEventListener('property_change', onPropertyChange);
      }
      child = newChild;
      if(child.addEventListener){
        child.addEventListener('property_change', onPropertyChange);
      }
      filter.view.addChild(child.view);
    };

    filter.getChild = function(){
      return child;
    };

    /* init */
    filter.setChild(options.child);
    return filter;
}
