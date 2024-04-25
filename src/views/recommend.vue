<template>
  <div class="recommend" v-loading="loading">
    <scroll class="recommend-content">
      <div>
        <div class="slider-wrapper">
          <div class="slider-content">
            <slider v-if="sliders.length" :sliders="sliders" />
          </div>
        </div>
        <div class="recommend-list">
          <h1 class="list-title" v-show="!loading">热门歌单推荐</h1>
          <ul>
            <li class="item" v-for="item in albums" :key="item.id" @click="selectAlbum(item)">
              <div class="icon">
                <img width="60" height="60" v-lazy="item.pic" alt="">
              </div>
              <div class="text">
                <h2 class="name">{{ item.username }}</h2>
                <p class="title">{{ item.title }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </scroll>
    <router-view v-slot="{ Component }">
      <transition appear name="slide">
        <component :is="Component" :data="selectedAlbum" />
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { Scroll, Slider } from '@/components'
import RecommendServer from '@/api/recommend'
import type { Album, RecommendResp } from '@/types/api/recommend'

interface State extends RecommendResp {
  /** 选中的专辑 */
  selectedAlbum: Album | undefined;
}

export default defineComponent({
  name: 'Recommend',
  components: {
    Slider,
    Scroll
  },
  setup() {
    const router = useRouter()
    const state = reactive<State>({
      sliders: [],
      albums: [],
      selectedAlbum: undefined
    })
    const loading = computed(() => !state.sliders.length && !state.albums.length)

    /** 获取数据 */
    async function fetchData() {
      const { sliders, albums } = await RecommendServer.getRecommend()
      state.sliders = sliders
      state.albums = albums
    }

    /** 选择专辑 */
    function selectAlbum(album: Album): void {
      state.selectedAlbum = album
      router.push({
        path: `/recommend/${album.id}`
      })
    }

    onMounted(() => {
      fetchData()
    })

    return {
      ...toRefs(state),
      loading,

      selectAlbum
    }

  }
})
</script>

<style></style>