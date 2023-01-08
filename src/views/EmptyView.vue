<template>
  <TablerDemoHeaderHorizontal />
  <PageWrapper title="Empty page" />
</template>

<script>
import TablerDemoHeaderHorizontal from '@/components/demo/TablerDemoHeaderHorizontal.vue'
import PageWrapper from '@/components/page/PageWrapper.vue'

export default {
  name: 'ButtonsView',
  components: {
    TablerDemoHeaderHorizontal,
    PageWrapper
  }
}
</script>