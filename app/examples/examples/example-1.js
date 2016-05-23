/*global exampleRunner: true*/

'use strict';

window.addEventListener('load', function(){
  exampleRunner.addExample({
    name: 'My first example',
    code: function(){
      console.log('hey!');
    }
  });
});
