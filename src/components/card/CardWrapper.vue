<template>
  <div class="card text-left" :class="[ { 'card-borderless' : !border }, { 'card-active' : active }, { 'card-inactive' : inactive }, { 'card-stacked' : stacked }, { 'card-rotate-right' : rotate_right }, { 'card-rotate-left' : rotate_left }, background_color_class, text_color_class ]">
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
    image_url: { default: '', type: String },
    background_color: { default: '', type: String },
    text_color: { default: '', type: String },
    text_color_auto: { default: false, type: Boolean }
  },
  data: () => ({
    colors: new Array('primary','secondary','success','warning','danger','info','light','dark','blue','azure','indigo','purple','pink','red','orange','yellow','lime','green','teal','cyan','facebook','twitter','google','youtube','vimeo','dribbble','github','instagram','pinterest','vk','rss','flickr','bitbucket','tabler')
  }),
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
      // Return matching bg-color or default if no match
      return this.colors.includes(this.status_color) ? 'bg-' + this.status_color : 'bg-primary'
    },
    background_color_class () {
      var light = false
      var color = this.background_color
      if(color.includes('-lt')) {
        light = true
        color = color.split('-')[0]
      }
      if(this.colors.includes(color)) {
          return light ? 'bg-' + color + '-lt' : 'bg-' + color
      } else {
        return ''
      }
    },
    text_color_class () {
      if(this.text_color_auto) {
        if(this.background_color_class !== '') {
          return this.background_color_class.replace('bg', 'text') + "-fg"
        } else {
          return ''
        }
      } else {
        return this.colors.includes(this.text_color) ? 'text-' + this.status_color : ''
      }
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
