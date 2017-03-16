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

      /* public methods */
      video.draw = function(){
        video.view.scaleX = video.scale;
        video.view.scaleY = video.scale;
      };

      video.play = function(){
        options.source.play();
      };

      video.stop = function(){
        options.source.pause();
        options.source.currentTime = 0;
      };

      video.pause = function(){
        options.source.pause();
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
