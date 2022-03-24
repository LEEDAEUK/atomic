<template>
  <div class="at-error-message flex-r-c-c">{{ propsText }}</div>
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
.at-error-message {
  color: red;
  height: 30px;
  margin: 10px 0;
}
</style>
