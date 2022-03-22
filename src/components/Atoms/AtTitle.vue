<template>
  <div class="text-title">{{ propsText }}</div>
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
