<template>
  <aside class="navbar navbar-vertical navbar-expand-lg" :class="[ theme_menu_class ]">
    <div class="container-fluid">
      <button class="navbar-toggler" :class="[ { 'collapsed': menu_open } ]" type="button" @click="menu_toggle" :aria-expanded="menu_open">
        <span class="navbar-toggler-icon"></span>
      </button>
      <h1 class="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
        <slot name="logo"></slot>
      </h1>
      <div class="navbar-nav flex-row d-lg-none">
        <slot name="actions"></slot>
      </div>
      <div class="collapse navbar-collapse" :class="[ { 'show': menu_open } ]" id="navbar-menu">
        <ul class="navbar-nav pt-lg-3">
          <slot name="menu"></slot>
        </ul>
      </div>
    </div>
  </aside>
  <header class="navbar navbar-expand-md d-none d-lg-flex d-print-none" :class="[ theme_header_class ]">
    <div class="container-xl">
      <button class="navbar-toggler" type="button" @click="menu_toggle" :aria-expanded="menu_open">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-nav flex-row order-md-last">
        <slot name="header_right"></slot>
      </div>
      <div>
        <slot name="header_left"></slot>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'VerticalHeader',
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
