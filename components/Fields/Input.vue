<template>
  <input type="text" inputmode="text" class="input" v-bind="$attrs" />
</template>

<script>
export default {
  name: 'Input',
  inheritAttrs: false,
};
</script>
