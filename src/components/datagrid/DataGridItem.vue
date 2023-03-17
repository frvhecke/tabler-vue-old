<template>
  <div class="datagrid-item">
    <div class="datagrid-title">{{title}}</div>
    <div class="datagrid-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DataGridItem',
  props: {
    title: { default: '', type: String }
  }
}
</script>