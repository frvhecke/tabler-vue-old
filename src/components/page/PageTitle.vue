<template>
  <div class="page-header d-print-none">
    <div class="container-xl">
      <div class="row align-items-center">
        <div class="col">
          <div class="page-pretitle">{{subtitle}}</div>
          <h2 class="page-title">
            {{title}}
          </h2>
        </div>
        <div class="col-auto ms-auto d-print-none">
          <slot></slot>      
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageTitle',
  props: {
    title: { default: 'text', type: String },
    subtitle: { default: 'text', type: String }
  }
}
</script>
