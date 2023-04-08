<template>
  <label class="form-check" :class="[ { 'form-check-inline' : inline } ]">
    <input class="form-check-input" type="radio" :name="name" :checked="checked" :disabled="disabled" @change="update()">
    <span class="form-check-label">{{ label }}</span>
  </label>
</template>

<script>
export default {
  name: 'RadioInput',
  props: {
    label: { default: '', type: String },
    name: { default: 'text', type: String },
    checked: { default: false, type: Boolean },
    disabled: { default: false, type: Boolean },
    inline: { default: false, type: Boolean }
  },
  methods: {
    update (e) {
      this.$emit('change', e)
    }
  }
}
</script>