const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Prefab);
    cc.prefabs.release("monica", cc.Prefab);
    
  //  cc.resources.release("test assets/image", cc.SpriteFrame);]
    //como seria no nosso caso?

    
}
