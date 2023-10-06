<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-teal-6 text-white" reveal>
      <q-toolbar>
        <q-toolbar-title> Title </q-toolbar-title>
        <q-spacer />
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer class="gt-md text-center bg-white" show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <q-list>
        <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
          <q-item>{{ locale.name }}</q-item></NuxtLink
        >
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
const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
</script>
