<template>
  <div class="or-user-list-items flex-c-x-x">
    <MoUserListItem
      v-for="userItem in userItems"
      :key="userItem.id"
      :propsUserItem="userItem"
      @userDetail="userDetail"
    ></MoUserListItem>
    <div v-if="errorMessage != ''">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
import MoUserListItem from '../Molecules/MoUserListItem.vue';
import { fetchUserList } from '@/api/fetch';
export default {
  components: { MoUserListItem },
  created() {
    this.fetchUserList();
  },
  data() {
    return {
      userItems: null,
      errorMessage: '',
    };
  },
  methods: {
    async fetchUserList() {
      try {
        const { data } = await fetchUserList();
        console.log(data);
        this.userItems = data.data;
      } catch (error) {
        console.log(error);
        if (error.response.status == 404) {
          this.errorMessage = '404 エラー';
        }
      }
    },
    userDetail(id) {
      console.log(id);
      this.$router.push(`/user/${id}`);
    },
  },
};
</script>

<style></style>
