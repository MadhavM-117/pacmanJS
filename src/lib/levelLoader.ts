import { LevelInfo } from '../types';
import Level1 from './levels/level_1';

class LevelLoader {
  private static levels: LevelInfo[] = [Level1];

  private static drawLevel(
    level: LevelInfo,
    context: CanvasRenderingContext2D
  ): void {
    // add logic to display the level on the map
    console.info(level, context);
  }

  public static loadLevel(
    levelIndex: number,
    context: CanvasRenderingContext2D
  ): LevelInfo {
    if (levelIndex > this.levels.length) {
      console.error('LevelIndex out of Range!', levelIndex, this.levels);
      return null;
    }

    this.drawLevel(this.levels[levelIndex], context);
    return this.levels[levelIndex];
  }
}

export default LevelLoader;
