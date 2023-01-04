<template>
  <h3 v-if="text" class="card-title">
    {{text}}
  </h3>
</template>

<script>
export default {
  name: 'CardBodyTitle',
  props: {
    text: { default: '', type: String }
  }
}
</script>
