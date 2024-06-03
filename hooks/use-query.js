import qs from 'query-string';
import { ref, watchEffect, computed } from 'vue';
import { axios } from '../lib';

const useQuery = (url, options) => {
  const fullUrl = qs.stringifyUrl({ url, query: options });
  const data = ref(null);
  const error = ref(null);
  const status = ref('loading');

  const queryFn = async () => {
    status.value = 'loading';
    try {
      const res = await axios.get(fullUrl);
      data.value = res.data;
      status.value = 'success';
    } catch (err) {
      error.value = err;
      status.value = 'error';
    }
  };

  watchEffect(() => {
    queryFn();
  });

  // Computed properties
  const isLoading = computed(() => status.value === 'loading');
  const isSuccess = computed(() => status.value === 'success');
  const isError = computed(() => status.value === 'error');

  return { data, error, status, isLoading, isSuccess, isError };
};

export default useQuery;
