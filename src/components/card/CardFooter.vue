<template>
  <div class="card-footer" :class="[ { 'card-footer-transparent' : transparent } ]">
    <div class="d-flex" v-if="left_active || right_active">
      <div v-if="left_active">
        <slot name="left"></slot>
      </div>
      <div class="ms-auto" v-if="right_active">
        <slot name="right"></slot>
      </div>
    </div>
    <div v-if="default_active">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardFooter',
  props: {
    transparent: { default: false, type: Boolean }
  },
  computed: {
    left_active () {
      return this.$slots.left
    },
    right_active () {
      return this.$slots.right
    },
    default_active () {
      return this.$slots.default
    }
  }
}
</script>