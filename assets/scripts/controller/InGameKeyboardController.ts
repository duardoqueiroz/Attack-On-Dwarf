import DIRECTION, { DIRECTIONS } from '../actor/DIRECTION';
import KeyboardController from './KeyboardController';
import Actor from '../actor/Actor';

const { ccclass, property } = cc._decorator;

@ccclass
export default class InGameKeyboardController extends KeyboardController {
  private pressedKeys: Array<boolean> = [];

  @property(Actor)
  public actor: Actor = null;

  public onKeyDown(event: cc.Event.EventKeyboard): void {
    switch (event.keyCode) {
      case cc.macro.KEY.space:
        this.actor.jump();
        break;
      case cc.macro.KEY.a || cc.macro.KEY.left:
        this.pressedKeys.LEFT = true;
        break;
      case cc.macro.KEY.d || cc.macro.KEY.right:
        this.pressedKeys.RIGHT = true;
        break;
      default:
    }
  }

  public onKeyUp(event: cc.Event.EventKeyboard): void {
    switch (event.keyCode) {
      case cc.macro.KEY.space:
        this.actor.jump();
        break;
      case cc.macro.KEY.a || cc.macro.KEY.left:
        delete this.pressedKeys.LEFT;
        break;
      case cc.macro.KEY.d || cc.macro.KEY.right:
        delete this.pressedKeys.RIGHT;
        break;
      default:
    }
  }

  public update(dt): void {
    if ('LEFT' in this.pressedKeys) {
      this.actor.move(DIRECTIONS.left);
      console.log('oi');
    }
    if ('RIGHT' in this.pressedKeys) {
      this.actor.move(DIRECTIONS.right);
      console.log('io');
    }
  }
}
