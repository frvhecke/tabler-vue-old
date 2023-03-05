<template>
  <a class="btn btn-pill" :class="[ { disabled: disabled }, { 'active': active }, getColor(), { 'w-100' : full_width }, { 'btn-icon' : !text } ]" @click="click" :title="tooltip">
    <StandardIcon v-if="icon_name" :icon_prefix="icon_prefix" :icon_name="icon_name" :icon_color="icon_color" />
    <span v-if="text">{{ text }}</span>
  </a>
</template>

<script>
import StandardIcon from '@/components/icon/StandardIcon.vue'

export default {
  name: 'PillButton',
  components: {
    StandardIcon
  },
  data: () => ({
    colors: new Array('primary','secondary','success','warning','danger','info','light','dark','blue','azure','indigo','purple','pink','red','orange','yellow','lime','green','teal','cyan','facebook','twitter','google','youtube','vimeo','dribbble','github','instagram','pinterest','vk','rss','flickr','bitbucket','tabler','link')
  }),
  props: {
    text: { default: '', type: String },
    tooltip: { default: '', type: String },
    active: { default: false, type: Boolean },
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
      // Return matching btn-color or default if no match
      return this.colors.includes(this.color) ? 'btn-' + this.color : ''
    }
  }
}
</script>
