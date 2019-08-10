import Game from '../game';
import config from '../../constants/config';
import { PACMAN_STATE } from '../../constants/states';
import { ObjectBounds } from '../../types';
import { getObjectBounds, toRadians, normalizeAngle, calculateSpeed } from '../../utils';
import BaseSprite from './baseSprite';

const PACMAN_RADIUS = config.pacMan.radius;

export default class Pacman extends BaseSprite {
	state: PACMAN_STATE;
	rotation: number;

	constructor(game: Game) {
		super(game);
		this.size = { x: PACMAN_RADIUS, y: PACMAN_RADIUS };
		this.bounds = getObjectBounds(this.position, this.size);
		this.state = PACMAN_STATE.OPEN;
		this.rotation = 0;
	}

	reset() {
		this.position = {
			x: this.gameWidth / 2.0,
			y: this.gameHeight / 2.0
		}
		this.speed = calculateSpeed(this.rotation);
	}

	draw(context: CanvasRenderingContext2D): void {
		const { x, y } = this.position;
		let openAngle = this.rotation + (this.state === PACMAN_STATE.OPEN ? 30 : 5);
		let closeAngle = this.rotation + (this.state === PACMAN_STATE.OPEN ? 330 : 355);
		openAngle = normalizeAngle(openAngle);
		closeAngle = normalizeAngle(closeAngle);
		context.beginPath();
		context.moveTo(x, y);
		context.arc(x, y, PACMAN_RADIUS, openAngle, closeAngle);
		context.lineTo(x, y);
		context.fillStyle = "yellow";
		context.fill();
		context.closePath();
	}

	update(deltaTime: number): void {
		const { x, y } = this.position;
		this.position = {
			x: x + this.speed.x,
			y: y + this.speed.y
		}
	}

	detectCollision(otherBounds: ObjectBounds): boolean {
		return false;
	}

	detectWallCollision(): boolean {
		return false;
	}
}