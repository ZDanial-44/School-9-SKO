<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'

import Header from './components/MainHeader.vue'  
import SideBar from './components/SideBar.vue'
// import NotFound from './views/NotFound.vue'

const lang = ref('kz')

const setLang = (newLang) => {
  lang.value = newLang
}

const sidebarOpen = ref(true)
const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}
</script>

<template>
  <Header 
    :lang="lang" 
    @changeLang="setLang" 
    @toggleSidebar="toggleSidebar"
  />

  <div class="header-spacer"></div>

  <SideBar 
    :lang="lang" 
    v-show="sidebarOpen"
  />
  
  <RouterView v-slot="{ Component }">
    <component :is="Component" :lang="lang"/>
  </RouterView>
</template>

<style>
body {
  margin: 0;
  font-family: sans-serif;
  background-color: var(--color-bg);
}

.header-spacer {
  height: 11%;
}
</style>
