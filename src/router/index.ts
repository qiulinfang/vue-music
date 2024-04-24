import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/HelloWorld'
  },
  {
    path: '/HelloWorld',
    name: 'HelloWorld',
    component: () => import(/* webpackChunkName: "recommend" */ '@/components/HelloWorld/HelloWorld.vue'),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

/**
 * vue-router 配置
 * @param app
 */
export function setupRouter (app: App<Element>): void {
  app.use(router)
}

export default router
