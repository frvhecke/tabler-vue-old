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
  data: () => ({
    colors: new Array('primary','secondary','success','warning','danger','info','light','dark','blue','azure','indigo','purple','pink','red','orange','yellow','lime','green','teal','cyan','facebook','twitter','google','youtube','vimeo','dribbble','github','instagram','pinterest','vk','rss','flickr','bitbucket','tabler')
  }),
  methods: {
    getColor () {
      // Return matching text-color or empty if no match
      return this.colors.includes(this.color) ? 'text-' + this.color : ''
    },
    getBackgroundColor () {
      // Return matching bg-color or empty if no match
      return this.colors.includes(this.bg_color) ? 'bg-' + this.bg_color : ''
    }
  }
}
</script>