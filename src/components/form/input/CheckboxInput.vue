<template>
  <label class="form-check" :class="[ { 'form-check-inline' : inline } ]">
    <input class="form-check-input" type="checkbox" :name="name" :checked="checked" :disabled="disabled" @change="update()">
    <span class="form-check-label">{{ label }}</span>
    <span v-if="description" class="form-check-description">
      {{ description }}
    </span>
  </label>
</template>

<script>
export default {
  name: 'CheckboxInput',
  props: {
    label: { default: '', type: String },
    name: { default: 'text', type: String },
    checked: { default: false, type: Boolean },
    disabled: { default: false, type: Boolean },
    inline: { default: false, type: Boolean },
    description: { default: '', type: String }
  },
  methods: {
    update (e) {
      this.$emit('change', e)
    }
  }
}
</script>