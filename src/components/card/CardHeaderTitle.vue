<template>
  <h3 class="card-title">
    {{title}}
    <span v-if="subtitle" class="card-subtitle">
      {{subtitle}}
    </span>
  </h3>
</template>

<script>
export default {
  name: 'CardHeaderTitle',
  props: {
    title: { default: '', type: String },
    subtitle: { default: '', type: String }
  }
}
</script>
