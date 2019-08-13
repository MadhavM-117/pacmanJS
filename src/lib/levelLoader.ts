import { LevelInfo } from '../types';
import Level1 from './levels/level_1';

class LevelLoader {
  private static levels: LevelInfo[] = [Level1];

  public static drawLevel(
    level: LevelInfo,
    context: CanvasRenderingContext2D
  ): void {
    // add logic to display the level on the map
    const { x: sizeX, y: sizeY } = level.size;

    level.data.forEach((row, y): void => {
      row.forEach((val, x): void => {
        if (val === 1) {
          context.fillStyle = level.style.color;
          context.fillRect(x * sizeX, y * sizeY, sizeX, sizeY);
        }
      });
    });
  }

  public static loadLevel(levelIndex: number): LevelInfo {
    if (levelIndex > this.levels.length) {
      console.error('LevelIndex out of Range!', levelIndex, this.levels);
      return null;
    }

    return this.levels[levelIndex];
  }
}

export default LevelLoader;
