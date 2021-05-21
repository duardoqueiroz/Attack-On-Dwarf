
const {ccclass, property} = cc._decorator;

@ccclass
export default class Button extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    public nextStep(): void {
        cc.director.loadScene("char_selection")
    }
}
