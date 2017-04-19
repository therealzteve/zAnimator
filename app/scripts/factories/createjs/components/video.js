import checkParameter from '~/internal/check_parameter';
import abstractShape from './abstract_shape';

export default function(options){

      /* Parameters */
      checkParameter(options, 'source', true);
      // If the source is a string, convert it to a video
      handleVideoSource();

      /* private vars */
      var video = abstractShape();

      /* public properties */
      video.view = new createjs.Bitmap(options.source);
      video.source = options.source;
      /* public methods */
      video.draw = function(){
        this.view.scaleX = video.scale;
        this.view.scaleY = video.scale;
      };

      video.play = function(){
        this.source.play();
      };

      video.stop = function(){
        this.source.pause();
        this.source.currentTime = 0;
      };

      video.pause = function(){
        this.source.pause();
      };

      /* private functions */
      function handleVideoSource(){
        if (typeof options.source === 'string') {
          var source = document.createElement('source');
          source.setAttribute('src', options.source);
          var videoElement = document.createElement('video');
          videoElement.appendChild(source);
          options.source = videoElement;
        }
      }

      /* init */
      video.draw();
      return video;
}
