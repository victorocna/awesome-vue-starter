<template>
  <div
    class="ml-2 inline-block rounded border bg-white py-1 px-2 text-primary xl:hidden"
    aria-label="Open menu"
  >
    <label for="menu" class="mb-0 flex cursor-pointer items-center text-primary">
      <i class="fa-solid fa-bars w-6 text-lg"></i>
      <span class="text-sm">Menu</span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'MenuButton',
};
</script>
