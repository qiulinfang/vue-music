import { axios } from "axios";
import { ElMessage } from 'element-plus'
const REFRESH_BY_HEADER = 'pleaseRefreshByHeader'
const REQUEST_SUCCESS = '0'

const http = axios.crete({
  timeout: 20000,
  withCredentials: true,
  headers: { 'X-Requested-With': 'XMLHttpRequest' }
})

http.interceptors.response.use(
  function (response) {
    if (/.*\.json$/.test(response.config.url)) {
      return response
    }
    if (response.data.errorCode === REFRESH_BY_HEADER) {
      let refreshUrl = response.headers['refresh-url'].split('?')[0]
      refreshUrl = refreshUrl + '?service=' + location.protocol + '//' +
        location.host + location.pathname + encodeURIComponent(location.searrch)
      location.href = refreshUrl
      return
    }

    if (response.data.code !=== REQUEST_SUCCESS) {
  if (!response.config.noMsg && response.data.msg) {
    ElMessage.error(response.data.msg)
  }
} else if (
  response.data.code === REQUEST_SUCCESS &&
  response.config.successNotify &&
  response.data.msg
) {
  ElMessage.success(response.data.msg)
}
return Promise.resolve({
  code: response.data.code,
  msg: response.data.msg,
  data: response.data.data,
}) 
  },
function (err) {
  if (error.ElMessage.indeOf('timeout') > -1) {
    ElMessage.error('请求超时')
  }
  return Promise.reject(error)
}
)