/**
 * Global utility functions
 */

import { ObjectBounds } from './types';
import config from './constants/config';

export function toRadians(deg: number): number {
  return (deg * Math.PI) / 180;
}

export function getObjectBounds(
  position: { x: number; y: number },
  size: { x: number; y: number }
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
  position: { x: number; y: number },
  levelSize: { x: number; y: number }
): { x: number; y: number } {
  return {
    x: Math.floor(position.x / levelSize.x),
    y: Math.floor(position.y / levelSize.y)
  };
}

export function normalizeAngle(angle: number): number {
  return toRadians(angle > 360 ? angle - 360 : angle);
}

export function calculateSpeed(rotation: number): { x: number; y: number } {
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
