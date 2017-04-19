import checkParameter from '~/internal/check_parameter';

export default function(filter, options){

    /* Parameters */
    checkParameter(options, 'child', true);

    /* private vars */
    filter._child = options.child;

    /* callbacks */
    filter.__onPropertyChange = () =>{
      if(this.onPropertyChange){
        this.onPropertyChange();
      }
      this.sendEvent('property_change');
    };

    /* methods */
    filter.setChild = function(newChild){
      if(this._child.removeEventListener){
        this._child.removeEventListener('property_change', this.__onPropertyChange);
      }
      this._child = newChild;
      if(this._child.addEventListener){
        this._child.addEventListener('property_change', this.__onPropertyChange);
      }
      this.view.addChild(this._child.view);
    };

    filter.getChild = function(){
      return this._child;
    };

    /* init */
    filter.setChild(options.child);
    return filter;
}
