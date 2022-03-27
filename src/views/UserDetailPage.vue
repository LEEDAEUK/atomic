<template>
  <div class="vi-user-detail-page flex-c-x-x">
    detail id : {{ this.$route.params }}
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$route.params);
  },
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
