<template>
  <div class="or-header flex-r-sb-c">
    <AtImage propsImageName="icon.png" @onClick="toMain"></AtImage>
    <MoLoginStatus
      v-if="propsCurrentPageName != '/login' && propsCurrentPageName != '/'"
      :isLogined="isLogined"
    ></MoLoginStatus>
  </div>
</template>

<script>
import AtImage from '../Atoms/AtImage.vue';
import MoLoginStatus from '../Molecules/MoLoginStatus.vue';
export default {
  components: { AtImage, MoLoginStatus },
  computed: {
    currentPage() {
      return this.$route;
    },
    isLogined() {
      return this.$store.state.userStore.token == '' ? false : true;
    },
  },
  methods: {
    toMain() {
      console.log(this.$route);
      if (this.$route.path != '/main' && this.$route.path != '/login') {
        this.$router.push(this.isLogined == true ? '/main' : '/login');
      }
    },
  },
  props: {
    propsCurrentPageName: {
      type: String,
    },
  },
};
</script>

<style>
.or-header {
  width: 100%;
  height: 70px;
  padding: 20px;
  background-color: beige;
}
.or-header .at-image {
  height: 100%;
}
</style>
