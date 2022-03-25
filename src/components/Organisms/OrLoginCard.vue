<template>
  <div class="or-login-card flex-c-c-c">
    <AtTitle propsText="Login"></AtTitle>
    <MoAccoutInput v-model="account"></MoAccoutInput>
    <MoPasswordInput v-model="password"></MoPasswordInput>
    <AtErrorMessage :propsText="errorMessage"></AtErrorMessage>
    <AtButton
      @onClick="userLogin"
      propsButtonText="Login"
      propsButtonBackgroundColor="white"
      propsButtonTextColor="black"
    ></AtButton>
  </div>
</template>

<script>
import AtButton from '../Atoms/AtButton.vue';
import AtErrorMessage from '../Atoms/AtErrorMessage.vue';
import AtTitle from '../Atoms/AtTitle.vue';
import MoAccoutInput from '../Molecules/MoAccoutInput.vue';
import MoPasswordInput from '../Molecules/MoPasswordInput.vue';
export default {
  components: {
    MoAccoutInput,
    MoPasswordInput,
    AtButton,
    AtTitle,
    AtErrorMessage,
  },
  created() {
    this.errorMessage = '';
  },
  data() {
    return {
      account: '',
      password: '',
      errorMessage: '',
    };
  },
  methods: {
    async userLogin() {
      if (this.account == '' || this.account == null) {
        this.errorMessage = '어카운트를 입력해주세요';
      } else if (this.password == '' || this.password == null) {
        this.errorMessage = '패스워드를 입력해주세요';
      } else {
        this.errorMessage = '';
        try {
          const userData = {
            email: this.account,
            password: this.password,
          };
          await this.$store.dispatch('userStore/LOGIN', userData);
          this.$router.replace('/main');
        } catch (error) {
          console.log(error.response.data);
          this.errorMessage = error.response.data.error;
        }
      }
    },
  },
};
</script>

<style scoped>
.or-login-card {
  width: 80%;
  max-width: 300px;
  background-color: darkgray;
  padding: 10px;
  border-radius: 10px;
}

.or-login-card .mo-password,
.or-login-card .mo-account {
  width: 100%;
  margin: 10px 0 0 0;
}

.or-login-card .at-button {
  width: 100%;
}
</style>
