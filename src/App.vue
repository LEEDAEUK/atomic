<template>
  <v-app>
    <OrLoadingCard v-if="getLoadingStatus"></OrLoadingCard>
    <OrHeader :propsCurrentPageName="currentPagePath"></OrHeader>
    <router-view />
  </v-app>
</template>

<script>
import OrHeader from './components/Organisms/OrHeader.vue';
import OrLoadingCard from './components/Organisms/OrLoadingCard.vue';
export default {
  components: { OrLoadingCard, OrHeader },
  name: 'App',
  computed: {
    getLoadingStatus() {
      return this.$store.state.loadingStore.loadingStatus;
    },
    currentPagePath() {
      return this.$route.path;
    },
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
>>> .v-application--wrap {
  /* 여기서 min-height를 해 줌으로써, vuetify v0application--wrap의 기본속성인 height 100vh를 없앨 수 있다. 이게 포인트 */
  min-height: auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#app .or-header {
  width: 100%;
}
</style>
