<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="titlebar" reveal>
      <q-toolbar>
        <q-toolbar-title> Title </q-toolbar-title>
        <q-space />
        <q-btn flat round icon="brightness_4" color="inherit" @click="toggleDarkMode" />
        <q-btn dense flat class="lt-md" round icon="menu" @click="toggleLeftDrawer" />
        <q-tabs class="gt-md ">
          <q-route-tab v-for="locale in locales" :key="locale.code" :to="switchLocalePath(locale.code)">
            {{ locale.name }}
          </q-route-tab>
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-drawer class="lt-md text-center bg-accent2" v-model="rightDrawerOpen" side="right">
      <q-list>
        <q-item clickable v-for="locale in locales" :key="locale.code" :to="switchLocalePath(locale.code)">
          {{ locale.name }}
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container class="bg-accent2">
      <NuxtPage />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">

const $q = useQuasar();
const rightDrawerOpen = ref(false);
const isDark = ref($q.dark.isActive);
const toggleLeftDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value;
};

const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
// console.log(locales);
function toggleDarkMode() {
  isDark.value = !isDark.value;
  $q.dark.set(isDark.value);
}

</script>

<style lang="scss" scoped>

</style>