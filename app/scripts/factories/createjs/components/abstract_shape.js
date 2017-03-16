import abstractComponent from '~/abstract_component';

export default function(){

      /* Private vars */
      var component = abstractComponent();

      /* public methods */
      component.view = new createjs.Shape();
      component.scale = 1;

      return component;
}
