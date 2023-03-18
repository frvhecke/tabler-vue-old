<template>
  <label class="form-label" :class="[ { 'required' : required } ]">
    {{text}}
    <span v-if="description" class="form-label-description">{{description}}</span>
  </label>
</template>

<script>
export default {
  name: 'FormLabel',
  props: {
    text: { default: '', type: String },
    description: { default: '', type: String },
    required: { default: false, type: Boolean }
  }
}
</script>