<template>
  <v-btn class="btn">{{ propsButtonText }}</v-btn>
</template>

<script>
export default {
  props: {
    propsButtonText: {
      type: String,
      require: true,
    },
  },
};
</script>

<style scoped>
.btn {
  width: 100%;
}
</style>
