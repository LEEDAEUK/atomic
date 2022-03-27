<template>
  <div class="vi-main-page flex-c-x-x">
    <OrUserListItems></OrUserListItems>
  </div>
</template>

<script>
import OrUserListItems from '../components/Organisms/OrUserListItems.vue';
export default {
  components: { OrUserListItems },
  created() {
    console.log('im main');
  },
};
</script>

<style scoped>
.vi-main-page {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 0 10px 10px 10px;
}
</style>
