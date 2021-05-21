const { ccclass } = cc._decorator;

@ccclass
export default class Button extends cc.Component {

    public nextStep(): void {
        cc.director.loadScene("local_selection");
    }
    public backStep(): void {
        cc.director.loadScene("Menu");
    }
}
