<template>
  <header class="navbar navbar-expand-md navbar-light d-print-none">
    <div class="container-xl">
      <button class="navbar-toggler" :class="[ { 'collapsed': menu_open } ]" type="button" @click="menu_toggle" :aria-expanded="menu_open">
        <span class="navbar-toggler-icon"></span>
      </button>
      <h1 class="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
        <slot name="logo"></slot>
      </h1>
      <div class="navbar-nav flex-row order-md-last">
        <slot name="header_right"></slot>
      </div>
      <div class="collapse navbar-collapse" :class="[ { 'show': menu_open } ]">
        <div class="d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center">
          <ul class="navbar-nav">
            <slot name="menu"></slot>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'CondensedHeader',
  props: {
    theme_menu: { default: 'dark', type: String },
    theme_header: { default: 'light', type: String }
  },
  data: () => ({
    menu_open: false
  }),
  computed: {
    theme_menu_class () {
      return this.theme_menu !== 'dark' ? 'navbar-light' : 'navbar-dark'
    },
    theme_header_class () {
      return this.theme_header !== 'dark' ? 'navbar-light' : 'navbar-dark'
    }
  },
  methods: {
    menu_toggle () {
      this.menu_open = !this.menu_open
    }
  }
}
</script>
