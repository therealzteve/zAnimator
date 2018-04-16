import {ComponentInterface} from './component.interface';

export interface ContainerInterface extends ComponentInterface{
  add(child: ComponentInterface);
  remove(child: ComponentInterface);
  removeAll();
}
