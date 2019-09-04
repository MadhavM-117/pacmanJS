import Game from '../game';
import config from '../../constants/config';
import { PACMAN_STATES, DIRECTION } from '../../constants/states';
import { ObjectBounds } from '../../types';
import {
  getObjectBounds,
  normalizeAngle,
  calculateSpeed,
  getObjectCorners,
  checkWallExists
} from '../../utils';
import BaseSprite from './baseSprite';

const PACMAN_RADIUS = config.pacMan.radius;

function drawPacman(context, position, openAngle, closeAngle): void {
  const { x, y } = position;
  context.beginPath();
  context.moveTo(x, y);
  context.arc(x, y, PACMAN_RADIUS, openAngle, closeAngle);
  context.lineTo(x, y);
  context.fillStyle = 'yellow';
  context.fill();
  context.closePath();
}

export default class Pacman extends BaseSprite {
  public state: number;
  public previousState: number;
  public rotation: number;

  public constructor(game: Game) {
    super(game);
    this.size = { x: PACMAN_RADIUS * 2, y: PACMAN_RADIUS * 2 };
    this.bounds = getObjectBounds(this.position, this.size);
    this.state = PACMAN_STATES[0];
    this.previousState = 0;
    this.rotation = 90;
  }

  public reset(): void {
    this.position = {
      x: this.gameWidth / 2.0,
      y: this.gameHeight / 2.0
    };
    this.speed = calculateSpeed(this.rotation);
  }

  public updateDirection(direction: DIRECTION): void {
    this.rotation = direction.valueOf();
    this.speed = calculateSpeed(this.rotation);
  }

  public draw(context: CanvasRenderingContext2D): void {
    let openAngle = this.rotation + this.state;
    let closeAngle = this.rotation + (360 - this.state);
    openAngle = normalizeAngle(openAngle);
    closeAngle = normalizeAngle(closeAngle);
    drawPacman(context, this.position, openAngle, closeAngle);
  }

  // eslint-disable-next-line
  public update(deltaTime: number): void {
    const { x, y } = this.position;
    this.position = {
      x: x + this.speed.x,
      y: y + this.speed.y
    };
    this.calculateState();
    if (this.detectWallCollision()) {
      // undo motion
      this.position = { x, y };
      // stop motion
      this.speed = {
        x: 0,
        y: 0
      };
    }
  }

  public calculateState(): void {
    let state = this.state;
    let previousState = this.previousState;
    const length = PACMAN_STATES.length;
    const stepSize = PACMAN_STATES[0] - PACMAN_STATES[1];
    this.previousState = state;
    if (state === PACMAN_STATES[0]) {
      this.state = PACMAN_STATES[1];
    } else if (state === PACMAN_STATES[length - 1]) {
      this.state = PACMAN_STATES[length - 2];
    } else {
      if (state < previousState) {
        this.state = state - stepSize;
      } else {
        this.state = state + stepSize;
      }
    }
  }

  // eslint-disable-next-line
  public detectCollision(otherBounds: ObjectBounds): boolean {
    return false;
  }

  public detectWallCollision(): boolean {
    const { level } = this.game;

    const corners = getObjectCorners(getObjectBounds(this.position, this.size));

    const collisions = corners.map((coords): boolean => {
      return checkWallExists(coords, level);
    });

    if (collisions.indexOf(true) > -1) {
      return true;
    }

    return false;
  }
}
