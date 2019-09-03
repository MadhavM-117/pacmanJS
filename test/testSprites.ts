/* eslint-disable */
// TODO: enable eslint for this file, once the tests are properly implemented
import { expect } from 'chai';
import Pacman from '../src/lib/sprites/pacman';
import Game from '../src/lib/game';
import { PACMAN_STATES } from '../src/constants/states';
import 'mocha';
import { describe, it } from 'mocha';
import config from '../src/constants/config';
const GAME_WIDTH = config.game.width;
const GAME_HEIGHT = config.game.height;

describe('pacMan', () => {
  const game = new Game(GAME_WIDTH, GAME_HEIGHT, null); //Unsure if this is the right way to unit test
  const pacman = new Pacman(game);
  describe('calculateState', () => {
    it('should change the state from 30 to 25', () => {
      pacman.state = PACMAN_STATES[0];
      pacman.previousState = 0;
      pacman.calculateState();
      expect(pacman.state).to.equal(PACMAN_STATES[1]);
      expect(pacman.previousState).to.equal(PACMAN_STATES[0]);
    });
    it('should change the state from 25 to 20', () => {
      pacman.state = PACMAN_STATES[1];
      pacman.previousState = PACMAN_STATES[0];
      pacman.calculateState();
      expect(pacman.state).to.equal(PACMAN_STATES[2]);
      expect(pacman.previousState).to.equal(PACMAN_STATES[1]);
    });
    it('should change the state from 5 to 10', () => {
      let length = PACMAN_STATES.length;
      pacman.state = PACMAN_STATES[length - 1];
      pacman.previousState = PACMAN_STATES[length - 2];
      pacman.calculateState();
      expect(pacman.state).to.equal(PACMAN_STATES[length - 2]);
      expect(pacman.previousState).to.equal(PACMAN_STATES[length - 1]);
    });
    it('should change the state from 25 to 30 and back to 25', () => {
      pacman.state = PACMAN_STATES[1];
      pacman.previousState = PACMAN_STATES[2];
      pacman.calculateState();
      expect(pacman.state).to.equal(PACMAN_STATES[0]);
      expect(pacman.previousState).to.equal(PACMAN_STATES[1]);
      pacman.calculateState();
      expect(pacman.state).to.equal(PACMAN_STATES[1]);
      expect(pacman.previousState).to.equal(PACMAN_STATES[0]);
    });
  });
});
