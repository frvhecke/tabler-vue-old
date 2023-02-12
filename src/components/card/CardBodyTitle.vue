<template>
  <h3 v-if="title" class="card-title">
    {{title}}
  </h3>
</template>

<script>
export default {
  name: 'CardBodyTitle',
  props: {
    title: { default: '', type: String }
  }
}
</script>
