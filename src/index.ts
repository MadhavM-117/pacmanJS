import {drawPacman} from "./lib/sprites";
import {PACMAN_STATE} from './constants/states';

let canvas = document.getElementById("gameScreen") as HTMLCanvasElement;
let context: CanvasRenderingContext2D = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

drawPacman(context, 20, 20, PACMAN_STATE.OPEN);
drawPacman(context, 100, 20, PACMAN_STATE.CLOSED);