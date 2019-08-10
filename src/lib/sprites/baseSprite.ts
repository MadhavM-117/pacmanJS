import Game from '../game';
import { ObjectBounds } from '../../types';

export default abstract class BaseSprite {
  position: { x: number; y: number };
  speed: { x: number; y: number };
  game: Game;
  gameWidth: number;
  gameHeight: number;
  // assuming all sprites are represented by rectangular bounding boxes
  size: { x: number; y: number };
  bounds: ObjectBounds;

  constructor(game: Game) {
    this.game = game;
    this.gameHeight = game.gameHeight;
    this.gameWidth = game.gameWidth;
    this.position = { x: 0, y: 0 };
    this.speed = { x: 0, y: 0 };
    this.size = { x: 0, y: 0 };
  }

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
