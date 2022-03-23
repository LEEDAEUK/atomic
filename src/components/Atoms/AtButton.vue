<template>
  <v-btn class="btn" @click="onClick">{{ propsButtonText }}</v-btn>
</template>

<script>
export default {
  props: {
    propsButtonText: {
      type: String,
      require: true,
    },
  },
  methods: {
    onClick() {
      this.$emit('onClick');
    },
  },
};
</script>

<style scoped>
.btn {
  width: 100%;
}
</style>
