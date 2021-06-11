import KeyboardController from './KeyboardController';
import ArenaOptions from '../arena_select/ArenaOptions';

const { ccclass, property } = cc._decorator;

@ccclass
export default abstract class SelectArenaKeyboardController extends KeyboardController {
  @property(ArenaOptions)
  private arenaOptions: ArenaOptions = null;

  protected onKeyDown(event: cc.Event.EventKeyboard): void {
    switch (event.keyCode) {
      case cc.macro.KEY.space:
        this.arenaOptions.selectUp();
        break;
      case cc.macro.KEY.space:
        this.arenaOptions.selectDown();
        break;
      case cc.macro.KEY.enter:
        this.arenaOptions.selectOption();
        break;
  }
}