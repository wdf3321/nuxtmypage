<template>
  <div>
    <h1>{{ $t('welcome')  }}</h1>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const { t,locale, locales  } = useI18n()

const layout = ref('default')  // Use the default layout


</script> 