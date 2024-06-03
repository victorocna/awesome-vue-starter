<template>
  <NuxtLink to="/">
    <div class="logo mb-12 flex cursor-pointer items-start">
      <img src="/images/logo.png" :alt="sitename" />
    </div>
  </NuxtLink>
</template>

<script>
import config from '~/site.config';

export default {
  name: 'Logo',
  data() {
    return {
      sitename: config.sitename,
    };
  },
};
</script>
