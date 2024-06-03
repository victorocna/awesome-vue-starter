<template>
  <div
    class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative grid"
    role="alert"
  >
    <strong class="font-bold">Error!</strong>
    <span class="block sm:inline"> {{ error.message }}</span>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: false,
      default: null,
    },
  },
};
</script>
