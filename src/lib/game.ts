import { GAME_STATE } from '../constants/states';
import Pacman from '../lib/sprites/pacman';

export default class Game {
  gameWidth: number;
  gameHeight: number;
  gameState: GAME_STATE;
  currentLevel: number;
  pacman: Pacman;



  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.gameState = GAME_STATE.RUNNING;
    this.pacman = new Pacman(this);
    this.currentLevel = 0;
  }

  start() {
    // setting things up when game is starting
    this.pacman.reset();
  }

  update(deltaTime: number) {
    this.pacman.update(deltaTime);
  }

  draw(context: CanvasRenderingContext2D) {
    // central loop where all game objects are drawn
    this.pacman.draw(context);
  }

  togglePause() {
    // allow for game to be paused
  }
}
