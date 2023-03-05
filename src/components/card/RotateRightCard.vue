<template>
  <CardWrapper :background_color="background_color" :text_color="text_color" :text_color_auto="text_color_auto" rotate="right">
    <template #header v-if="header_active">
      <slot name="header"></slot>
    </template>
    <slot></slot>
    <template #footer v-if="footer_active">
      <slot name="footer"></slot>
    </template>
  </CardWrapper>
</template>

<script>
import CardWrapper from '@/components/card/CardWrapper.vue'

export default {
  name: 'RotateRightCard',
  components: {
    CardWrapper
  },
  props: {
    background_color: { default: '', type: String },
    text_color: { default: '', type: String },
    text_color_auto: { default: false, type: Boolean }
  },
  computed: {
    footer_active () {
      return this.$slots.footer
    },
    header_active () {
      return this.$slots.header
    }
  }
}
</script>