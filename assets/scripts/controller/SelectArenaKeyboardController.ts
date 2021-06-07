import KeyboardController from "./KeyboardController";
import ArenaOptions from "../arena_select/ArenaOptions";
const {ccclass, property} = cc._decorator;

@ccclass
export default class SelectArenaKeyboardController extends KeyboardController {
    @property(ArenaOptions)
    public arenaOptions:ArenaOptions = null;

    protected onKeyDown(event: cc.Event.EventKeyboard) {
      switch (event.keyCode) {
        case cc.macro.KEY.w:
          this.arenaOptions.selectUp();
          break;
        case cc.macro.KEY.s:
          this.arenaOptions.selectDown();
          break;
        case cc.macro.KEY.enter:
          this.arenaOptions.selectOption();
          break;
      }
    }
    protected onKeyUp(event: cc.Event.EventKeyboard) {}
}
