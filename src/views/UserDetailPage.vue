<template>
  <div class="vi-user-detail-page flex-c-x-x">
    <OrUserDetailCard></OrUserDetailCard>
  </div>
</template>

<script>
import OrUserDetailCard from '../components/Organisms/OrUserDetailCard.vue';
export default {
  components: { OrUserDetailCard },
};
</script>

<style scoped>
.vi-user-detail-page {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 10px;
}
</style>
