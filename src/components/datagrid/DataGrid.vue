<template>
  <div class="datagrid">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'DataGrid',
  props: {
    title: { default: '', type: String }
  }
}
</script>