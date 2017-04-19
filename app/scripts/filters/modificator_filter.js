
export default function(filter){

    /* Public functions */
    function start(){
      this.modificator.start();
    }

    function stop(){
      this.modificator.stop();
    }

    filter.start = start;
    filter.stop = stop;

    return filter;
}
