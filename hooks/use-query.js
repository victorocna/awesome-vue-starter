import qs from 'query-string';
import { ref, computed } from 'vue';
import { axios } from '../lib';

const useQuery = async (url, options) => {
  const fullUrl = qs.stringifyUrl({ url, query: options });

  // Reactive variables
  const data = ref(null);
  const error = ref(null);
  const status = ref('loading');

  // Fetch data
  try {
    data.value = await axios.get(fullUrl);
    status.value = 'success';
  } catch (err) {
    error.value = err;
    status.value = 'error';
  }

  // Computed properties
  const isLoading = computed(() => status.value === 'loading');
  const isSuccess = computed(() => status.value === 'success');
  const isError = computed(() => status.value === 'error');

  return { data, error, status, isLoading, isSuccess, isError };
};

export default useQuery;
