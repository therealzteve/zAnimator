import abstractFilter from '~/filters/abstract_filter';

export default function(children){
    var abstractGroup = abstractFilter();

    abstractGroup.children = children ? children : [];

    abstractGroup.add = function(child){
      this.children.push(child);
      this.refresh();
    };

    abstractGroup.remove = function(child){
      this.children.splice(this.children.indexOf(child), 1);
      this.refresh();
    };

    return abstractGroup;
}
