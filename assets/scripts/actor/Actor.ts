import DIRECTION, { DIRECTIONS } from "./DIRECTION";
import { IWalking } from "./IWalking";
import PLAYER_STATE from './PLAYER_STATE';

const { ccclass, property } = cc._decorator;

@ccclass
export default class Actor extends cc.Component {

    private _state: PLAYER_STATE = PLAYER_STATE.idle;
    public facing: DIRECTION = DIRECTIONS.right;
    public moving:boolean = false;
    
    private _isJumping: boolean = false;

    public get isJumping(): boolean {
        return this._isJumping;
    }
    public set isJumping(value: boolean) {
        if (!value && this._state === PLAYER_STATE.jumping) {
            this.state = PLAYER_STATE.idle;
        }
        this._isJumping = value;
    }

    @property(cc.Float)
    public jumpForce: number = 600000;

    @property(cc.Float)
    public walkForce: number = 80000;

    @property(cc.Float)
    public maxSpeed: number = 400;

    public rigidBody: cc.RigidBody;

    public get isInTheFloor() {
        return this.rigidBody.linearVelocity.y === 0 && !this.isJumping;
    }

    public onLoad () {
        this.rigidBody = this.getComponent(cc.RigidBody);
    }

    onBeginContact(contact: any, selfCollider: cc.Collider, otherCollider: cc.Collider) {
        if (selfCollider.tag == 2 && this.isJumping) {
            this.isJumping = false;
        }
    }

    public get state() {
        return this._state;
    }

    public set state(newState: PLAYER_STATE) {
        if (this._state != newState) {
            this.getComponent(cc.Animation).play(newState);
            this._state = newState;
        }
    }

    public jump():void {
       if (this.isInTheFloor) {
            console.log('oi');
            this.state = PLAYER_STATE.jumping;
            this.isJumping = true;
            this.rigidBody.applyForceToCenter(cc.v2(0, this.jumpForce), true);
            console.log("ta pulando poha?");
        }
    }

  move(direction: DIRECTION){
    this.moving = true;
    this.movePlayer(direction);
    if (direction != this.facing) {
        this.turnAround(direction);
    } else {
        if (!this.isJumping) {
            this.state = PLAYER_STATE.running;
        }
    }
    }

    private movePlayer(direction: DIRECTION):void {
        if (Math.abs(this.rigidBody.linearVelocity.x) < this.maxSpeed && Math.abs(this.rigidBody.linearVelocity.y) < this.maxSpeed) {
            this.rigidBody.applyForceToCenter(cc.v2(direction.x * this.walkForce, direction.y * this.walkForce), true);
        }
    }

    private turnAround(direction: DIRECTION):void {
        this.node.scaleX = this.node.scaleX * -1;
        this.facing = direction;
    }


}
