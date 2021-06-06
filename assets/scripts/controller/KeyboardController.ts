const { ccclass } = cc._decorator;

@ccclass
export default abstract class KeyboardController extends cc.Component {
    public onLoad() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }

    protected abstract onKeyDown(event: cc.Event.EventKeyboard);

    protected abstract onKeyUp(event: cc.Event.EventKeyboard);

}
