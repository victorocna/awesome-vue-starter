<template>
  <input type="email" inputmode="email" class="input" v-bind="$attrs" />
</template>

<script>
export default {
  name: 'Email',
  inheritAttrs: false,
};
</script>
