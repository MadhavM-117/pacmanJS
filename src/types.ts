/**
 * File to store any types that are intended to be used Globally.
 */

export interface ObjectBounds {
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
}

export interface Vector2D {
  x: number;
  y: number;
}

export interface LevelInfo {
  style: {
    color: string;
  };
  size: {
    x: number;
    y: number;
  };
  data: number[][];
}
