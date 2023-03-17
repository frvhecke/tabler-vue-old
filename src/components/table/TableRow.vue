<template>
  <tr :class="[ { 'bg-light' : background_light }, { 'bg-dark' : background_dark }, { 'text-white' : background_dark } ]">
    <slot></slot>
  </tr>
</template>

<script>
export default {
  name: 'TableRow',
  props: {
    background_light: { default: false, type: Boolean },
    background_dark: { default: false, type: Boolean }
  }
}
</script>