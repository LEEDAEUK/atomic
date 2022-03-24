<template>
  <input
    class="at-input"
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    value: String,
  },
};
</script>

<style>
.at-input {
  background-color: white;
  border-radius: 10px;
  height: 40px;
  padding: 5px;
}
</style>
