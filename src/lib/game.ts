import { GAME_STATE } from '../constants/states';
import Pacman from '../lib/sprites/pacman';
import LevelLoader from './levelLoader';
import { LevelInfo } from '../types';

export default class Game {
  public gameWidth: number;
  public gameHeight: number;
  public gameState: GAME_STATE;
  public currentLevel: number;
  public pacman: Pacman;
  public level: LevelInfo;
  public context: CanvasRenderingContext2D;

  public constructor(
    gameWidth: number,
    gameHeight: number,
    context: CanvasRenderingContext2D
  ) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.gameState = GAME_STATE.RUNNING;
    this.pacman = new Pacman(this);
    this.currentLevel = 0;
    this.context = context;
  }

  public start(): void {
    // setting things up when game is starting
    this.pacman.reset();
    this.level = LevelLoader.loadLevel(1, this.context);
  }

  public update(deltaTime: number): void {
    this.pacman.update(deltaTime);
  }

  public draw(): void {
    // central loop where all game objects are drawn
    this.pacman.draw(this.context);
  }

  public togglePause(): void {
    // allow for game to be paused
  }
}
