<template>
  <v-btn
    class="btn"
    @click="onClick"
    :color="propsButtonBackgroundColor"
    :class="`${propsButtonTextColor}--text`"
  >
    {{ propsButtonText }}
  </v-btn>
</template>

<script>
export default {
  props: {
    propsButtonText: {
      type: String,
      require: true,
    },
    propsButtonTextColor: {
      type: String,
      default: 'black',
      validator: function (value) {
        return (
          ['black', 'white', 'red', 'blue', 'orange'].indexOf(value) !== -1
        );
      },
    },
    propsButtonBackgroundColor: {
      type: String,
      default: 'white',
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
