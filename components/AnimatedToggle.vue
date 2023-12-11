<template>
  <div class="animated-div"><q-icon name="keyboard_arrow_down" size="3rem" color="white"/></div>
</template>

<script setup lang="ts">
const { $anime } = useNuxtApp()

onMounted(() => {
    checkPosition(); // 初始檢查
});

function checkPosition() {
    $anime({
      targets:'.animated-div',
      translateY: 50,
      loop: true,
      easing: 'easeInOutSine',  
      direction: 'alternate',
      duration: 1000,
    });
}


</script>

<style>

</style>
