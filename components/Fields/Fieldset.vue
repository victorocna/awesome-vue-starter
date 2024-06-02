<template>
  <fieldset>
    <label v-if="label" :for="name" class="form-label mb-0 w-full cursor-pointer">
      {{ label }}
    </label>
    <slot></slot>
    <div v-if="help" class="form-help text-sm text-secondary">
      {{ help }}
    </div>
  </fieldset>
</template>

<script>
export default {
  name: 'Fieldset',
  props: ['label', 'name', 'help'],
};
</script>
