<template>
  <div class="relative">
    <input :type="type" class="input" v-bind="$attrs" />
    <button
      type="button"
      class="absolute right-0 p-2 outline-none"
      tabIndex="-1"
      @click="toggle"
    >
      <i :class="action"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Password',
  inheritAttrs: false,
  data() {
    return {
      showPassword: false,
    };
  },
  computed: {
    type() {
      return this.showPassword ? 'text' : 'password';
    },
    action() {
      return this.showPassword ? 'far fa-eye text-primary' : 'far fa-eye-slash text-primary';
    },
  },
  methods: {
    toggle() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>
