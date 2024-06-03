<template>
  <input id="menu" type="checkbox" class="hidden" />
  <label for="menu" class="backdrop fixed inset-0 h-screen w-screen bg-gray-300 lg:hidden"></label>
  <nav class="nav-menu overflow-y-auto border-r border-gray-200 bg-white">
    <div class="flex flex-col py-8 lg:sticky lg:top-0">
      <div class="px-8">
        <Logo />
      </div>
      <Pages />
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Menu'
};
</script>
