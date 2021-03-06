import abstractFilter from '~/filters/abstract_filter';
import modificatorFilter from '~/filters/modificator_filter';
import singleChildFilter from '~/filters/single_child_filter';
import lineMover from '~/modificators/position/line_mover';

export default function(options){

    /* Private vars */
    var linearP2PMover = singleChildFilter(modificatorFilter(abstractFilter(options)), options);

    options.subject = linearP2PMover.view;
    linearP2PMover.modificator = lineMover(options);

    return linearP2PMover;
}
