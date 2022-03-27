<template>
  <div class="or-user-detail-card flex-c-x-c" v-if="userDetail != null">
    <AtFetchImage :propsImageSrc="userDetail.avatar"></AtFetchImage>
    <AtDescription :propsText="userDetail.first_name"></AtDescription>
    <AtDescription :propsText="userDetail.last_name"></AtDescription>
    <AtDescription :propsText="userDetail.email"></AtDescription>
  </div>
</template>

<script>
import { fetchUser } from '@/api/fetch';
import AtFetchImage from '../Atoms/AtFetchImage.vue';
import AtDescription from '../Atoms/AtDescription.vue';
export default {
  components: { AtFetchImage, AtDescription },
  created() {
    console.log(this.$route.params.id);
    this.fetchUser();
  },
  data() {
    return {
      errorMessage: '',
      userDetail: null,
    };
  },
  methods: {
    async fetchUser() {
      try {
        const { data } = await fetchUser(this.$route.params.id);
        console.log(data);
        this.userDetail = data.data;
      } catch (error) {
        console.log(error);
        if (error.response.status == 404) {
          this.errorMessage = '404 エラー';
        }
      }
    },
  },
};
</script>

<style></style>
