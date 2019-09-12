import { LevelInfo } from '../types';
import Level1 from './levels/level_1';
import NormalCandy from './sprites/normalCandy';
import Game from './game';

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

  public static loadCandy(game: Game): NormalCandy[][] {
    const { x: sizeX, y: sizeY } = game.level.size;

    return game.level.data.map((row, y): NormalCandy[] => {
      return row.map(
        (val, x): NormalCandy => {
          if (val === 0) {
            const point = { x: (x + 0.5) * sizeX, y: (y + 0.5) * sizeY };
            return new NormalCandy(game, point);
          }
          return null;
        }
      );
    });
  }
}

export default LevelLoader;
