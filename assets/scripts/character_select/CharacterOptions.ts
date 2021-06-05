import iSpriteWithName from "../arena_select/iSpriteWithName"
import SelectOptions from "../SelectOptions";
const {ccclass} = cc._decorator;

@ccclass
export default class CharacterOptions extends SelectOptions {

    private get selectedIndex() {
        return this._selectedIndex;
    }

    private set selectedIndex(newIndex: number) {
        this.spriteList[this.selectedIndex].sprite.node.opacity = 100;
        this.spriteList[newIndex].sprite.node.opacity = 500;
        this._selectedIndex = newIndex;
    }

    public selectOption() {
       
    }
    

}
