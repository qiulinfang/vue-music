<template>
  <v-header/>
  <v-tab/>
  <router-link to="/HelloWorld">HelloWrold</router-link>
  <router-view></router-view>
</template>

<script lang="ts">
import { computed, defineComponent, provide } from 'vue'
import { useStore } from 'vuex'
import {VHeader, VTab } from '@/components'
import images from '@/assets/images'

export default defineComponent({
  name: 'App',
  components: {
    VHeader,
    VTab,
  },
  setup () {
    const store = useStore()
    provide('images', images)

    const playList = computed(() => store.state.playList)
    const viewStyle = computed(() => {
      const bottom = playList.value.length ? '60px' : '0'
      return {
        bottom
      }
    })

    return {
      viewStyle
    }
  }
})
</script>
