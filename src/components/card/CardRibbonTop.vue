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
  data: () => ({
    colors: new Array('primary','secondary','success','warning','danger','info','light','dark','blue','azure','indigo','purple','pink','red','orange','yellow','lime','green','teal','cyan','facebook','twitter','google','youtube','vimeo','dribbble','github','instagram','pinterest','vk','rss','flickr','bitbucket','tabler')
  }),
  components: {
    StandardIcon
  },
  methods: {
    getBackgroundColor () {
      // Return matching bg-color or empty if no match
      return this.colors.includes(this.bg_color) ? 'bg-' + this.bg_color : ''
    }
  }
}
</script>