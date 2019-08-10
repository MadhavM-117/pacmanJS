/**
 * Global utility functions
 */

import { ObjectBounds } from './types';

export function toRadians(deg: number) {
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
