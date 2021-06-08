const { ccclass, property } = cc._decorator;

@ccclass
export default class SetPlayerOnScene extends cc.Component {

  @property(cc.Prefab)
  goku: cc.Prefab = null;

  start() {
    const gocu = cc.instantiate(this.goku);
    gocu.x = 174;
    gocu.y = 252;
    this.node.addChild(gocu);
  }
}
