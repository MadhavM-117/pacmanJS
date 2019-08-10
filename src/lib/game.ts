import { GAME_STATE } from '../constants/states';
import Pacman from '../lib/sprites/pacman';

export default class Game {
  public gameWidth: number;
  public gameHeight: number;
  public gameState: GAME_STATE;
  public currentLevel: number;
  public pacman: Pacman;

  public constructor(gameWidth: number, gameHeight: number) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.gameState = GAME_STATE.RUNNING;
    this.pacman = new Pacman(this);
    this.currentLevel = 0;
  }

  public start(): void {
    // setting things up when game is starting
    this.pacman.reset();
  }

  public update(deltaTime: number): void {
    this.pacman.update(deltaTime);
  }

  public draw(context: CanvasRenderingContext2D): void {
    // central loop where all game objects are drawn
    this.pacman.draw(context);
  }

  public togglePause(): void {
    // allow for game to be paused
  }
}
