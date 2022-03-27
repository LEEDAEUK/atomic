<template>
  <img
    class="at-image"
    :src="require(`@/assets/${propsImageName}`)"
    alt="logo"
    @click="onClick"
  />
</template>

<script>
export default {
  props: {
    propsImageName: {
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

<style></style>
