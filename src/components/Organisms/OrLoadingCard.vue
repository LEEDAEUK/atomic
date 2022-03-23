<template>
  <div class="loading-card flex-c-c-c">
    <AtLoadingCircle></AtLoadingCircle>
  </div>
</template>

<script>
import AtLoadingCircle from '../Atoms/AtLoadingCircle.vue';
export default {
  components: { AtLoadingCircle },
};
</script>

<style>
.loading-card {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 999;
}
</style>
