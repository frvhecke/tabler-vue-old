<template>
  <div class="table-responsive">
    <table class="table text-center">
      <tbody>
        <slot></slot>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ResponsiveTable'
}
</script>