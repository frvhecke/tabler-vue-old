<template>
  <TablerDemoHeaderHorizontal />
  <PageWrapper title="Cards">
    <template #body>
      <GridRow :row_cards="true">
        <GridColumn :col_md_x="6" :col_lg_x="3">
          <SimpleCard>
            <CardHeader title="Card title"/>
            <CardBody>
              Simple card
            </CardBody>
          </SimpleCard>
        </GridColumn>
        <GridColumn :col_md_x="6" :col_lg_x="3">
          <SimpleCard>
            <CardHeader title="Card title" :light="true" />
            <CardBody>
              Card with header background
            </CardBody>
          </SimpleCard>
        </GridColumn>
        <GridColumn :col_md_x="6" :col_lg_x="3">
          <BorderlessCard>
            <CardBody>
              <CardBodyTitle title="Card title" />
              Card without border
            </CardBody>
          </BorderlessCard>
        </GridColumn>
        <GridColumn :col_md_x="6" :col_lg_x="3">
          <SimpleCard>
            <CardHeader title="Card title" subtitle="Subtitle" />
            <CardBody>
              Card with title and subtitle
            </CardBody>
          </SimpleCard>
        </GridColumn>
        <GridColumn :col_md_x="6" :col_lg_x="3">
          <HoverCard>
            <CardBody>Default hover effect</CardBody>
          </HoverCard>
        </GridColumn>
        <GridColumn :col_md_x="6" :col_lg_x="3">
          <HoverRotateCard>
            <CardBody>Default hover effect</CardBody>
          </HoverRotateCard>
        </GridColumn>
        <GridColumn :col_md_x="6" :col_lg_x="3">
          <HoverPopCard>
            <CardBody>Default hover effect</CardBody>
          </HoverPopCard>
        </GridColumn>
        <GridColumn :col_md_x="6" :col_lg_x="3"></GridColumn>
        <GridColumn :col_md_x="6" :col_lg_x="3">
          <RotateRightCard>
            <CardBody>Card rotate right.</CardBody>
          </RotateRightCard>
        </GridColumn>
        <GridColumn :col_md_x="6" :col_lg_x="3">
          <RotateLeftCard>
            <CardBody>Card rotate left.</CardBody>
          </RotateLeftCard>
        </GridColumn>
        <GridColumn :col_md_x="6" :col_lg_x="3">
          <ActiveCard>
            <CardBody>This is a card with active state.</CardBody>
          </ActiveCard>
        </GridColumn>
        <GridColumn :col_md_x="6" :col_lg_x="3">
          <InactiveCard>
            <CardBody>This is a card with inactive state.</CardBody>
          </InactiveCard>
        </GridColumn>
        <GridColumn :col_md_x="6" :col_lg_x="3"></GridColumn>
        <GridColumn :col_md_x="6" :col_lg_x="3"></GridColumn>
        <GridColumn :col_md_x="6" :col_lg_x="3"></GridColumn>
        <GridColumn :col_md_x="6" :col_lg_x="3">
          <StatusTopCard color="danger">
            <CardBody>
              <CardBodyTitle title="Card with top status" />
              <div class="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem.
              </div>
            </CardBody>
          </StatusTopCard>
        </GridColumn>
        <GridColumn :col_md_x="6" :col_lg_x="3">
          <StatusBottomCard color="success">
            <CardBody>
              <CardBodyTitle title="Card with bottom status" />
              <div class="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem.
              </div>
            </CardBody>
          </StatusBottomCard>
        </GridColumn>
        <GridColumn :col_md_x="6" :col_lg_x="3">
          <StatusSideCard color="primary">
            <CardBody>
              <CardBodyTitle title="Card with side status" />
              <div class="text-muted">
                <div class="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem.
                </div>
              </div>
            </CardBody>
          </StatusSideCard>
        </GridColumn>
        <GridColumn :col_md_x="6" :col_lg_x="3">
          <SimpleCard>
            <CardRibbonTop icon="star" />
            <CardBody>
              <CardBodyTitle title="Card with top ribbon"/>
              <div class="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at consectetur culpa ducimus eum fuga fugiat, ipsa iusto, modi nostrum recusandae reiciendis saepe.
              </div>
            </CardBody>
          </SimpleCard>
        </GridColumn>
        <GridColumn :col_md_x="6" :col_lg_x="3">
          <SimpleCard>
            <CardRibbon text="NEW" />
            <CardBody>
              <CardBodyTitle title="Card with text ribbon"/>
              <div class="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at consectetur culpa ducimus eum fuga fugiat, ipsa iusto, modi nostrum recusandae reiciendis saepe.
              </div>
            </CardBody>
          </SimpleCard>
        </GridColumn>
        <GridColumn :col_md_x="6" :col_lg_x="3">
          <ProgressCard :progress="38">
            <CardBody>
              <CardBodyTitle title="Card with progress bar" />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem.
            </CardBody>
          </ProgressCard>
        </GridColumn>
        <GridColumn :col_md_x="6" :col_lg_x="3">
          <StackedCard>
            <CardBody>
              <CardBodyTitle title="Stacked card" />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem.
            </CardBody>
          </StackedCard>
        </GridColumn>
        <GridColumn :col_lg_x="6"></GridColumn>
        <GridColumn :col_lg_x="6"></GridColumn>
        <GridColumn :col_md_x="6" :col_lg_x="3"></GridColumn>
        <GridColumn :col_md_x="6" :col_lg_x="3"></GridColumn>
        <GridColumn :col_md_x="6" :col_lg_x="3">
          <SimpleCard>
            <CardBody>
              <CardBodyTitle title="Card with footer" />
              <div class="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem.
              </div>
            </CardBody>
            <CardFooter>
              This is a standard card footer
            </CardFooter>
          </SimpleCard>
        </GridColumn>
        <GridColumn :col_md_x="6" :col_lg_x="3">
          <SimpleCard>
            <CardBody>
              <CardBodyTitle title="Card with transparent footer" />
              <div class="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem.
              </div>
            </CardBody>
            <CardFooter :transparent="true">
              This is a transparent card footer
            </CardFooter>
          </SimpleCard>
        </GridColumn>
        <GridColumn :col_md_x="6" :col_lg_x="3">
          <SimpleCard>
            <CardBody>
              <CardBodyTitle title="Card with footer button" />
              <div class="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem.
              </div>
            </CardBody>
            <CardFooter>
              <StandardButton text="Go somewhere" />
            </CardFooter>
          </SimpleCard>
        </GridColumn>
        <GridColumn :col_x="12">
          <CardWrapper>
            <template #header>
              <CardHeaderTitle title="Cards inside card" />
            </template>
            <GridRow :row_cards="true">
              <GridColumn :col_md="true">
                <CardWrapper status="top" status_color="danger">
                  <CardBodyTitle title="Card with top status" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem.</p>
                </CardWrapper>
              </GridColumn>
              <GridColumn :col_md="true">
                <CardWrapper status="top" status_color="success">
                  <CardBodyTitle title="Card with top status" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem.</p>
                </CardWrapper>
              </GridColumn>
              <GridColumn :col_md="true">
                <CardWrapper status="top" status_color="primary">
                  <CardBodyTitle title="Card with top status" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem.</p>
                </CardWrapper>
              </GridColumn>
            </GridRow>
          </CardWrapper>
        </GridColumn>
      </GridRow>
    </template>
  </PageWrapper>
</template>

<script>
import TablerDemoHeaderHorizontal from '@/components/demo/TablerDemoHeaderHorizontal.vue'
import PageWrapper from '@/components/page/PageWrapper.vue'
import GridRow from '@/components/grid/GridRow.vue'
import GridColumn from '@/components/grid/GridColumn.vue'
import CardWrapper from '@/components/card/CardWrapper.vue'
import CardHeader from '@/components/card/CardHeader.vue'
import CardBody from '@/components/card/CardBody.vue'
import CardFooter from '@/components/card/CardFooter.vue'
import CardHeaderTitle from '@/components/card/CardHeaderTitle.vue'
import CardBodyTitle from '@/components/card/CardBodyTitle.vue'
import StandardButton from '@/components/button/StandardButton.vue'
import BorderlessCard from '@/components/card/BorderlessCard.vue'
import SimpleCard from '@/components/card/SimpleCard.vue'
import HoverCard from '@/components/card/HoverCard.vue'
import HoverRotateCard from '@/components/card/HoverRotateCard.vue'
import HoverPopCard from '@/components/card/HoverPopCard.vue'
import ActiveCard from '@/components/card/ActiveCard.vue'
import InactiveCard from '@/components/card/InactiveCard.vue'
import StatusTopCard from '@/components/card/StatusTopCard.vue'
import StatusBottomCard from '@/components/card/StatusBottomCard.vue'
import StatusSideCard from '@/components/card/StatusSideCard.vue'
import StackedCard from '@/components/card/StackedCard.vue'
import ProgressCard from '@/components/card/ProgressCard.vue'
import RotateRightCard from '@/components/card/RotateRightCard.vue'
import RotateLeftCard from '@/components/card/RotateLeftCard.vue'
import CardRibbonTop from '@/components/card/CardRibbonTop.vue'
import CardRibbon from '@/components/card/CardRibbon.vue'

export default {
  name: 'ButtonsView',
  components: {
    TablerDemoHeaderHorizontal,
    PageWrapper,
    GridRow,
    GridColumn,
    CardWrapper,
    CardHeader,
    CardBody,
    CardFooter,
    CardHeaderTitle,
    CardBodyTitle,
    StandardButton,
    BorderlessCard,
    SimpleCard,
    HoverCard,
    HoverRotateCard,
    HoverPopCard,
    ActiveCard,
    InactiveCard,
    StatusTopCard,
    StatusBottomCard,
    StatusSideCard,
    StackedCard,
    ProgressCard,
    RotateRightCard,
    RotateLeftCard,
    CardRibbonTop,
    CardRibbon
  }
}
</script>