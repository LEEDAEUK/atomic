<template>
  <div class="at-error-message flex-r-c-c">
    <div v-if="propsText != undefined && propsText != ''">{{ propsText }}</div>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.propsText);
  },
  props: {
    propsText: {
      type: String,
      require: true,
      default: 'エラーが発生しました',
    },
  },
};
</script>

<style>
.at-error-message {
  color: red;
  height: 30px;
  margin: 10px 0;
}
</style>
