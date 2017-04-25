import checkParameter from '~/internal/check_parameter';

export default function(filter, options){

    /* Parameters */
    checkParameter(options, 'child', true);

    /* private vars */
    filter._child = options.child;
    filter._listener = null;

    /* callbacks */
    filter.__onPropertyChange = function(){
      if(this.onPropertyChange){
        this.onPropertyChange();
      }
      this.sendEvent('property_change');
    };

    /* methods */
    filter.setChild = function(newChild){
      if(this._child.removeEventListener){
        this._child.removeEventListener('property_change', this._listener);
      }
      this.view.removeChild(this._child.view);
      this._child = newChild;
      if(this._child.addEventListener){
        this._listener = this._child.addEventListener('property_change', this.__onPropertyChange, this);
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
