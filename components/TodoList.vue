<template>
  <div className="flex-1">
    <template v-if="isLoading">
      <Loading />
    </template>
    <template v-if="isError">
      <Error :error="error" />
    </template>
    <template v-if="isSuccess">
      <ul class="bg-green-100 border border-green-400 px-4 py-3 rounded relative grid">
        <li v-for="item in data" :key="item.id">{{ item.id }}</li>
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
