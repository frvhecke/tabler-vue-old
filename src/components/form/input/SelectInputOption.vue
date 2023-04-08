<template>
  <option :value="value" :selected="selected">{{text}}</option>
</template>

<script>
export default {
  name: 'SelectInput',
  props: {
    text: { default: '', type: String },
    value: { default: '', type: String },
    selected: { default: false, type: Boolean }
  },
  data: () => ({
    val: ''
  }),
  methods: {
    change () {
      this.$emit('input', this.value)
    }
  }
}
</script>
