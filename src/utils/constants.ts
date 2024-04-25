// 直接使用import.meta.env访问环境变量
export const NODE_ENV = import.meta.env.VITE_NODE_ENV;
export const API_URL = import.meta.env.VITE_API_URL;


export const SINGER_KEY = '__singer__'

export const FAVORITE_KEY = '__favorite__'

export const ALBUM_KEY = '__album__'

export const TOP_KEY = '__top__'

export const SEARCH_KEY = '__search__'

export const PLAY_KEY = '__play__'

export enum PlayMode {
  /** 顺序播放 */
  SEQUENCE,
  /** 循环播放 */
  LOOP,
  /** 随机播放 */
  RANDOM
}
