// 在您的项目中创建一个专门的 axios.js 或 api.js 文件
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://www.wangkailing.top/vue-music/api',
  // 其他全局配置，如 headers、timeout、responseType 等
});

export default instance;