<template>
  <div class="ribbon ribbon-top" :class="[ getBackgroundColor() ]">
    <StandardIcon :icon_name="icon" :icon_color="color" />
  </div>
</template>

<script>
import StandardIcon from '@/components/icon/StandardIcon.vue'

export default {
  name: 'CardRibbonTop',
  props: {
    color: { default: 'white', type: String },
    bg_color: { default: 'yellow', type: String },
    icon: { default: 'star', type: String }
  },
  components: {
    StandardIcon
  },
  methods: {
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