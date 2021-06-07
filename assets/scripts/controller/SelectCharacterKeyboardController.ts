import KeyboardController from "./KeyboardController";
import CharacterOptions from "../character_select/CharacterOptions";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SelectCharacterKeyboardController extends KeyboardController {

    @property(CharacterOptions)
    private character: CharacterOptions = null;

    protected onKeyDown(event: cc.Event.EventKeyboard): void {
        switch (event.keyCode) {
            case cc.macro.KEY.w:
                this.character.selectUp();
                break;
            case cc.macro.KEY.s:
                this.character.selectDown();
                break;
            case cc.macro.KEY.enter:
                this.character.selectOption();
                break;
        }
    }


}
