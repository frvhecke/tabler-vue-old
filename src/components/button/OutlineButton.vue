<template>
  <a class="btn" :class="[ { disabled: disabled }, getColor(), { 'w-100' : full_width }, { 'btn-icon' : !text } ]" @click="click" :title="tooltip">
    <StandardIcon v-if="icon_name" :icon_prefix="icon_prefix" :icon_name="icon_name" :icon_color="icon_color"/>
    <span v-if="text">{{ text }}</span>
  </a>
</template>

<script>
import StandardIcon from '@/components/icon/StandardIcon.vue'

export default {
  name: 'OutlineButton',
  components: {
    StandardIcon
  },
  props: {
    text: { default: '', type: String },
    tooltip: { default: '', type: String },
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
        return 'btn-outline-primary'
      } else if (this.color === 'secondary') {
        return 'btn-outline-secondary'
      } else if (this.color === 'success') {
        return 'btn-outline-success'
      } else if (this.color === 'warning') {
        return 'btn-outline-warning'
      } else if (this.color === 'danger') {
        return 'btn-outline-danger'
      } else if (this.color === 'info') {
        return 'btn-outline-info'
      } else if (this.color === 'light') {
        return 'btn-outline-light'
      } else if (this.color === 'dark') {
        return 'btn-outline-dark'
      } else if (this.color === 'blue') {
        return 'btn-outline-blue'
      } else if (this.color === 'azure') {
        return 'btn-outline-azure'
      } else if (this.color === 'indigo') {
        return 'btn-outline-indigo'
      } else if (this.color === 'purple') {
        return 'btn-outline-purple'
      } else if (this.color === 'pink') {
        return 'btn-outline-pink'
      } else if (this.color === 'red') {
        return 'btn-outline-red'
      } else if (this.color === 'orange') {
        return 'btn-outline-orange'
      } else if (this.color === 'yellow') {
        return 'btn-outline-yellow'
      } else if (this.color === 'lime') {
        return 'btn-outline-lime'
      } else if (this.color === 'green') {
        return 'btn-outline-green'
      } else if (this.color === 'teal') {
        return 'btn-outline-teal'
      } else if (this.color === 'cyan') {
        return 'btn-outline-cyan'
      } else if (this.color === 'facebook') {
        return 'btn-outline-facebook'
      } else if (this.color === 'twitter') {
        return 'btn-outline-twitter'
      } else if (this.color === 'google') {
        return 'btn-outline-google'
      } else if (this.color === 'youtube') {
        return 'btn-outline-youtube'
      } else if (this.color === 'vimeo') {
        return 'btn-outline-vimeo'
      } else if (this.color === 'dribbble') {
        return 'btn-outline-dribbble'
      } else if (this.color === 'github') {
        return 'btn-outline-github'
      } else if (this.color === 'instagram') {
        return 'btn-outline-instagram'
      } else if (this.color === 'pinterest') {
        return 'btn-outline-pinterest'
      } else if (this.color === 'vk') {
        return 'btn-outline-vk'
      } else if (this.color === 'rss') {
        return 'btn-outline-rss'
      } else if (this.color === 'flickr') {
        return 'btn-outline-flickr'
      } else if (this.color === 'bitbucket') {
        return 'btn-outline-bitbucket'
      } else if (this.color === 'tabler') {
        return 'btn-outline-tabler'
      }
      return ''
    }
  }
}
</script>

<style>
  .btn-outline-light {
    color: #1e293b;
    background-color: #f8fafc;
    border-color: #dfe1e3;
  }

  .btn-outline-light:hover {
    background-color: #dfe1e3;
  }
</style>
