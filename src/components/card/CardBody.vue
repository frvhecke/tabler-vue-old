<template>
  <div class="card-body" :class="[ { 'p-0' : !padding } ]">
    <div><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: 'CardBody',
  props: {
    padding: { default: true, type: Boolean }
  }
}
</script>