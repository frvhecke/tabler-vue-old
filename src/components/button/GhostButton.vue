<template>
  <a class="btn" :class="[ { disabled: disabled }, { 'active': active }, getColor(), { 'w-100' : full_width }, { 'btn-icon' : !text } ]" @click="click" :title="tooltip">
    <StandardIcon v-if="icon_name" :icon_prefix="icon_prefix" :icon_name="icon_name" :icon_color="icon_color" />
    <span v-if="text">{{ text }}</span>
  </a>
</template>

<script>
import StandardIcon from '@/components/icon/StandardIcon.vue'

export default {
  name: 'GhostButton',
  components: {
    StandardIcon
  },
  props: {
    text: { default: '', type: String },
    tooltip: { default: '', type: String },
    active: { default: false, type: Boolean },
    disabled: { default: false, type: Boolean },
    color: { default: 'primary', type: String },
    icon_prefix: { default: 'ti', type: String },
    icon_name: { default: '', type: String },
    icon_color: { default: '', type: String },
    full_width: { default: false, type: Boolean },
    href: { default: '', type: String },
    target: { default: '_self', type: String }
  },
  methods: {
    click (e) {
      if (this.href.value === '') {
        e.preventDefault()
        this.$emit('click')
      } else {
        window.open(this.href, this.target, 'noreferrer')
      }
    },
    getColor () {
      if (this.color === 'primary') {
        return 'btn-ghost-primary'
      } else if (this.color === 'secondary') {
        return 'btn-ghost-secondary'
      } else if (this.color === 'success') {
        return 'btn-ghost-success'
      } else if (this.color === 'warning') {
        return 'btn-ghost-warning'
      } else if (this.color === 'danger') {
        return 'btn-ghost-danger'
      } else if (this.color === 'info') {
        return 'btn-ghost-info'
      } else if (this.color === 'light') {
        return 'btn-ghost-light'
      } else if (this.color === 'dark') {
        return 'btn-ghost-dark'
      } else if (this.color === 'blue') {
        return 'btn-ghost-blue'
      } else if (this.color === 'azure') {
        return 'btn-ghost-azure'
      } else if (this.color === 'indigo') {
        return 'btn-ghost-indigo'
      } else if (this.color === 'purple') {
        return 'btn-ghost-purple'
      } else if (this.color === 'pink') {
        return 'btn-ghost-pink'
      } else if (this.color === 'red') {
        return 'btn-ghost-red'
      } else if (this.color === 'orange') {
        return 'btn-ghost-orange'
      } else if (this.color === 'yellow') {
        return 'btn-ghost-yellow'
      } else if (this.color === 'lime') {
        return 'btn-ghost-lime'
      } else if (this.color === 'green') {
        return 'btn-ghost-green'
      } else if (this.color === 'teal') {
        return 'btn-ghost-teal'
      } else if (this.color === 'cyan') {
        return 'btn-ghost-cyan'
      } else if (this.color === 'facebook') {
        return 'btn-ghost-facebook'
      } else if (this.color === 'twitter') {
        return 'btn-ghost-twitter'
      } else if (this.color === 'google') {
        return 'btn-ghost-google'
      } else if (this.color === 'youtube') {
        return 'btn-ghost-youtube'
      } else if (this.color === 'vimeo') {
        return 'btn-ghost-vimeo'
      } else if (this.color === 'dribbble') {
        return 'btn-ghost-dribbble'
      } else if (this.color === 'github') {
        return 'btn-ghost-github'
      } else if (this.color === 'instagram') {
        return 'btn-ghost-instagram'
      } else if (this.color === 'pinterest') {
        return 'btn-ghost-pinterest'
      } else if (this.color === 'vk') {
        return 'btn-ghost-vk'
      } else if (this.color === 'rss') {
        return 'btn-ghost-rss'
      } else if (this.color === 'flickr') {
        return 'btn-ghost-flickr'
      } else if (this.color === 'bitbucket') {
        return 'btn-ghost-bitbucket'
      } else if (this.color === 'tabler') {
        return 'btn-ghost-tabler'
      }
      return ''
    }
  }
}
</script>
