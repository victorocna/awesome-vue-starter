<template>
  <Layout title="Dashboard">
    <div class="prose max-w-full">
      <h2 class="mb-4 font-semibold">Hello world</h2>
      <p>This is a secured admin page. Modify it as you wish.</p>
    </div>
    <Tabs :tabs="['Tab1', 'Tab2', 'Tab3']" @tab-selected="tabSelected">
      <template #Tab1>
        <h1>Tab 1 Content</h1>
        <p>This is the content for Tab 1.</p>
      </template>
      <template #Tab2>
        <h1>Tab 2 Content</h1>
        <p>This is the content for Tab 2.</p>
      </template>
      <template #Tab3>
        <h1>Tab 3 Content</h1>
        <p>This is the content for Tab 3.</p>
      </template>
    </Tabs>
  </Layout>
</template>
