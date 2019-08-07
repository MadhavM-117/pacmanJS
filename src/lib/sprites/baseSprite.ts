import Game from '../game';
import {ObjectBounds} from '../../types';

export default abstract class BaseSprite {
    position: {x: number, y:number}
    speed: {x: number, y:number}
    game: Game
    // assuming all sprites are represented by rectangular bounding boxes
    size: {x: number, y:number}
    bounds: ObjectBounds

    // reset sprite to initial position/speed
    abstract reset(): void;

    // draw the sprite
    abstract draw(context: CanvasRenderingContext2D): void;

    // update the sprite position, per frame
    abstract update(deltaTime: number): void;

    // detect Collision of this sprite, with any other sprite
    abstract detectCollision(otherBounds: ObjectBounds): boolean;

    // detect Collision of this sprite, with the level/world
    abstract detectWallCollision(): boolean;
}