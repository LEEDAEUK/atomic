<template>
  <div
    class="mo-user-list-item flex-r-x-c"
    @click="userDetail(propsUserItem.id)"
  >
    <AtFetchImage :propsImageSrc="propsUserItem.avatar"></AtFetchImage>
    <div class="mo-user-list-item__info flex-c-x-x">
      <AtDescription :propsText="propsUserItem.first_name"></AtDescription>
      <AtDescription :propsText="propsUserItem.email"></AtDescription>
    </div>
  </div>
</template>

<script>
import AtDescription from '../Atoms/AtDescription.vue';
import AtFetchImage from '../Atoms/AtFetchImage.vue';
export default {
  created() {
    console.log(this.propsUserItem);
  },
  components: { AtDescription, AtFetchImage },
  props: {
    propsUserItem: {
      type: Object,
    },
  },
  methods: {
    userDetail(id) {
      this.$emit('userDetail', id);
    },
  },
};
</script>

<style scoped>
.mo-user-list-item {
  width: 100%;
  background-color: skyblue;
  margin: 10px 0 0 0;
  min-height: 128px;
  padding: 10px;
  overflow: hidden;
}

.mo-user-list-item .at-fetch-image {
  border-radius: 100px;
  width: 100px;
  height: 100px;
  margin: 0 20px 0 0;
}

.mo-user-list-item .mo-user-list-item__info {
  overflow: hidden;
}

.mo-user-list-item .at-description {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
