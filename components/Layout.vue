<template>
  <div class="flex min-h-screen bg-gray-100 font-body text-sm">
    <Menu />
    <main class="max w-full gap-4 p-4 lg:col-span-5 lg:p-8 xl:px-12">
      <div class="mb-12 flex items-center">
        <div class="flex flex-1">
          <h3 class="text-2xl font-semibold">{{ title }}</h3>
        </div>
      </div>
      <div class="grid gap-4">
        <slot></slot>
      </div>
    </main>
  </div>
</template>

<script>

export default {
  name: 'Layout',
  props: ['title'],
};
</script>
