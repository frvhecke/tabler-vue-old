<template>
  <HorizontalHeader :theme_menu="theme_menu" :theme_header="theme_header">
    <template #logo>
      <HeaderLogo />
    </template>
    <template #header_right>
      <ButtonList>
        <StandardButton text="Source code" color="" icon_name="brand-github" href="https://github.com/tabler/tabler" target="_blank" />
        <StandardButton text="Sponsor" color="" icon_name="heart" icon_color="pink" href="https://github.com/sponsors/codecalm" target="_blank" />
      </ButtonList>
      <DarkModeToggleButton />
    </template>
    <template #menu>
      <TablerDemoMenu />
    </template>
  </HorizontalHeader>
</template>

<script>
import HorizontalHeader from '@/components/page/HorizontalHeader.vue'
import HeaderLogo from '@/components/page/HeaderLogo.vue'
import TablerDemoMenu from '@/components/demo/TablerDemoMenu.vue'
import ButtonList from '@/components/button/ButtonList.vue'
import StandardButton from '@/components/button/StandardButton.vue'
import DarkModeToggleButton from '@/components/theme/DarkModeToggleButton.vue'

export default {
  name: 'TablerDemoHeaderHorizontal',
  components: {
    HorizontalHeader,
    HeaderLogo,
    TablerDemoMenu,
    ButtonList,
    StandardButton,
    DarkModeToggleButton
  }
}
</script>