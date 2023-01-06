<template>
  <li class="nav-item" :class="[ { 'active': active }, { 'dropdown': dropdown_present } ]" @focusout="dropdown_close" tabindex="0">
    <a class="nav-link" @click="click" :title="tooltip" :class="[ { 'disabled': disabled }, { 'dropdown-toggle': dropdown_present }, { 'show': dropdown_open } ]" role="button">
      <span v-if="icon_name" class="nav-link-icon d-md-none d-lg-inline-block">
        <StandardIcon :icon_prefix="icon_prefix" :icon_name="icon_name" :icon_color="icon_color" />
      </span>
      <span class="nav-link-title">
        {{text}}
      </span>
      <span v-if="badge_text" class="badge bg-red">{{badge_text}}</span>
    </a>
    <div v-if="dropdown_present" class="dropdown-menu" :class="[ { 'show': dropdown_open } ]" data-bs-popper="none">
      <slot></slot>
    </div>
  </li>
</template>

<script>
import StandardIcon from '@/components/icon/StandardIcon.vue'

export default {
  name: 'NavItem',
  components: {
    StandardIcon
  },
  props: {
    text: { default: '', type: String },
    tooltip: { default: '', type: String },
    active: { default: false, type: Boolean },
    disabled: { default: false, type: Boolean },
    icon_prefix: { default: 'ti', type: String },
    icon_name: { default: '', type: String },
    icon_color: { default: '', type: String },
    href: { default: '', type: String },
    target: { default: '_self', type: String },
    badge_text: { default: '', type: String }
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
      if (!e.currentTarget.contains(event.relatedTarget)) {
        this.dropdown_open = false
      }
    }
  }
}
</script>
