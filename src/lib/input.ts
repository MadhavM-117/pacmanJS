import Game from './game';
import Pacman from './sprites/pacman';
import { KEY_CODE, DIRECTION } from '../constants/states';

export default class InputHandler {
  public constructor(game: Game, pacman: Pacman) {
    document.addEventListener('keydown', (event: KeyboardEvent): void => {
      switch (event.keyCode as KEY_CODE) {
        case KEY_CODE.A_LETTER:
        case KEY_CODE.LEFT_ARROW: {
          pacman.updateDirection(DIRECTION.LEFT);
          break;
        }
        case KEY_CODE.D_LETTER:
        case KEY_CODE.RIGHT_ARROW: {
          pacman.updateDirection(DIRECTION.RIGHT);
          break;
        }
        case KEY_CODE.W_LETTER:
        case KEY_CODE.UP_ARROW: {
          pacman.updateDirection(DIRECTION.UP);
          break;
        }
        case KEY_CODE.S_LETTER:
        case KEY_CODE.DOWN_ARROW: {
          pacman.updateDirection(DIRECTION.DOWN);
          break;
        }
      }
    });
  }
}
