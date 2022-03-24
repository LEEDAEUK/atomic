<template>
  <div class="login-card flex-c-c-c">
    <AtTitle propsText="Login"></AtTitle>
    <MoAccoutInput v-model="account"></MoAccoutInput>
    <MoPasswordInput v-model="password"></MoPasswordInput>
    <AtErrorMessage :propsText="errorMessage"></AtErrorMessage>
    <AtButton
      @onClick="userLogin"
      propsButtonText="Login"
      propsButtonBackgroundColor="red"
      propsButtonTextColor="blue"
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
        this.$store.dispatch('loadingStore/SET_LOADING_STATUS', {
          loadingStatus: true,
        });
        let commitData = {
          account: this.account,
          password: this.password,
        };
        let result = await this.$store.dispatch('userStore/LOGIN', commitData);
        if (result) {
          console.log('result is true');
          this.errorMessage = '성공';
          this.$store.dispatch('loadingStore/SET_LOADING_STATUS', {
            loadingStatus: false,
          });
        } else {
          console.log('result is false');
          this.errorMessage = '실패';
          this.$store.dispatch('loadingStore/SET_LOADING_STATUS', {
            loadingStatus: false,
          });
        }
      }
    },
  },
};
</script>

<style scoped>
.login-card {
  width: 80%;
  max-width: 300px;
  background-color: darkgray;
  padding: 10px;
  border-radius: 10px;
}

.login-card .password,
.login-card .account {
  width: 100%;
  margin: 10px 0 0 0;
}

.login-card .btn {
  width: 100%;
}
</style>
