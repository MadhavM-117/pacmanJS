let canvas = document.getElementById("gameScreen") as HTMLCanvasElement;
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

ctx.fillStyle = "#f00";
ctx.fillRect(20, 20, 10, 50);