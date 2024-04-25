import instance from './testaxios.js'; // 根据实际路径调整

async function fetchMusicData() {
  try {
    const response = await instance.get('/getRecommend'); // 调整为实际 API 路径
    const data = response.data;

    // 处理返回的数据
    console.log(data);
    // 或者将数据传递给其他函数、组件等
  } catch (error) {
    console.error('Failed to fetch music data:', error);
  }
}

// 调用函数获取数据
fetchMusicData();