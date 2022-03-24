<template>
  <img
    class="at-image"
    :src="require(`@/assets/${propsImageName}`)"
    alt="logo"
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
};
</script>

<style></style>
