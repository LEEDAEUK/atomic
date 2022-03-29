<template>
  <div class="vi-graph-page flex-r-c-c">
    <OrCytoscapeCard></OrCytoscapeCard>
  </div>
</template>

<script>
import OrCytoscapeCard from '../components/Organisms/OrCytoscapeCard.vue';
export default {
  components: { OrCytoscapeCard },
};
</script>

<style scoped>
.vi-graph-page {
  width: 100%;
  height: 100%;
}
</style>
