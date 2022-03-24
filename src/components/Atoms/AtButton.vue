<template>
  <v-btn
    class="at-button"
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

<style scoped></style>
