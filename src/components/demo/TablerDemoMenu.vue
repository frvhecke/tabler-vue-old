<template>
  <NavItem text="Home" icon_name="home" />
  <NavItem text="Interface" icon_name="box-seam">
    <DropdownColumns>
      <DropdownColumn>
        <DropdownItem text="Empty page" href="./empty" />
        <DropdownItem text="Accordion" />
        <DropdownItem text="Blank page" />
        <DropdownItem text="Badges" />
        <DropdownItem text="Buttons" href="./buttons" />
        <DropdownItem text="Cards">

        </DropdownItem>
        <DropdownItem text="Colors" />
        <DropdownItem text="Data grid" />
        <DropdownItem text="Datatables" />
        <DropdownItem text="Dropdowns" />
        <DropdownItem text="Modals" />
        <DropdownItem text="Maps" />
        <DropdownItem text="Map fullsize" />
        <DropdownItem text="Vector maps" />
        <DropdownItem text="Navigation" />
        <DropdownItem text="Charts" />
      </DropdownColumn>
      <DropdownColumn>
        <DropdownItem text="Pagination" />
        <DropdownItem text="Placeholder" />
        <DropdownItem text="Steps" />
        <DropdownItem text="Tabs" />
        <DropdownItem text="Tables" />
        <DropdownItem text="Carousel" />
        <DropdownItem text="Lists" />
        <DropdownItem text="Typography" />
        <DropdownItem text="Offcanvas" />
        <DropdownItem text="Markdown" />
        <DropdownItem text="Dropzone" />
        <DropdownItem text="Lightbox" />
        <DropdownItem text="TinyMCE" />
        <DropdownItem text="Inline player" />
        <DropdownItem text="Authentication">

        </DropdownItem>
        <DropdownItem text="Error pages">

        </DropdownItem>
      </DropdownColumn>
    </DropdownColumns>
  </NavItem>
  <NavItem text="Form elements" icon_name="checkbox" />
  <NavItem text="Extra" icon_name="star">
    <DropdownColumns>
      <DropdownColumn>
        <DropdownItem text="Activity" />
        <DropdownItem text="Gallery" />
        <DropdownItem text="Invoice" />
        <DropdownItem text="Search results" />
        <DropdownItem text="Pricing cards" />
        <DropdownItem text="Pricing table" />
        <DropdownItem text="FAQ" />
        <DropdownItem text="Users" />
        <DropdownItem text="License" />
      </DropdownColumn>
      <DropdownColumn>
        <DropdownItem text="Logs" />
        <DropdownItem text="Music" />
        <DropdownItem text="Photogrid" />
        <DropdownItem text="Tasks" />
        <DropdownItem text="Uptime monitor" />
        <DropdownItem text="Widgets" />
        <DropdownItem text="Wizard" />
        <DropdownItem text="Settings" />
        <DropdownItem text="Job listing" />
      </DropdownColumn>
    </DropdownColumns>
  </NavItem>
  <NavItem text="Extra" icon_name="layout-2">
    <DropdownColumns>
      <DropdownColumn>
        <DropdownItem text="Horizontal" />
        <DropdownItem text="Boxed" />
        <DropdownItem text="Vertical" />
        <DropdownItem text="Vertical transparent" />
        <DropdownItem text="Right vertical" />
        <DropdownItem text="Condensed" />
        <DropdownItem text="Combined" />
      </DropdownColumn>
      <DropdownColumn>
        <DropdownItem text="Navbar dark" />
        <DropdownItem text="Navbar sticky" />
        <DropdownItem text="Navbar overlap" />
        <DropdownItem text="RTL mode" />
        <DropdownItem text="Fluid" />
        <DropdownItem text="Fluid vertical" />
      </DropdownColumn>
    </DropdownColumns>
  </NavItem>
  <NavItem text="2979 icons" icon_name="ghost" />
  <NavItem text="Help" icon_name="lifebuoy">
    <DropdownItem text="Documentation" />
    <DropdownItem text="Changelog" />
    <DropdownItem text="Source code" />
    <DropdownItem text="Sponsor project!" />
  </NavItem>
</template>

<script>
import NavItem from '@/components/navigation/NavItem.vue'
import DropdownColumns from '@/components/navigation/DropdownColumns.vue'
import DropdownColumn from '@/components/navigation/DropdownColumn.vue'
import DropdownItem from '@/components/navigation/DropdownItem.vue'

export default {
  name: 'TablerDemoMenu',
  components: {
    NavItem,
    DropdownItem,
    DropdownColumns,
    DropdownColumn
  }
}
</script>