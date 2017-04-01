
export default function(filter){

    /* Public functions */
    function start(){
      filter.modificator.start();
    }

    function stop(){
      filter.modificator.stop();
    }

    filter.start = start;
    filter.stop = stop;

    return filter;
}
