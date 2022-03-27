<template>
  <img class="at-fetch-image" :src="propsImageSrc" alt="logo" />
</template>

<script>
export default {
  props: {
    propsImageSrc: {
      type: String,
      require: true,
    },
  },
};
</script>

<style></style>
