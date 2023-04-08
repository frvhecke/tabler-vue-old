<template>
  <textarea class="form-control" :name="name" v-model="text" :rows="rows" :placeholder="placeholder" :disabled="disabled" :readonly="readonly" @input="update()" />
</template>

<script>
export default {
  name: 'TextareaInput',
  props: {
    placeholder: { default: '', type: String },
    name: { default: 'text', type: String },
    value: { default: '', type: String },
    rows: { default: 5, type: Number },
    disabled: { default: false, type: Boolean },
    readonly: { default: false, type: Boolean }
  },
  data: () => ({
    text: ''
  }),
  methods: {
    update () {
      this.$emit('input', this.text)
    }
  },
  mounted() {
    this.text = this.value
    this.$emit('input', this.value)
  }
}
</script>
