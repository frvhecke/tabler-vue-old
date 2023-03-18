<template>
  <input type="text" :name="name" v-model="text" class="form-control" :placeholder="placeholder" :disabled="disabled" :readonly="readonly" @input="update()">
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    placeholder: { default: '', type: String },
    name: { default: 'text', type: String },
    value: { default: '', type: String },
    disabled: { default: false, type: Boolean },
    readonly: { default: false, type: Boolean }
  },
  data: () => ({
    text: ''
  }),
  methods: {
    update (e) {
      this.$emit('input', this.text)
    }
  }
}
</script>
