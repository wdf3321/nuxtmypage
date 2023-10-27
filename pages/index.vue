<template>
<div class="row w-100 q-pa-md-md">
  <div class="col-xs-12 col-md-6 bg-pink">a</div>
  <div class="col-xs-12 col-md-6 bg-pink">a</div>
</div>
</template>
<!-- <div>
  <h1>{{ $t('welcome')  }}</h1>
</div> -->
<script setup lang="ts">
import { ref } from 'vue'
const { t,locale, locales  } = useI18n()

const layout = ref('default')  // Use the default layout


</script> 

<style lang="scss" scoped>
.bg-pink{

  border: 1px solid #000;
}

</style>