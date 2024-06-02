<template>
  <div class="flex items-center button full primary">
    <button type="submit" :disabled="isLoading" v-bind="$attrs">
      <slot></slot>
    </button>
    <img v-if="isLoading" src="/icons/loading.gif" alt="loading" class="mx-1 w-6" />
  </div>
</template>

<script>
export default {
  name: 'Submit',
  inheritAttrs: false,
  props: ['isLoading'],
};
</script>
