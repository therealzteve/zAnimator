import factory from '~/factories/createjs/factory';
import abstractComponent from '~/abstract_component';

export default function(){
    var filter = abstractComponent();

    filter.view = factory.container();

    return filter;
}
