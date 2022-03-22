<template>
  <div class="contents flex-r-c-c">
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
.contents {
  width: 100%;
  height: 100%;
}
</style>
