const { ccclass, property } = cc._decorator;

@ccclass
export default class InstantiateCharacter extends cc.Component {
  @property(cc.Prefab)
  public character: Array<cc.Prefab> = [];

  public instantiateCharacter(value: number): void {
    const char = cc.instantiate(this.character[value]);
    char.x = 174;
    char.y = 253;
    this.node.addChild(char);
  }
}
