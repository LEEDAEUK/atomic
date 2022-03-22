<template>
  <div class="password flex-c-x-x">
    <AtLabel propsText="password"></AtLabel>
    <AtInput :value="value" @input="inputText"></AtInput>
  </div>
</template>

<script>
import AtInput from '../Atoms/AtInput.vue';
import AtLabel from '../Atoms/AtLabel.vue';
export default {
  components: { AtLabel, AtInput },
  props: {
    value: String,
  },
  methods: {
    inputText($event) {
      console.log($event);
      this.$emit('input', $event);
    },
  },
};
</script>

<style></style>
