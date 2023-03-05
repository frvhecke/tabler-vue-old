<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="w-100" preserveAspectRatio="none" :width="width" :height="height" :viewBox="viewbox" fill="transparent" :stroke="stroke">
    <line x1="0" y1="0" :x2="width" :y2="height"></line>
    <line x1="0" :y1="height" :x2="width" y2="0"></line>
  </svg>
</template>

<script>
export default {
  name: 'CardPlaceholder',
  props: {
    width: { default: 100, type: Number },
    height: { default: 100, type: Number },
    color: { default: 'b8cef1', type: String }
  },
  computed: {
    viewbox () {
      return "0 0 " + this.width + " " + this.height
    },
    stroke () {
      return 'var(--tblr-border-color, #' + this.color + ')'
    }
  }
}
</script>