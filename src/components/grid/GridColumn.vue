<template>
  <div :class="[ class_col_sm, class_col_md, class_col_lg, class_col_xl, class_col_xxl, class_col_sm_auto, class_col_md_auto, class_col_lg_auto, class_col_xl_auto, class_col_xxl_auto, class_col_x, class_col_sm_x, class_col_md_x, class_col_lg_x, class_col_xl_x, class_col_xxl_x, class_mb, class_py, getBackgroundColor() ]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GridColumn',
  props: {
    col_sm: { default: false, type: Boolean },
    col_md: { default: false, type: Boolean },
    col_lg: { default: false, type: Boolean },
    col_xl: { default: false, type: Boolean },
    col_xxl: { default: false, type: Boolean },
    col_sm_auto: { default: false, type: Boolean },
    col_md_auto: { default: false, type: Boolean },
    col_lg_auto: { default: false, type: Boolean },
    col_xl_auto: { default: false, type: Boolean },
    col_xxl_auto: { default: false, type: Boolean },
    col_x: { default: 0, type: Number },
    col_sm_x: { default: 0, type: Number },
    col_md_x: { default: 0, type: Number },
    col_lg_x: { default: 0, type: Number },
    col_xl_x: { default: 0, type: Number },
    col_xxl_x: { default: 0, type: Number },
    mb: { default: 0, type: Number },
    py: { default: undefined, type: Number },
    bg_color: { default: undefined, type: String }
  },
  computed: {
    class_col_sm () {
      return this.col_sm ? 'col-sm' : ''
    },
    class_col_md () {
      return this.col_md ? 'col-md' : ''
    },
    class_col_lg () {
      return this.col_lg ? 'col-lg' : ''
    },
    class_col_xl () {
      return this.col_xl ? 'col-xl' : ''
    },
    class_col_xxl () {
      return this.col_xxl ? 'col-xxl' : ''
    },
    class_col_sm_auto () {
      return this.col_sm_auto ? 'col-sm-auto' : ''
    },
    class_col_md_auto () {
      return this.col_md_auto ? 'col-md-auto' : ''
    },
    class_col_lg_auto () {
      return this.col_lg_auto ? 'col-lg-auto' : ''
    },
    class_col_xl_auto () {
      return this.col_xl_auto ? 'col-xl-auto' : ''
    },
    class_col_xxl_auto () {
      return this.col_xxl_auto ? 'col-xxl-auto' : ''
    },
    class_col_x () {
      return this.col_x > 0 ? 'col-' + this.col_x : ''
    },
    class_col_sm_x () {
      return this.col_sm_x > 0 ? 'col-sm-' + this.col_sm_x : ''
    },
    class_col_md_x () {
      return this.col_md_x > 0 ? 'col-md-' + this.col_md_x : ''
    },
    class_col_lg_x () {
      return this.col_lg_x > 0 ? 'col-lg-' + this.col_lg_x : ''
    },
    class_col_xl_x () {
      return this.col_xl_x > 0 ? 'col-xl-' + this.col_xl_x : ''
    },
    class_col_xxl_x () {
      return this.col_xxl_x > 0 ? 'col-xxl-' + this.col_xxl_x : ''
    },
    class_mb () {
      return this.mb > 0 ? 'mb-' + this.mb : ''
    },
    class_py () {
      if (this.py === undefined) return ''
      else if (this.py >= 0) return 'py-' + this.py
      else if (this.py < 0) return 'py-n' + Math.abs(this.py)
      else return ''
    }
  },
  methods: {
    getBackgroundColor () {
      if (this.bg_color === 'primary') {
        return 'bg-primary'
      } else if (this.bg_color === 'secondary') {
        return 'bg-secondary'
      } else if (this.bg_color === 'success') {
        return 'bg-success'
      } else if (this.bg_color === 'warning') {
        return 'bg-warning'
      } else if (this.bg_color === 'danger') {
        return 'bg-danger'
      } else if (this.bg_color === 'info') {
        return 'bg-info'
      } else if (this.bg_color === 'light') {
        return 'bg-light'
      } else if (this.bg_color === 'dark') {
        return 'bg-dark'
      } else if (this.bg_color === 'blue') {
        return 'bg-blue'
      } else if (this.bg_color === 'azure') {
        return 'bg-azure'
      } else if (this.bg_color === 'indigo') {
        return 'bg-indigo'
      } else if (this.bg_color === 'purple') {
        return 'bg-purple'
      } else if (this.bg_color === 'pink') {
        return 'bg-pink'
      } else if (this.bg_color === 'red') {
        return 'bg-red'
      } else if (this.bg_color === 'orange') {
        return 'bg-orange'
      } else if (this.bg_color === 'yellow') {
        return 'bg-yellow'
      } else if (this.bg_color === 'lime') {
        return 'bg-lime'
      } else if (this.bg_color === 'green') {
        return 'bg-green'
      } else if (this.bg_color === 'teal') {
        return 'bg-teal'
      } else if (this.bg_color === 'cyan') {
        return 'bg-cyan'
      } else if (this.bg_color === 'facebook') {
        return 'bg-facebook'
      } else if (this.bg_color === 'twitter') {
        return 'bg-twitter'
      } else if (this.bg_color === 'google') {
        return 'bg-google'
      } else if (this.bg_color === 'youtube') {
        return 'bg-youtube'
      } else if (this.bg_color === 'vimeo') {
        return 'bg-vimeo'
      } else if (this.bg_color === 'dribbble') {
        return 'bg-dribbble'
      } else if (this.bg_color === 'github') {
        return 'bg-github'
      } else if (this.bg_color === 'instagram') {
        return 'bg-instagram'
      } else if (this.bg_color === 'pinterest') {
        return 'bg-pinterest'
      } else if (this.bg_color === 'vk') {
        return 'bg-vk'
      } else if (this.bg_color === 'rss') {
        return 'bg-rss'
      } else if (this.bg_color === 'flickr') {
        return 'bg-flickr'
      } else if (this.bg_color === 'bitbucket') {
        return 'bg-bitbucket'
      } else if (this.bg_color === 'tabler') {
        return 'bg-tabler'
      }
      return ''
    }
  }
}
</script>
