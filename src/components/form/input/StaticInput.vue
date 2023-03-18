<template>
  <div class="form-control-plaintext">{{value}}</div>
</template>

<script>
export default {
  name: 'StaticInput',
  props: {
    value: { default: '', type: String }
  }
}
</script>
