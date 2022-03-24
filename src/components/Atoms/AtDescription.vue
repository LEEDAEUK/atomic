<template>
  <div class="at-description">{{ propsText }}</div>
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

<style></style>
