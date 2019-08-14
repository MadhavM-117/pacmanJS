const PACMAN_STATES = [];

for (let i = 30; i > 5; i--) {
  PACMAN_STATES.push(i);
}

export enum GAME_STATE {
  PAUSED = 'PAUSED',
  RUNNING = 'RUNNING',
  MENU = 'MENU',
  GAMEOVER = 'GAMEOVER',
  NEWLEVEL = 'NEWLEVEL'
}

export { PACMAN_STATES };
