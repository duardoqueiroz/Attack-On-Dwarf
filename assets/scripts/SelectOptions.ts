const {ccclass } = cc._decorator;

@ccclass
export default abstract class SelectOptions extends cc.Component {

    private spriteList: iSpriteWithName[] = [];

    private _selectedIndex: number = 0;
    
    public onLoad () {
        this.spriteList = this.node.children.map((c) => {
            return{
                sprite: c.getComponent(cc.Sprite),
            }; 
        });
        this.selectedIndex = 0;
    }

    public selectUp() {
        if (this.selectedIndex > 0) {
            this.selectedIndex--;
        }else {
            this.selectedIndex =  this.spriteList.length - 1;
        }
    }

    public selectDown() {
        if (this.selectedIndex < this.spriteList.length - 1){
           this.selectedIndex++; 
        } else{
           this.selectedIndex = 0; 
        } 
    }

    abstract public selectOption();
}
