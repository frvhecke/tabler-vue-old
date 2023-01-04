<template>
  <h3 v-if="text" class="card-subtitle">
    {{text}}
  </h3>
</template>

<script>
export default {
  name: 'CardBodySubtitle',
  props: {
    text: { default: '', type: String }
  }
}
</script>
