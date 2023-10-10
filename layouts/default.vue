<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-white text-black" reveal>
      <q-toolbar>
        <q-toolbar-title> Title </q-toolbar-title>
        <q-space />
        <q-btn dense flat class="lt-md" round icon="menu" @click="toggleLeftDrawer" />
        <q-tabs class="gt-md">
          <q-route-tab v-for="locale in locales" :key="locale.code" :to="switchLocalePath(locale.code)">
            {{ locale.name }}
          </q-route-tab>
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-drawer class="lt-md text-center bg-white" v-model="rightDrawerOpen" side="right">
      <q-list>
        <q-item clickable v-for="locale in locales" :key="locale.code" :to="switchLocalePath(locale.code)">
          {{ locale.name }}
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <NuxtPage />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from "vue";

const rightDrawerOpen = ref(false);

const toggleLeftDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value;
};
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
console.log(locales)

</script>
