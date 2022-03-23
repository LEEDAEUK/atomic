<template>
  <div class="error-message flex-r-c-c">{{ propsText }}</div>
</template>

<script>
export default {
  props: {
    propsText: {
      type: String,
      require: true,
    },
  },
};
</script>

<style>
.error-message {
  color: red;
  height: 30px;
  margin: 10px 0;
}
</style>
