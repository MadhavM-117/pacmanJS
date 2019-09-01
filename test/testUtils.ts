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
import { Vector2D } from '../src/types';

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

  describe('getObjectBounds', () => {
    it('should get bounds of object at origin', () => {
      const expectedBounds = {
        xMin: -5,
        xMax: 5,
        yMin: -5,
        yMax: 5
      };
      expect(getObjectBounds({ x: 0, y: 0 }, { x: 10, y: 10 })).to.eql(
        expectedBounds
      );
    });

    it('should get bounds of object with odd size', () => {
      const expectedBounds = {
        xMin: -3.5,
        xMax: 3.5,
        yMin: -3.5,
        yMax: 3.5
      };

      expect(getObjectBounds({ x: 0, y: 0 }, { x: 7, y: 7 })).to.eql(
        expectedBounds
      );
    });
  });

  describe('getObjectCorners', () => {
    it('check corners are obtained from bounds', () => {
      const expectedCorners = [
        { x: -5, y: -5 },
        { x: -5, y: 5 },
        { x: 5, y: -5 },
        { x: 5, y: 5 }
      ];

      const actualCorners = getObjectCorners({
        xMin: -5,
        xMax: 5,
        yMin: -5,
        yMax: 5
      });

      actualCorners.forEach((corner: Vector2D) => {
        // ensure actual corners are all present in the expected corners list
        expect(
          expectedCorners.find((expectedCorner: Vector2D) => {
            return (
              corner.x === expectedCorner.x && corner.y === expectedCorner.y
            );
          })
        ).to.not.be.undefined;
      });
    });
  });
});
