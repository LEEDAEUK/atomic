<template>
  <div class="mo-account flex-c-x-x">
    <AtLabel propsText="account"></AtLabel>
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
    inputText(inputText) {
      this.$emit('input', inputText);
    },
  },
};
</script>

<style>
.mo-account .at-label {
  margin: 0 0 5px 0;
}
</style>
