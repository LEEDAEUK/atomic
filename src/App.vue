<template>
  <v-app>
    <OrLoadingCard v-if="getLoadingStatus"></OrLoadingCard>
    <router-view />
  </v-app>
</template>

<script>
import OrLoadingCard from './components/Organisms/OrLoadingCard.vue';
export default {
  components: { OrLoadingCard },
  name: 'App',
  computed: {
    getLoadingStatus() {
      return this.$store.state.loadingStore.loadingStatus;
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
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
