<template>
  <h3 class="card-title">
    {{text}}
  </h3>
</template>

<script>
export default {
  name: 'CardHeaderTitle',
  props: {
    text: { default: '', type: String }
  }
}
</script>
