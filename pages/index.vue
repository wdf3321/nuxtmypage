<template>
<div class="row w-100 ">
  <div class="col-xs-12 col-md-12 image-container column items-center first">
    <div class="col-4"></div>
    <div class="text-h2 col-2 text-center">{{t('welcome')  }}</div>
    <AnimatedToggle class="arrow col text-center q-mt-xl"/>

  </div>
</div>
<div class="row w-100 q-pa-md-md">
  <div class="col-xs-12 col-md-4 bg-pink"><img src="https://picsum.photos/300/200/?random=10"></div>
  <div class="col-xs-12 col-md-4 bg-pink"><img src="https://picsum.photos/300/200/?random=10"></div>
  <div class="col-xs-12 col-md-4 bg-pink"><img src="https://picsum.photos/300/200/?random=10"></div>
</div>
<div class="row w-100 q-pa-md-md">
  <div class="col-xs-12 col-md-3 bg-pink"><img src="https://picsum.photos/300/200/?random=10"></div>
  <div class="col-xs-12 col-md-3 bg-pink"><img src="https://picsum.photos/300/200/?random=10"></div>
  <div class="col-xs-12 col-md-3 bg-pink"><img src="https://picsum.photos/300/200/?random=10"></div>
  <div class="col-xs-12 col-md-3 bg-pink"><img src="https://picsum.photos/300/200/?random=10"></div>
</div>
<div class="row w-100 q-pa-md-md">
  <div class="col-xs-12 col-md-6 bg-pink"><img src="https://picsum.photos/300/200/?random=10"></div>
  <div class="col-xs-12 col-md-6 bg-pink"><img src="https://picsum.photos/300/200/?random=10"></div>
</div>
<div class="row w-100 q-pa-md-md">
  <div class="col-xs-12 col-md-6 bg-pink">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nobis dolorum, molestiae distinctio accusamus dicta? Necessitatibus, inventore dolor voluptatibus cum dolores eaque! Non, nisi pariatur. Dolorum nobis magni omnis vel.</div>
  <div class="col-xs-12 col-md-6 bg-pink">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nobis dolorum, molestiae distinctio accusamus dicta? Necessitatibus, inventore dolor voluptatibus cum dolores eaque! Non, nisi pariatur. Dolorum nobis magni omnis vel.</div>
</div>
</template>
<!-- <div>
  <h1>{{ $t('welcome')  }}</h1>
</div> -->
<script setup lang="ts">
const { t,locale, locales  } = useI18n()
const { $anime } = useNuxtApp()
const layout = ref('default')  // Use the default layout


</script> 

<style lang="scss" scoped>
.image-container {
  background-image: url('https://picsum.photos/1920/1080/?random=10');
  background-position: center;
  background-size: cover; 
  height: 1024px;
  backdrop-filter: blur(10px);
}

.arrow{
  position: relative;
}
.arrowrow{
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 50%;
}
.first{
  overflow: hidden;
}
</style>  