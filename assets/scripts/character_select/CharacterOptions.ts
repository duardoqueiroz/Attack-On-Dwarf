import iSpriteWithName from '../arena_select/iSpriteWithName';

const { ccclass } = cc._decorator;
@ccclass
export default class CharacterOptions extends cc.Component {
  private spriteList: Array<iSpriteWithName> = [];

  private _selectedIndex = 0;

  private get selectedIndex() {
    return this._selectedIndex;
  }

  private set selectedIndex(newIndex: number) {
    this.spriteList[this.selectedIndex].sprite.node.opacity = 100;
    this.spriteList[newIndex].sprite.node.opacity = 500;
    this._selectedIndex = newIndex;
  }

  public onLoad(): any {
    this.spriteList = this.node.children.map(c => ({
      sprite: c.getComponent(cc.Sprite),
    }));
    this.selectedIndex = 0;
  }

  public selectUp(): void {
    if (this.selectedIndex > 0) {
      this.selectedIndex -= 1;
    } else {
      this.selectedIndex = this.spriteList.length - 1;
    }
  }

  public selectDown(): void {
    if (this.selectedIndex < this.spriteList.length - 1) {
      this.selectedIndex += 1;
    } else {
      this.selectedIndex = 0;
    }
  }

  public selectOption(): void {
    console.log('');
  }
}
