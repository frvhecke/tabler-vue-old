<template>
  <a :href="href" :target="target">
    <img :src="image" :width="width" :height="height" :alt="alt_text" class="navbar-brand-image">
  </a>
</template>

<script>
export default {
  name: 'HeaderLogo',
  props: {
    image: { default: '/static/logo.svg', type: String },
    width: { default: 110, type: Number },
    height: { default: 32, type: Number },
    alt_text: { default: '', type: String },
    href: { default: '', type: String },
    target: { default: '_self', type: String }
  }
}
</script>
