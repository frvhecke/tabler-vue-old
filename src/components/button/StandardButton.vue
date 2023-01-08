<template>
  <a class="btn" :class="[ { 'disabled': disabled }, { 'active': active }, getColor(), { 'w-100' : full_width }, { 'btn-icon' : !text } ]" @click="click" :title="tooltip">
    <StandardIcon v-if="icon_name" :icon_prefix="icon_prefix" :icon_name="icon_name" :icon_color="icon_color" />
    <span v-if="text">{{ text }}</span>
  </a>
</template>

<script>
import StandardIcon from '@/components/icon/StandardIcon.vue'

export default {
  name: 'StandardButton',
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
        return 'btn-primary'
      } else if (this.color === 'secondary') {
        return 'btn-secondary'
      } else if (this.color === 'success') {
        return 'btn-success'
      } else if (this.color === 'warning') {
        return 'btn-warning'
      } else if (this.color === 'danger') {
        return 'btn-danger'
      } else if (this.color === 'info') {
        return 'btn-info'
      } else if (this.color === 'light') {
        return 'btn-light'
      } else if (this.color === 'dark') {
        return 'btn-dark'
      } else if (this.color === 'blue') {
        return 'btn-blue'
      } else if (this.color === 'azure') {
        return 'btn-azure'
      } else if (this.color === 'indigo') {
        return 'btn-indigo'
      } else if (this.color === 'purple') {
        return 'btn-purple'
      } else if (this.color === 'pink') {
        return 'btn-pink'
      } else if (this.color === 'red') {
        return 'btn-red'
      } else if (this.color === 'orange') {
        return 'btn-orange'
      } else if (this.color === 'yellow') {
        return 'btn-yellow'
      } else if (this.color === 'lime') {
        return 'btn-lime'
      } else if (this.color === 'green') {
        return 'btn-green'
      } else if (this.color === 'teal') {
        return 'btn-teal'
      } else if (this.color === 'cyan') {
        return 'btn-cyan'
      } else if (this.color === 'facebook') {
        return 'btn-facebook'
      } else if (this.color === 'twitter') {
        return 'btn-twitter'
      } else if (this.color === 'google') {
        return 'btn-google'
      } else if (this.color === 'youtube') {
        return 'btn-youtube'
      } else if (this.color === 'vimeo') {
        return 'btn-vimeo'
      } else if (this.color === 'dribbble') {
        return 'btn-dribbble'
      } else if (this.color === 'github') {
        return 'btn-github'
      } else if (this.color === 'instagram') {
        return 'btn-instagram'
      } else if (this.color === 'pinterest') {
        return 'btn-pinterest'
      } else if (this.color === 'vk') {
        return 'btn-vk'
      } else if (this.color === 'rss') {
        return 'btn-rss'
      } else if (this.color === 'flickr') {
        return 'btn-flickr'
      } else if (this.color === 'bitbucket') {
        return 'btn-bitbucket'
      } else if (this.color === 'tabler') {
        return 'btn-tabler'
      }
      return ''
    }
  }
}
</script>

<style>
  .btn-light {
    color: #1e293b;
    background-color: #f8fafc;
  }

  .btn-light:hover {
    background-color: #dfe1e3;
  }
</style>
