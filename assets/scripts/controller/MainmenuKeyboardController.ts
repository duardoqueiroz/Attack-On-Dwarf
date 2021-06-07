import KeyboardController from './KeyboardController';

const { ccclass } = cc._decorator;

@ccclass
export default class MainMenuKeyboardController extends KeyboardController {
  public onKeyDown(event: cc.Event.EventKeyboard): void {
    switch (event.keyCode) {
      case cc.macro.KEY.enter:
        cc.director.loadScene('load_map');
        break;
      default:
    }
  }

  public onKeyUp(_event: cc.Event.EventKeyboard): void {
    console.log('oi');
  }
}
