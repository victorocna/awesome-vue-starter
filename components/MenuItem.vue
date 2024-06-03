<template>
  <NuxtLink
    :to="href"
    :class="mergedClassNames"
  >
    <slot></slot>
  </NuxtLink>
</template>

<script>
import { classnames } from '../lib';

export default {
  name: 'MenuItem',
  props: ['href', 'level'],
  computed: {
    isActive() {
      return this.$route.path === this.href;
    },
    mergedClassNames() {
      return classnames(
        'menu-item cursor-pointer px-8 py-2 hover:bg-gray-100 text-gray-900 no-underline',
        Number(this.level) === 1 ? 'pl-8' : 'pl-12',
        this.isActive ? 'font-semibold text-primary' : ''
      );
    },
  },
};
</script>
