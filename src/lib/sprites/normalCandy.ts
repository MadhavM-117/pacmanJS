import Game from '../game';
import BaseSprite from './baseSprite';
import { ObjectBounds, Vector2D } from '../../types';

export default class NormalCandy extends BaseSprite {
  public eaten: boolean;
  public constructor(game: Game, position: Vector2D) {
    super(game);
    this.position = position;
    this.size = { x: 3, y: 3 };
    this.eaten = false;
  }

  public reset(): void {
    // do nothing
  }

  public draw(context: CanvasRenderingContext2D): void {
    // @todo:
    // - draw candy, if it exists at the specified location
    if (!this.eaten) {
      // draw candy only if not eaten
      context.fillStyle = 'red';
      context.beginPath();
      context.ellipse(
        this.position.x,
        this.position.y,
        this.size.x,
        this.size.y,
        0,
        2 * Math.PI,
        0
      );
      context.fill();
    }
  }

  // eslint-disable-next-line
  public update(deltaTime: number): void {
    // @todo:
    // - clean up candy if there is a collision with pacman
    // - add points to the game object, when pacman eats the candy
  }

  // eslint-disable-next-line
  public detectCollision(otherBounds: ObjectBounds): boolean {
    return null;
  }

  public detectWallCollision(): boolean {
    // always false, as the candy does not move
    return false;
  }
}
