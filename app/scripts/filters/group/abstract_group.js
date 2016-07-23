import abstractFilter from '~/filters/abstract_filter';

export default function(children){
    var abstractGroup = abstractFilter();

    abstractGroup.children = children ? children : [];

    return abstractGroup;
}
