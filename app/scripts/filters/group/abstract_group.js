import abstractFilter from '~/filters/abstract_filter';

export default function(children){
    var abstractGroup = abstractFilter();

    abstractGroup.children = children ? children : [];

    abstractGroup.add = function(child){
      abstractGroup.children.push(child);
      abstractGroup.refresh();
    };

    abstractGroup.remove = function(child){
      abstractGroup.children.splice(abstractGroup.children.indexOf(child), 1);
      abstractGroup.refresh();
    };

    return abstractGroup;
}
