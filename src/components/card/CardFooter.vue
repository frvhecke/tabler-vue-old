<template>
  <div class="card-footer" :class="[ { 'card-footer-transparent' : transparent } ]">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CardFooter',
  props: {
    transparent: { default: false, type: Boolean }
  }
}
</script>