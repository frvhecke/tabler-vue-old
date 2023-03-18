<template>
  <div class="mb-3">
    <FormLabel :text="label" :required="required" />
    <slot></slot>
  </div>
</template>

<script>
import FormLabel from '@/components/form/FormLabel.vue'

export default {
  name: 'FormElement',
  components: {
    FormLabel
  },
  props: {
    label: { default: '', type: String },
    description: { default: '', type: String },
    required: { default: false, type: Boolean }
  }
}
</script>
