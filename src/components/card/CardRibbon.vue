<template>
  <div class="ribbon" :class="[ getBackgroundColor() ]">
    <div :class="[ getColor() ]">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardRibbon',
  props: {
    color: { default: 'white', type: String },
    bg_color: { default: 'danger', type: String },
    text: { default: '', type: String }
  },
  methods: {
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
      } else if (this.icon_color === 'white') {
        return 'text-white'
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
    },
    getBackgroundColor () {
      if (this.bg_color === 'primary') {
        return 'bg-primary'
      } else if (this.bg_color === 'secondary') {
        return 'bg-secondary'
      } else if (this.bg_color === 'success') {
        return 'bg-success'
      } else if (this.bg_color === 'warning') {
        return 'bg-warning'
      } else if (this.bg_color === 'danger') {
        return 'bg-danger'
      } else if (this.bg_color === 'info') {
        return 'bg-info'
      } else if (this.bg_color === 'light') {
        return 'bg-light'
      } else if (this.bg_color === 'dark') {
        return 'bg-dark'
      } else if (this.bg_color === 'blue') {
        return 'bg-blue'
      } else if (this.bg_color === 'azure') {
        return 'bg-azure'
      } else if (this.bg_color === 'indigo') {
        return 'bg-indigo'
      } else if (this.bg_color === 'purple') {
        return 'bg-purple'
      } else if (this.bg_color === 'pink') {
        return 'bg-pink'
      } else if (this.bg_color === 'red') {
        return 'bg-red'
      } else if (this.bg_color === 'orange') {
        return 'bg-orange'
      } else if (this.bg_color === 'yellow') {
        return 'bg-yellow'
      } else if (this.bg_color === 'lime') {
        return 'bg-lime'
      } else if (this.bg_color === 'green') {
        return 'bg-green'
      } else if (this.bg_color === 'teal') {
        return 'bg-teal'
      } else if (this.bg_color === 'cyan') {
        return 'bg-cyan'
      } else if (this.bg_color === 'white') {
        return 'bg-white'
      } else if (this.bg_color === 'facebook') {
        return 'bg-facebook'
      } else if (this.bg_color === 'twitter') {
        return 'bg-twitter'
      } else if (this.bg_color === 'google') {
        return 'bg-google'
      } else if (this.bg_color === 'youtube') {
        return 'bg-youtube'
      } else if (this.bg_color === 'vimeo') {
        return 'bg-vimeo'
      } else if (this.bg_color === 'dribbble') {
        return 'bg-dribbble'
      } else if (this.bg_color === 'github') {
        return 'bg-github'
      } else if (this.bg_color === 'instagram') {
        return 'bg-instagram'
      } else if (this.bg_color === 'pinterest') {
        return 'bg-pinterest'
      } else if (this.bg_color === 'vk') {
        return 'bg-vk'
      } else if (this.bg_color === 'rss') {
        return 'bg-rss'
      } else if (this.bg_color === 'flickr') {
        return 'bg-flickr'
      } else if (this.bg_color === 'bitbucket') {
        return 'bg-bitbucket'
      } else if (this.bg_color === 'tabler') {
        return 'bg-tabler'
      }
      return ''
    }
  }
}
</script>