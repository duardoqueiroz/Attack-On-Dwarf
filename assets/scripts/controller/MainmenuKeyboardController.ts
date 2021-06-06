import KeyboardController from './KeyboardController';

const { ccclass } = cc._decorator;

@ccclass
export default class MainmenuKeyboardController extends KeyboardController {
  protected onKeyUp(_event: cc.Event.EventKeyboard): void {
    throw new Error('Method not implemented.');
  }

  protected onKeyDown(event: cc.Event.EventKeyboard): void {
    switch (event.keyCode) {
      case cc.macro.KEY.enter:
        cc.director.loadScene('load_map');
        break;
    }
  }
}
