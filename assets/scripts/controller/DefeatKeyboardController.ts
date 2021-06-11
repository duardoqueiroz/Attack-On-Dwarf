import KeyboardController from './KeyboardController';
import DefeatOptions from '../defeat_select/DefeatOptions';

const { ccclass, property } = cc._decorator;

@ccclass
export default abstract class DefeattKeyboardController extends KeyboardController {
  @property(DefeatOptions)
  private defaultOptions: DefeatOptions = null;

  protected onKeyDown(event: cc.Event.EventKeyboard): void {
    switch (event.keyCode) {
      case cc.macro.KEY.space:
        this.defaultOptions.selectUp();
        break;
      case cc.macro.KEY.space:
        this.defaultOptions.selectDown();
        break;
      case cc.macro.KEY.enter:
        this.defaultOptions.selectOption();
        break;
  }
}