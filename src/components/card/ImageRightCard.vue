<template>
  <CardWrapper :background_color="background_color" :text_color="text_color" :text_color_auto="text_color_auto">
    <div class="row row-0">
      <div class="col-3 order-md-last" v-if="image_url">
        <img :src="image_url" class="w-100 h-100 object-cover card-img-start" :alt="image_alt">
      </div>
      <div class="col">
        <slot></slot>
      </div>
    </div>
  </CardWrapper>
</template>

<script>
import CardWrapper from '@/components/card/CardWrapper.vue'

export default {
  name: 'ImageRightCard',
  components: {
    CardWrapper
  },
  props: {
    background_color: { default: '', type: String },
    text_color: { default: '', type: String },
    text_color_auto: { default: false, type: Boolean },
    image_url: { default: '', type: String },
    image_alt: { default: '', type: String }
  }
}
</script>