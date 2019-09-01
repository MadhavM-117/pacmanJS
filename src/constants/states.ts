export enum PACMAN_STATE {
  OPEN = 'open',
  CLOSED = 'closed'
}

export enum GAME_STATE {
  PAUSED = 'PAUSED',
  RUNNING = 'RUNNING',
  MENU = 'MENU',
  GAMEOVER = 'GAMEOVER',
  NEWLEVEL = 'NEWLEVEL'
}

export enum DIRECTION {
  LEFT = 180,
  RIGHT = 0,
  UP = 270,
  DOWN = 90
}

export enum KEY_CODE {
  LEFT_ARROW = 37,
  UP_ARROW = 38,
  RIGHT_ARROW = 39,
  DOWN_ARROW = 40,
  P_LETTER = 80,
  A_LETTER = 65,
  W_LETTER = 87,
  S_LETTER = 83,
  D_LETTER = 68,
  ESC_BUTTON = 27
}
