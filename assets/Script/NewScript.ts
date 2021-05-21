
const {ccclass} = cc._decorator;

@ccclass
export default class Button extends cc.Component {

    public nextStep(): void {
        cc.director.loadScene("char_selection")
    }
    public backStep(): void {
        cc.director.loadScene("Menu")
    }
}
