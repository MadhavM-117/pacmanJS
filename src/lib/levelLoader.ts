import { LevelInfo } from '../types';
import Level1 from './levels/level_1';

class LevelLoader {
  public loadLevel(): LevelInfo {
    console.log(Level1);
    return Level1;
  }
}

export default LevelLoader;
