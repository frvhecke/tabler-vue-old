<template>
  <div class="row" :class="[ { 'row-cards' : row_cards } ]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GridRow',
  props: {
    row_cards: { default: false, type: Boolean }
  }
}
</script>
