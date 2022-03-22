<template>
  <div class="login-card flex-c-c-c">
    <AtTitle propsText="Login"></AtTitle>
    <MoAccoutInput v-model="account"></MoAccoutInput>
    <MoPasswordInput v-model="password"></MoPasswordInput>
    <AtButton propsButtonText="Login"></AtButton>
    {{ account }}
    {{ password }}
  </div>
</template>

<script>
import AtButton from '../Atoms/AtButton.vue';
import AtTitle from '../Atoms/AtTitle.vue';
import MoAccoutInput from '../Molecules/MoAccoutInput.vue';
import MoPasswordInput from '../Molecules/MoPasswordInput.vue';
export default {
  components: { MoAccoutInput, MoPasswordInput, AtButton, AtTitle },
  data() {
    return {
      account: '',
      password: '',
    };
  },
};
</script>

<style scoped>
.login-card {
  max-width: 200px;
  background-color: darkgray;
  padding: 10px;
  border-radius: 10px;
}

.login-card .password,
.login-card .account {
  margin: 10px 0 0 0;
}

.login-card .btn {
  margin: 20px 0 0 0;
}
</style>
