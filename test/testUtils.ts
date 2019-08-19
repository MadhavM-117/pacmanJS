/* eslint-disable */
import { expect } from 'chai';
import {
  calculateSpeed,
  getLevelCoords,
  getObjectBounds,
  getObjectCorners
} from '../src/utils';
import 'mocha';
import { describe, it } from 'mocha';
import config from '../src/constants/config';

describe('Utils', () => {
  describe('calculateSpeed', () => {
    it('should calculate the speed given rotation angle 0', () => {
      const expectedSpeed = { x: config.pacMan.defaultSpeed, y: 0.0 };
      expect(calculateSpeed(0)).to.eql(expectedSpeed);
    });

    it('should calculate the speed given rotation angle 90', () => {
      const expectedSpeed = { x: 0.0, y: config.pacMan.defaultSpeed };
      expect(calculateSpeed(90)).to.eql(expectedSpeed);
    });

    it('should calculate the speed given rotation angle 180', () => {
      const expectedSpeed = { x: -config.pacMan.defaultSpeed, y: 0.0 };
      expect(calculateSpeed(180)).to.eql(expectedSpeed);
    });

    it('should calculate the speed given rotation angle 270', () => {
      const expectedSpeed = { x: 0.0, y: -config.pacMan.defaultSpeed };
      expect(calculateSpeed(270)).to.eql(expectedSpeed);
    });
  });

  describe('getLevelCoords', () => {
    it('should calculate level coordinates as 0, 0', () => {
      const expectedCoords = { x: 0, y: 0 };
      expect(getLevelCoords({ x: 10, y: 10 }, { x: 20, y: 20 })).to.eql(
        expectedCoords
      );
    });

    it('should calculate level coordinates as 1, 1', () => {
      const expectedCoords = { x: 1, y: 1 };
      expect(getLevelCoords({ x: 15, y: 15 }, { x: 10, y: 10 })).to.eql(
        expectedCoords
      );
    });

    it('should calculate level coordinates as 1, -1', () => {
      const expectedCoords = { x: 1, y: -1 };
      expect(getLevelCoords({ x: 15, y: -5 }, { x: 10, y: 10 })).to.eql(
        expectedCoords
      );
    });

    it('should calculate level coordinates as -1, 1', () => {
      let expectedCoords = { x: -1, y: 1 };
      expect(getLevelCoords({ x: -9, y: 18 }, { x: 10, y: 10 })).to.eql(
        expectedCoords
      );
    });
  });
});
