<template>
  <CardWrapper :background_color="background_color" :text_color="text_color" :text_color_auto="text_color_auto">
    <div class="img-responsive img-responsive-21x9 card-img-top" :style="image_style"></div>
    <slot></slot>
  </CardWrapper>
</template>

<script>
import CardWrapper from '@/components/card/CardWrapper.vue'

export default {
  name: 'ImageTopCard',
  components: {
    CardWrapper
  },
  props: {
    background_color: { default: '', type: String },
    text_color: { default: '', type: String },
    text_color_auto: { default: false, type: Boolean },
    image_url: { default: '', type: String },
    image_alt: { default: '', type: String }
  },
  computed: {
    image_style () {
      return 'background-image: url(' + this.image_url + ')'
    }
  }
}
</script>