<template>
  <select class="form-select" v-model="value" @change="change()">
    <SelectInputOption v-for="option in options" :key="option.value" :text="option.name" :value="option.value" :selected="option.selected" />
  </select>
</template>

<script>
import SelectInputOption from '@/components/form/input/SelectInputOption.vue'

export default {
  name: 'SelectInput',
  components: {
    SelectInputOption
  },
  props: {
    name: { default: 'text', type: String },
    options: { default: null, type: Array }
  },
  data: () => ({
    value: []
  }),
  methods: {
    change () {
      this.$emit('input', this.value)
    }
  }
}
</script>
