<template>
  <div className="flex-1">
    <template v-if="isLoading">
      <Loading />
    </template>
    <template v-if="isError">
      <Error :error="error" />
    </template>
    <template v-if="isSuccess">
      <ul>
        <li v-for="item in data" :key="item.id">{{ item.name }}</li>
      </ul>
    </template>
  </div>
</template>

<script>
import { useQuery } from '~/hooks';

export default {
  setup() {
    return useQuery('/posts');
  },
};
</script>
