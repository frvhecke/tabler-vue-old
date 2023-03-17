<template>
  <div class="avatar" :class="[ background_color_class, text_color_class, { 'bg-transparent' : background_transparent } ]">
    {{text}}
  </div>
</template>

<script>

export default {
  name: 'TextAvatar',
  data: () => ({
    colors: new Array('primary','secondary','success','warning','danger','info','light','dark','muted','white','blue','azure','indigo','purple','pink','red','orange','yellow','lime','green','teal','cyan','facebook','twitter','google','youtube','vimeo','dribbble','github','instagram','pinterest','vk','rss','flickr','bitbucket','tabler','link')
  }),
  props: {
    text: { default: '', type: String },
    background_color: { default: '', type: String },
    background_transparent: { default: false, type: Boolean },
    text_color: { default: '', type: String },
    text_color_auto: { default: false, type: Boolean }
  },
  computed: {
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
        return this.colors.includes(this.text_color) ? 'text-' + this.text_color : ''
      }
    }
  }
}
</script>