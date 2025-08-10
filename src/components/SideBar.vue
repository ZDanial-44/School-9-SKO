<template>
  <aside class="sidebar" v-show="isOpen">
    <ul>
      <li v-for="route in routes" :key="route.path" class="sidebar-item">
        <RouterLink :to="route.path" class="sidebar-link">
          <span class="sidebar-link-text">
            {{ route.meta?.title?.[lang] || route.name }}
          </span>
        </RouterLink>
      </li>
    </ul>
  </aside>
</template>

<script setup>
import { routes } from "../router/index.js";
const props = defineProps({
  lang: String,
  isOpen: Boolean,
});
</script>

<style scoped>
.sidebar {
  position: fixed;
  z-index: 999;
  top: 11%;
  right: 0;
  width: 250px;
  height: 85%;
  background-color: var(--color-primary);
  padding: 20px;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-item {
  background-color: var(--color-text-light);
  color: var(--color-primary);
  font-weight: bold;
  padding: 10px;
  margin-bottom: 6px;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
}

.sidebar-item:hover {
  transform: scale(1.05);
  background-color: var(--color-primary-one);
  color: var(--color-white);
}

.sidebar {
  overflow-y: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
}

.sidebar-link::-webkit-scrollbar {
  display: none; /* Chrome, Safari */
}

.sidebar-link {
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: inherit;
}
</style>
