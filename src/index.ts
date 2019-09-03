import config from './constants/config';
import Game from './lib/game';

let canvas = document.getElementById('gameScreen') as HTMLCanvasElement;
let context: CanvasRenderingContext2D = canvas.getContext('2d');

const GAME_WIDTH = config.game.width;
const GAME_HEIGHT = config.game.height;

const game = new Game(GAME_WIDTH, GAME_HEIGHT, context);
game.start();

let lastTime = 0;
function gameLoop(timestamp: number): void {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  game.update(deltaTime);
  game.draw();

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
