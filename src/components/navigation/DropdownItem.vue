<template>
  <div :class="[ { 'dropend': dropdown_present } ]" @focusout="dropdown_close" tabindex="1">
    <a class="dropdown-item" :class="[ { 'active': active }, { 'active': dropdown_open }, { 'disabled': disabled }, { 'dropdown-toggle': dropdown_present }, { 'show': dropdown_open } ]" @click="click" :title="tooltip" role="button">
      {{text}}
    </a>
    <div v-if="dropdown_present" class="dropdown-menu" :class="[ { 'show': dropdown_open } ]" data-bs-popper="none">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DropdownItem',
  props: {
    text: { default: '', type: String },
    tooltip: { default: '', type: String },
    active: { default: false, type: Boolean },
    disabled: { default: false, type: Boolean },
    href: { default: '', type: String },
    target: { default: '_self', type: String },
    auto_close: { default: true, type: Boolean }
  },
  data: () => ({
    dropdown_open: false
  }),
  computed: {
    dropdown_present () {
      return this.$slots.default !== undefined
    }
  },
  methods: {
    click (e) {
      console.log('CLICKED')
      if (this.dropdown_present) {
        this.dropdown_open = !this.dropdown_open
      } else if (this.href.value === '') {
        e.preventDefault()
        this.$emit('click')
      } else {
        window.open(this.href, this.target, 'noreferrer')
      }
    },
    dropdown_close (e) {
      if (!e.currentTarget.contains(event.relatedTarget) && this.auto_close) {
        this.dropdown_open = false
      }
    }
  }
}
</script>
