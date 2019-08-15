/**
 * Global utility functions
 */

import { ObjectBounds, Vector2D, LevelInfo } from './types';
import config from './constants/config';

export function toRadians(deg: number): number {
  return (deg * Math.PI) / 180;
}

export function getObjectBounds(
  position: Vector2D,
  size: Vector2D
): ObjectBounds {
  const bounds = {
    xMin: position.x - size.x / 2.0,
    xMax: position.x + size.x / 2.0,
    yMin: position.y - size.y / 2.0,
    yMax: position.y + size.y / 2.0
  };
  return bounds;
}

/**
 * Function to get the coordinates of a point, with respect to the level data array
 * @param position Canvas position
 * @param levelSize Size of a level block, used to transform coordinates
 */
export function getLevelCoords(
  position: Vector2D,
  levelSize: Vector2D
): Vector2D {
  return {
    x: Math.floor(position.x / levelSize.x),
    y: Math.floor(position.y / levelSize.y)
  };
}

/**
 * Getting the coordinates of the corner points of an object, given the object bounds
 * @param bounds : Bounds of an object
 */
export function getObjectCorners(bounds: ObjectBounds): Vector2D[] {
  const { xMin, xMax, yMin, yMax } = bounds;

  return [
    { x: xMin, y: yMin },
    { x: xMin, y: yMax },
    { x: xMax, y: yMin },
    { x: xMax, y: yMax }
  ];
}

/**
 * Check if a wall exists at the specified position, in the level
 * @param position : 2D position at which to check for wall
 * @param level : Loaded level
 */
export function checkWallExists(position: Vector2D, level: LevelInfo): boolean {
  const levelCoords = getLevelCoords(position, level.size);
  if (level.data[levelCoords.y][levelCoords.x] === 1) {
    return true;
  }

  return false;
}

export function normalizeAngle(angle: number): number {
  return toRadians(angle > 360 ? angle - 360 : angle);
}

export function calculateSpeed(rotation: number): Vector2D {
  rotation = rotation % 360;
  let speed = { x: 0.0, y: 0.0 };
  let speedMagnitude = config.pacMan.defaultSpeed;
  switch (rotation) {
    case 0:
      speed = { x: speedMagnitude, y: 0.0 };
      break;
    case 90:
      speed = { x: 0.0, y: speedMagnitude };
      break;
    case 180:
      speed = { x: -speedMagnitude, y: 0.0 };
      break;
    case 270:
      speed = { x: 0.0, y: -speedMagnitude };
      break;
    default:
      break;
  }
  return speed;
}
