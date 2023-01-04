<template>
  <i class="icon" :class="[ iconClass, getColor() ]"></i>
</template>

<script>
export default {
  name: 'StandardIcon',
  props: {
    icon_prefix: { default: 'ti', type: String },
    icon_name: { default: '', type: String },
    icon_color: { default: '', type: String }
  },
  data: () => ({ }),
  computed: {
    iconClass () {
      const iconClass = {}
      iconClass[`${this.icon_prefix}`] = true
      iconClass[`${this.icon_prefix}-${this.icon_name}`] = true
      return iconClass
    }
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
      if (this.icon_color === 'primary') {
        return 'text-primary'
      } else if (this.icon_color === 'secondary') {
        return 'text-secondary'
      } else if (this.icon_color === 'success') {
        return 'text-success'
      } else if (this.icon_color === 'warning') {
        return 'text-warning'
      } else if (this.icon_color === 'danger') {
        return 'text-danger'
      } else if (this.icon_color === 'info') {
        return 'text-info'
      } else if (this.icon_color === 'light') {
        return 'text-light'
      } else if (this.icon_color === 'dark') {
        return 'text-dark'
      } else if (this.icon_color === 'blue') {
        return 'text-blue'
      } else if (this.icon_color === 'azure') {
        return 'text-azure'
      } else if (this.icon_color === 'indigo') {
        return 'text-indigo'
      } else if (this.icon_color === 'purple') {
        return 'text-purple'
      } else if (this.icon_color === 'pink') {
        return 'text-pink'
      } else if (this.icon_color === 'red') {
        return 'text-red'
      } else if (this.icon_color === 'orange') {
        return 'text-orange'
      } else if (this.icon_color === 'yellow') {
        return 'text-yellow'
      } else if (this.icon_color === 'lime') {
        return 'text-lime'
      } else if (this.icon_color === 'green') {
        return 'text-green'
      } else if (this.icon_color === 'teal') {
        return 'text-teal'
      } else if (this.icon_color === 'cyan') {
        return 'text-cyan'
      } else if (this.icon_color === 'facebook') {
        return 'text-facebook'
      } else if (this.icon_color === 'twitter') {
        return 'text-twitter'
      } else if (this.icon_color === 'google') {
        return 'text-google'
      } else if (this.icon_color === 'youtube') {
        return 'text-youtube'
      } else if (this.icon_color === 'vimeo') {
        return 'text-vimeo'
      } else if (this.icon_color === 'dribbble') {
        return 'text-dribbble'
      } else if (this.icon_color === 'github') {
        return 'text-github'
      } else if (this.icon_color === 'instagram') {
        return 'text-instagram'
      } else if (this.icon_color === 'pinterest') {
        return 'text-pinterest'
      } else if (this.icon_color === 'vk') {
        return 'text-vk'
      } else if (this.icon_color === 'rss') {
        return 'text-rss'
      } else if (this.icon_color === 'flickr') {
        return 'text-flickr'
      } else if (this.icon_color === 'bitbucket') {
        return 'text-bitbucket'
      } else if (this.icon_color === 'tabler') {
        return 'text-tabler'
      }
      return ''
    }
  }
}
</script>
