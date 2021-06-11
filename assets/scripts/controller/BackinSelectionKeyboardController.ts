import KeyboardController from './KeyboardController';

const { ccclass } = cc._decorator;

@ccclass
export default abstract class BackinSelectionKeyboardController extends KeyboardController {
protected onKeyDown(event: cc.Event.EventKeyboard): void {
    switch(event.keyCode) {
        case cc.macro.KEY.escape:
            cc.director.loadScene("character_selection");
            break;
        }
    }
}