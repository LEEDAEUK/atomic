<template>
  <div class="vi-login-page flex-r-c-c">
    <OrLoginCard></OrLoginCard>
  </div>
</template>

<script>
import OrLoginCard from '../components/Organisms/OrLoginCard.vue';
export default {
  components: {
    OrLoginCard,
  },
};
</script>

<style scoped>
.vi-login-page {
  width: 100%;
  height: 100%;
}
</style>
