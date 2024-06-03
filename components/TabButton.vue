<template>
  <button :class="{ active: isActive }" @click="$emit('click')">
    {{ tab }}
  </button>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      required: true
    },
    tab: {
      type: String,
      required: true
    }
  }
};
</script>
