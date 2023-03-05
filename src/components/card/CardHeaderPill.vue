<template>
  <li class="nav-item" :class="[ { 'ms-auto' : sticky_right } ]">
    <a class="nav-link" :class="[ { disabled: disabled }, { 'active': active } ]" @click="click" :title="tooltip">
      <StandardIcon v-if="icon_name" :icon_prefix="icon_prefix" :icon_name="icon_name" :icon_color="icon_color" class="me-2" />
      <span v-if="text">{{ text }}</span>
    </a>
  </li>
</template>

<script>
import StandardIcon from '@/components/icon/StandardIcon.vue'

export default {
  name: 'CardHeaderTab',
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
    sticky_right: { default: false, type: Boolean },
  },
  methods: {
    click (e) {
      if (this.href.value === '') {
        e.preventDefault()
        this.$emit('click')
      } else {
        window.open(this.href, this.target, 'noreferrer')
      }
    }
  }
}
</script>