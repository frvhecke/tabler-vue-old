<template>
  <CardWrapper :background_color="background_color" :text_color="text_color" :text_color_auto="text_color_auto">
    <slot></slot>
    <div class="img-responsive img-responsive-21x9 card-img-top" :style="image_style"></div>
  </CardWrapper>
</template>

<script>
import CardWrapper from '@/components/card/CardWrapper.vue'

export default {
  name: 'ImageBottomCard',
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