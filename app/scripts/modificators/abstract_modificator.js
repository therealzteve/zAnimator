import checkParameter from '~/internal/check_parameter';

export default function(options){
    var modificator = {};

    checkParameter(options, 'subject', true);
    modificator.subject = options.subject;

    return modificator;
}
