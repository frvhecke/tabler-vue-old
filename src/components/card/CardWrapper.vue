<template>
  <div class="card text-left" :class="[ { 'card-borderless' : !border }, { 'card-active' : active }, { 'card-inactive' : inactive }, { 'card-stacked' : stacked }, { 'card-rotate-right' : rotate_right }, { 'card-rotate-left' : rotate_left } ]">
    <div v-if="status_top" class="card-status-top" :class="[ status_color_class ]"></div>
    <div v-if="status_bottom" class="card-status-bottom" :class="[ status_color_class ]"></div>
    <div v-if="status_side" class="card-status-start" :class="[ status_color_class ]"></div>
    <slot></slot>
    <div v-if="progress" class="progress progress-sm card-progress">
      <div class="progress-bar" :style="progress_style" role="progressbar" :aria-valuenow="progress" aria-valuemin="0" aria-valuemax="100">
        <span class="visually-hidden">{{progress}} Complete</span>
      </div>
    </div>
    <div v-if="image_bottom" class="card-img-bottom img-responsive img-responsive-16by9" :style="image_url_style"></div>
  </div>
</template>

<script>
export default {
  name: 'CardWrapper',
  props: {
    border: { default: true, type: Boolean },
    active: { default: false, type: Boolean },
    inactive: { default: false, type: Boolean },
    progressbar: { default: false, type: Boolean },
    progress: { default: 0, type: Number },
    stacked: { default: false, type: Boolean },
    status: { default: '', type: String },
    status_color: { default: '', type: String },
    rotate: { default: '', type: String },
    image: { default: '', type: String },
    image_url: { default: '', type: String }
  },
  computed: {
    footer_active () {
      return this.$slots.footer
    },
    header_active () {
      return this.$slots.header
    },
    progress_style () {
      return 'width: ' + this.progress + '%'
    },
    status_top () {
      return this.status === 'top'
    },
    status_bottom () {
      return this.status === 'bottom'
    },
    status_side () {
      return this.status === 'side'
    },
    status_color_class () {
      if (this.status_color === 'secondary') {
        return 'bg-secondary'
      } else if (this.status_color === 'success') {
        return 'bg-success'
      } else if (this.status_color === 'warning') {
        return 'bg-warning'
      } else if (this.status_color === 'danger') {
        return 'bg-danger'
      } else if (this.status_color === 'info') {
        return 'bg-info'
      } else if (this.status_color === 'light') {
        return 'bg-light'
      } else if (this.status_color === 'dark') {
        return 'bg-dark'
      } else if (this.status_color === 'blue') {
        return 'bg-blue'
      } else if (this.status_color === 'azure') {
        return 'bg-azure'
      } else if (this.status_color === 'indigo') {
        return 'bg-indigo'
      } else if (this.status_color === 'purple') {
        return 'bg-purple'
      } else if (this.status_color === 'pink') {
        return 'bg-pink'
      } else if (this.status_color === 'red') {
        return 'bg-red'
      } else if (this.status_color === 'orange') {
        return 'bg-orange'
      } else if (this.status_color === 'yellow') {
        return 'bg-yellow'
      } else if (this.status_color === 'lime') {
        return 'bg-lime'
      } else if (this.status_color === 'green') {
        return 'bg-green'
      } else if (this.status_color === 'teal') {
        return 'bg-teal'
      } else if (this.status_color === 'cyan') {
        return 'bg-cyan'
      } else if (this.status_color === 'facebook') {
        return 'bg-facebook'
      } else if (this.status_color === 'twitter') {
        return 'bg-twitter'
      } else if (this.status_color === 'google') {
        return 'bg-google'
      } else if (this.status_color === 'youtube') {
        return 'bg-youtube'
      } else if (this.status_color === 'vimeo') {
        return 'bg-vimeo'
      } else if (this.status_color === 'dribbble') {
        return 'bg-dribbble'
      } else if (this.status_color === 'github') {
        return 'bg-github'
      } else if (this.status_color === 'instagram') {
        return 'bg-instagram'
      } else if (this.status_color === 'pinterest') {
        return 'bg-pinterest'
      } else if (this.status_color === 'vk') {
        return 'bg-vk'
      } else if (this.status_color === 'rss') {
        return 'bg-rss'
      } else if (this.status_color === 'flickr') {
        return 'bg-flickr'
      } else if (this.status_color === 'bitbucket') {
        return 'bg-bitbucket'
      } else if (this.status_color === 'tabler') {
        return 'bg-tabler'
      }
      return 'bg-primary'
    },
    rotate_right () {
      return this.rotate === 'right'
    },
    rotate_left () {
      return this.rotate === 'left'
    },
    image_bottom () {
      return this.image === 'bottom'
    },
    image_url_style () {
      return 'background-image: url(' + this.image_url + ')'
    }
  }
}
</script>

<style>
  .text-left {
    text-align: left;
  }
</style>
