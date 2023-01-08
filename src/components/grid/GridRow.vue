<template>
  <div class="row" :class="[ { 'row-cards' : row_cards }, margin_top, margin_bottom, gutter, align_items_class ]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GridRow',
  props: {
    row_cards: { default: false, type: Boolean },
    mt: { default: undefined, type: Number },
    mb: { default: undefined, type: Number },
    g: { default: undefined, type: Number },
    align_items: { default: undefined, type: String } // 'start', 'center', 'end', 'stretch'
  },
  computed: {
    margin_top () {
      if (this.mt === 0) return 'mt-0'
      else if (this.mt > 0) return 'mt-' + this.mt
      else if (this.mt < 0) return 'mt-n' + Math.abs(this.mt)
      else return ''
    },
    margin_bottom () {
      if (this.mb === 0) return 'mb-0'
      else if (this.mb > 0) return 'mb-' + this.mb
      else if (this.mb < 0) return 'mb-n' + Math.abs(this.mb)
      else return ''
    },
    gutter () {
      if (this.g === 0) return 'g-0'
      else if (this.g > 0) return 'g-' + this.g
      else if (this.g < 0) return 'g-n' + Math.abs(this.g)
      else return ''
    },
    align_items_class () {
      if (this.align_items === undefined) return ''
      else if(this.align_items === 'start') return 'align-items-start'
      else if(this.align_items === 'center') return 'align-items-center'
      else if(this.align_items === 'end') return 'align-items-end'
      else if(this.align_items === 'stretch') return 'align-items-stretch'
      else return ''
    }
  }
}
</script>
