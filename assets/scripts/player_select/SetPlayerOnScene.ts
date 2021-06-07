const {ccclass, property} = cc._decorator;

@ccclass
export default class SetPlayerOnScene extends cc.Component {

    @property(cc.Prefab)
    CharPrefab: cc.Prefab = null;
    
    const goku = cc.instantiate(this.CharPrefab);
    const monica = cc.instantiate(this.CharPrefab);
    const naruto = cc.instantiate(this.CharPrefab);
    const ryu = cc.instantiate(this.CharPrefab);

    this.nodeChild(goku);
    this.nodeChild(monica);
    this.nodeChild(naruto);
    this.nodeChild(ryu);


    goku.position = new cc.Vec2(143,172);
  //  monica.position = new cc.Vec2();
    //naruto.position = new cc.Vec2();
    //ryu.position = new cc.Vec2();
}
