<template>
  <GhostButton :tooltip="tooltip" color="secondary" :icon_name="icon" @click="toggleTheme" />
</template>

<script>
import GhostButton from '@/components/button/GhostButton.vue'

export default {
  name: 'DarkModeToggleButton',
  components: {
    GhostButton
  },
  data: () => ({
    theme_light: false,
    theme_dark: false,
    observer: null
  }),
  mounted () {
    this.initObserver()
  },
  beforeUnmount() {
    var container = document.body;
    if (this.observer) this.observer.unobserve(container)
  },
  computed: {
    tooltip () {
      return this.theme_light ? 'Enable light mode' : 'Enable dark mode'
    },
    icon () {
      return this.theme_light ? 'moon' : 'sun'
    }
  },
  methods: {
    initObserver() {
      const observer = new MutationObserver(this.callback)
      var container = document.body;
      var config = { attributes: true, childList: true, characterData: true };
      observer.observe(container, config);
      this.observer = observer
    },
    callback () {
      this.theme_light = document.body.classList.contains('theme-light')
      this.theme_dark = document.body.classList.contains('theme-dark')
    },
    toggleTheme () {
      // Check if theme is present in body
      this.theme_light = document.body.classList.contains('theme-light')
      this.theme_dark = document.body.classList.contains('theme-dark')
      // Switch theme values and force update
      this.theme_light = !this.theme_light
      this.theme_dark = !this.theme_dark
      this.updateTheme()
    },
    updateTheme () {
      document.body.classList.remove('theme-light', 'theme-dark')
      document.body.classList.add(this.theme_light ? 'theme-light' : 'theme-dark')
    }
  }
}
</script>
