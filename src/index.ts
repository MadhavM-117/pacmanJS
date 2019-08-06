import {drawPacman} from "../lib/sprites";

let canvas = document.getElementById("gameScreen") as HTMLCanvasElement;
let context = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

drawPacman(context, 20, 20, "open");
drawPacman(context, 100, 20, "closed");