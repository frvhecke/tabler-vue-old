<template>
  <TablerDemoHeaderHorizontal />
  <PageWrapper title="Colors">
    <template #body>
      <SimpleCard>
        <CardHeader title="Base info" />
        <CardBody>
          <DataGrid>
            <DataGridItem title="registrar">
              Third Party
            </DataGridItem>
            <DataGridItem title="nameservers">
              Third Party
            </DataGridItem>
            <DataGridItem title="port number">
              3306
            </DataGridItem>
            <DataGridItem title="expiration date">
              –
            </DataGridItem>
            <DataGridItem title="creator">
              TODO Pawel Kuna
            </DataGridItem>
            <DataGridItem title="age">
              15 days
            </DataGridItem>
            <DataGridItem title="edge network">
              TODO Active
            </DataGridItem>
            <DataGridItem title="avatars list">
              TODO
            </DataGridItem>
            <DataGridItem title="checkbox">
              TODO
            </DataGridItem>
            <DataGridItem title="icon">
              TODO Checked
            </DataGridItem>
            <DataGridItem title="form control">
              TODO
            </DataGridItem>
            <DataGridItem title="longer text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </DataGridItem>
          </DataGrid>
        </CardBody>
      </SimpleCard>
    </template>
  </PageWrapper>
</template>

<script>
import TablerDemoHeaderHorizontal from '@/components/demo/TablerDemoHeaderHorizontal.vue'
import PageWrapper from '@/components/page/PageWrapper.vue'
import SimpleCard from '@/components/card/SimpleCard.vue'
import CardHeader from '@/components/card/CardHeader.vue'
import CardBody from '@/components/card/CardBody.vue'
import DataGrid from '@/components/datagrid/DataGrid.vue'
import DataGridItem from '@/components/datagrid/DataGridItem.vue'

export default {
  name: 'ColorsView',
  components: {
    TablerDemoHeaderHorizontal,
    PageWrapper,
    SimpleCard,
    CardHeader,
    CardBody,
    DataGrid,
    DataGridItem
  }
}
</script>
