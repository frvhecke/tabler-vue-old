<template>
  <a href="#" class="card card-link card-link-pop">
    <CardWrapper>
      <template #header v-if="header_active">
        <slot name="header"></slot>
      </template>
      <slot></slot>
      <template #footer v-if="footer_active">
        <slot name="footer"></slot>
      </template>
    </CardWrapper>
  </a>
</template>

<script>
import CardWrapper from '@/components/card/CardWrapper.vue'

export default {
  name: 'HoverPopCard',
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