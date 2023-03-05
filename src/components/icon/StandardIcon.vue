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
  data: () => ({
    colors: new Array('primary','secondary','success','warning','danger','info','light','dark','blue','azure','indigo','purple','pink','red','orange','yellow','lime','green','teal','cyan','facebook','twitter','google','youtube','vimeo','dribbble','github','instagram','pinterest','vk','rss','flickr','bitbucket','tabler')
  }),
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
      // Return matching text-color or empty if no match
      return this.colors.includes(this.icon_color) ? 'text-' + this.icon_color : ''
    }
  }
}
</script>
