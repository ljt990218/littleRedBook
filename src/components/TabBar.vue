<script setup lang='ts'>
const route = useRoute()
const { t } = useI18n()
const active = ref(0)

const haveTabbar = computed(() => {
  return route.meta.haveTabbar
})
</script>

<template>
  <van-tabbar v-show="haveTabbar" v-model="active" route active-color="#1989fa">
    <van-tabbar-item replace to="/">
      {{ t('layouts.home') }}
      <template #icon>
        <div class="i-carbon:home" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item replace to="/about">
      {{ t('layouts.about') }}
      <template #icon>
        <div class="i-carbon:user" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>
