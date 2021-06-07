import KeyboardController from "./KeyboardController";

const { ccclass } = cc._decorator;

@ccclass
export default class MainMenuKeyboardController extends KeyboardController {
    protected onKeyDown(event: cc.Event.EventKeyboard): void {
        switch (event.keyCode) {
            case cc.macro.KEY.enter:
                cc.director.loadScene("load_map");
                break;
        }
    }

}