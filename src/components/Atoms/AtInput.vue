<template>
  <input
    class="input"
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
.input {
  background-color: white;
  border-radius: 10px;
  height: 40px;
  padding: 5px;
}
</style>
