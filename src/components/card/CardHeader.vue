<template>
  <div class="card-header" :class="[ { 'card-header-light' : light } ]">
    <h3 v-if="title" class="card-title">
      {{title}}
      <span v-if="subtitle" class="card-subtitle">
        {{subtitle}}
      </span>
    </h3>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CardHeader',
  props: {
    title: { default: '', type: String },
    subtitle: { default: '', type: String },
    light: { default: false, type: Boolean }
  }
}
</script>