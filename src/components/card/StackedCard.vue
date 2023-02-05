<template>
  <CardWrapper :stacked="true">
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
  name: 'StackedCard',
  components: {
    CardWrapper
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