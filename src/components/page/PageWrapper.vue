<template>
    <div class="page-wrapper">
      <PageTitle v-if="title" :title="title" :subtitle="subtitle">
        <div class="nav-item d-none d-md-flex me-3">
          <slot name="title_actions"></slot>
        </div>
      </PageTitle>
      <div class="page-body">
        <div class="container-xl">
          <slot name="body"></slot>
        </div>
      </div>
      <footer class="footer footer-transparent d-print-none">
        <div class="container-xl">
          <slot name="footer"></slot>
        </div>
      </footer>
    </div>
</template>

<script>
import PageTitle from '@/components/page/PageTitle.vue'
import ButtonList from '@/components/button/ButtonList.vue'
import StandardButton from '@/components/button/StandardButton.vue'

export default {
  name: 'PageWrapper',
  components: {
    PageTitle,
    ButtonList,
    StandardButton
  },
  props: {
    title: { default: '', type: String },
    subtitle: { default: '', type: String },
    theme_page: { default: 'light', type: String },
    theme_menu: { default: 'light', type: String },
    theme_header: { default: 'light', type: String }
  }
}
</script>

<style>
  .text-left {
    text-align: left;
  }
</style>
