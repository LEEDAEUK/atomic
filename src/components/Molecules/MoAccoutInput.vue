<template>
  <div class="account flex-c-x-x">
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
    inputText($event) {
      console.log($event);
      this.$emit('input', $event);
    },
  },
};
</script>

<style>
.account .label {
  margin: 0 0 5px 0;
}
</style>
