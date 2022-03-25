<template>
  <div class="mo-login-status flex-r-x-x">
    <AtButton
      @onClick="userLogin"
      v-if="!isLogined"
      propsButtonText="로그인"
    ></AtButton>
    <AtButton
      @onClick="userJoin"
      v-if="!isLogined"
      propsButtonText="회원가입"
    ></AtButton>
    <AtButton
      @onClick="userLogout"
      v-if="isLogined"
      propsButtonText="로그아웃"
    ></AtButton>
  </div>
</template>

<script>
import AtButton from '../Atoms/AtButton.vue';
export default {
  components: { AtButton },
  props: {
    isLogined: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    userLogin() {
      this.$router.push('/login');
    },
    userJoin() {},
    async userLogout() {
      await this.$store.commit('userStore/LOGOUT');
      this.$router.push('/login');
    },
  },
};
</script>

<style></style>
