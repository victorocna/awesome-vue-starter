<template>
  <div className="flex-1">
    <template v-if="state.isLoading">
      <Loading />
      <!-- <h2>Loading...</h2> -->
    </template>
    <template v-if="state.isError">
      <Error :error="state.error" />
    </template>
    <template v-if="state.isSuccess">
      <ul class="bg-green-100 border border-green-400 px-4 py-3 rounded relative grid">
        <li v-for="item in state.data[0]" :key="item.id">{{ item.title }}</li>
      </ul>
    </template>
  </div>
</template>

<script>
import { merge } from 'lodash';
import { reactive, onMounted } from 'vue';
import { useQuery } from '~/hooks';

export default {
  setup() {
    const state = reactive({
      data: null,
      error: null,
      isLoading: true,
      isError: false,
      isSuccess: false,
    });

    onMounted(async () => {
      const result = await useQuery('/posts');
      merge(state, result);
    });

    return { state };
  },
};
</script>
