<template>
  <div>
    <div class="tabs">
      <TabButton
        v-for="tab in tabs"
        :key="tab"
        :is-active="tab === currentTab"
        :tab="tab"
        @click="selectTab(tab)"
      />
    </div>
    <div class="tab-content">
      <slot :name="currentTab"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentTab: this.tabs[0]
    };
  },
  methods: {
    selectTab(tab) {
      this.currentTab = tab;
      this.$emit('tab-selected', tab);
    }
  }
}
</script>
