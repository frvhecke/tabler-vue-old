<template>
  <Page>
    <template #body>
      <GridRow :row_cards="true">
        <GridColumn :col_x="12">
          <Card>
            <template #header>
              <CardHeaderTitle text="Standard Buttons" />
            </template>
            <GridRow>
              <GridColumn :col_x="12" :col_xl_x="2" :mb="3" class="font-weight-semibold">
                  Normal
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <StandardButton text="Button" color="primary" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <StandardButton text="Button" color="secondary" :full_width="true"/>
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <StandardButton text="Button" color="success" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <StandardButton text="Button" color="warning" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <StandardButton text="Button" color="danger" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <StandardButton text="Button" color="info" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <StandardButton text="Button" color="light" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <StandardButton text="Button" color="dark" :full_width="true" />
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn :col_x="12" :col_xl_x="2" :mb="3" class="font-weight-semibold">
                Disabled
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <StandardButton text="Button" color="primary" :full_width="true" :disabled="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <StandardButton text="Button" color="secondary" :full_width="true" :disabled="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <StandardButton text="Button" color="success" :full_width="true" :disabled="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <StandardButton text="Button" color="warning" :full_width="true" :disabled="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <StandardButton text="Button" color="danger" :full_width="true" :disabled="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <StandardButton text="Button" color="info" :full_width="true" :disabled="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <StandardButton text="Button" color="light" :full_width="true" :disabled="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <StandardButton text="Button" color="dark" :full_width="true" :disabled="true" />
              </GridColumn>
            </GridRow>
          </Card>
        </GridColumn>
        <GridColumn :col_x="12">
          <Card>
            <template #header>
              <CardHeaderTitle text="Outline Buttons" />
            </template>
            <GridRow>
              <GridColumn :col_x="12" :col_xl_x="2" :mb="3" class="font-weight-semibold">
                  Normal
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <OutlineButton text="Button" color="primary" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <OutlineButton text="Button" color="secondary" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <OutlineButton text="Button" color="success" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <OutlineButton text="Button" color="warning" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <OutlineButton text="Button" color="danger" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <OutlineButton text="Button" color="info" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <OutlineButton text="Button" color="light" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <OutlineButton text="Button" color="dark" :full_width="true" />
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn :col_x="12" :col_xl_x="2" :mb="3" class="font-weight-semibold">
                  Disabled
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <OutlineButton text="Button" color="primary" :full_width="true" :disabled="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <OutlineButton text="Button" color="secondary" :full_width="true" :disabled="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <OutlineButton text="Button" color="success" :full_width="true" :disabled="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <OutlineButton text="Button" color="warning" :full_width="true" :disabled="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <OutlineButton text="Button" color="danger" :full_width="true" :disabled="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <OutlineButton text="Button" color="info" :full_width="true" :disabled="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <OutlineButton text="Button" color="light" :full_width="true" :disabled="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <OutlineButton text="Button" color="dark" :full_width="true" :disabled="true" />
              </GridColumn>
            </GridRow>
          </Card>
        </GridColumn>
        <GridColumn :col_x="12">
          <Card>
            <template #header>
              <CardHeaderTitle text="Ghost Buttons" />
            </template>
            <GridRow>
              <GridColumn :col_x="12" :col_xl_x="2" :mb="3" class="font-weight-semibold">
                  Normal
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <GhostButton text="Button" color="primary" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <GhostButton text="Button" color="secondary" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <GhostButton text="Button" color="success" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <GhostButton text="Button" color="warning" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <GhostButton text="Button" color="danger" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <GhostButton text="Button" color="info" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <GhostButton text="Button" color="light" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <GhostButton text="Button" color="dark" :full_width="true" />
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn :col_x="12" :col_xl_x="2" :mb="3" class="font-weight-semibold">
                  Disabled
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <GhostButton text="Button" color="primary" :full_width="true" :disabled="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <GhostButton text="Button" color="secondary" :full_width="true" :disabled="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <GhostButton text="Button" color="success" :full_width="true" :disabled="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <GhostButton text="Button" color="warning" :full_width="true" :disabled="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <GhostButton text="Button" color="danger" :full_width="true" :disabled="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <GhostButton text="Button" color="info" :full_width="true" :disabled="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <GhostButton text="Button" color="light" :full_width="true" :disabled="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <GhostButton text="Button" color="dark" :full_width="true" :disabled="true" />
              </GridColumn>
            </GridRow>
          </Card>
        </GridColumn>
        <GridColumn :col_x="12">
          <Card>
            <template #header>
              <CardHeaderTitle text="Squared Buttons" />
            </template>
            <GridRow>
              <GridColumn :col_x="12" :col_xl_x="2" :mb="3" class="font-weight-semibold">
                  Normal
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <SquaredButton text="Button" color="primary" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <SquaredButton text="Button" color="secondary" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <SquaredButton text="Button" color="success" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <SquaredButton text="Button" color="warning" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <SquaredButton text="Button" color="danger" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <SquaredButton text="Button" color="info" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <SquaredButton text="Button" color="light" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <SquaredButton text="Button" color="dark" :full_width="true" />
              </GridColumn>
            </GridRow>
          </Card>
        </GridColumn>
        <GridColumn :col_x="12">
          <Card>
            <template #header>
              <CardHeaderTitle text="Pill Buttons" />
            </template>
            <GridRow>
              <GridColumn :col_x="12" :col_xl_x="2" :mb="3" class="font-weight-semibold">
                  Normal
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <PillButton text="Button" color="primary" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <PillButton text="Button" color="secondary" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <PillButton text="Button" color="success" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <PillButton text="Button" color="warning" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <PillButton text="Button" color="danger" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <PillButton text="Button" color="info" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <PillButton text="Button" color="light" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_lg="true" :mb="3">
                  <PillButton text="Button" color="dark" :full_width="true" />
              </GridColumn>
            </GridRow>
          </Card>
        </GridColumn>
        <GridColumn :col_x="12">
          <Card>
            <template #header>
              <CardHeaderTitle text="Extra colors" />
            </template>
            <GridRow>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :mb="3">
                <StandardButton text="Button" color="blue" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :mb="3">
                <StandardButton text="Button" color="azure" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :mb="3">
                <StandardButton text="Button" color="indigo" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :mb="3">
                <StandardButton text="Button" color="purple" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :mb="3">
                <StandardButton text="Button" color="pink" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :mb="3">
                <StandardButton text="Button" color="red" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :mb="3">
                <StandardButton text="Button" color="orange" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :mb="3">
                <StandardButton text="Button" color="yellow" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :mb="3">
                <StandardButton text="Button" color="lime" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :mb="3">
                <StandardButton text="Button" color="green" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :mb="3">
                <StandardButton text="Button" color="teal" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :mb="3">
                <StandardButton text="Button" color="cyan" :full_width="true" />
              </GridColumn>
            </GridRow>
          </Card>
        </GridColumn>
        <GridColumn :col_x="12">
          <Card>
            <template #header>
              <CardHeaderTitle text="Icon buttons" />
            </template>
            <GridRow>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :mb="3">
                <StandardButton color="facebook" icon_name="brand-facebook" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :mb="3">
                <StandardButton color="twitter" icon_name="brand-twitter" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :mb="3">
                <StandardButton color="google" icon_name="brand-google" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :mb="3">
                <StandardButton color="youtube" icon_name="brand-youtube" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :mb="3">
                <StandardButton color="vimeo" icon_name="brand-vimeo" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :mb="3">
                <StandardButton color="dribbble" icon_name="brand-dribbble" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :mb="3">
                <StandardButton color="github" icon_name="brand-github" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :mb="3">
                <StandardButton color="instagram" icon_name="brand-instagram" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :mb="3">
                <StandardButton color="pinterest" icon_name="brand-pinterest" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :mb="3">
                <StandardButton color="vk" icon_name="brand-vk" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :mb="3">
                <StandardButton color="rss" icon_name="rss" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :mb="3">
                <StandardButton color="flickr" icon_name="brand-flickr" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :mb="3">
                <StandardButton color="bitbucket" icon_name="brand-bitbucket" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :mb="3">
                <StandardButton color="tabler" icon_name="brand-tabler" :full_width="true" />
              </GridColumn>
            </GridRow>
          </Card>
        </GridColumn>
        <GridColumn :col_x="12">
          <Card title="test">
            <template #header>
              <CardHeaderTitle text="Social colors" />
            </template>
            <GridRow>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :mb="3">
                <StandardButton text="Facebook" color="facebook" icon_name="brand-facebook" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :mb="3">
                <StandardButton text="Twitter" color="twitter" icon_name="brand-twitter" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :mb="3">
                <StandardButton text="Google" color="google" icon_name="brand-google" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :mb="3">
                <StandardButton text="Youtube" color="youtube" icon_name="brand-youtube" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :mb="3">
                <StandardButton text="Vimeo" color="vimeo" icon_name="brand-vimeo" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :mb="3">
                <StandardButton text="Dribbble" color="dribbble" icon_name="brand-dribbble" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :mb="3">
                <StandardButton text="Github" color="github" icon_name="brand-github" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :mb="3">
                <StandardButton text="Instagram" color="instagram" icon_name="brand-instagram" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :mb="3">
                <StandardButton text="Pinterest" color="pinterest" icon_name="brand-pinterest" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :mb="3">
                <StandardButton text="VK" color="vk" icon_name="brand-vk" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :mb="3">
                <StandardButton text="RSS" color="rss" icon_name="rss" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :mb="3">
                <StandardButton text="Flickr" color="flickr" icon_name="brand-flickr" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :mb="3">
                <StandardButton text="Bitbucket" color="bitbucket" icon_name="brand-bitbucket" :full_width="true" />
              </GridColumn>
              <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :mb="3">
                <StandardButton text="Tabler" color="tabler" icon_name="brand-tabler" :full_width="true" />
              </GridColumn>
            </GridRow>
          </Card>
        </GridColumn>
      </GridRow>
    </template>
  </Page>
</template>

<script>
import Page from '@/components/page/Page.vue'
import GridRow from '@/components/grid/GridRow.vue'
import GridColumn from '@/components/grid/GridColumn.vue'
import Card from '@/components/card/Card.vue'
import CardHeaderTitle from '@/components/card/CardHeaderTitle.vue'
import StandardButton from '@/components/button/StandardButton.vue'
import OutlineButton from '@/components/button/OutlineButton.vue'
import GhostButton from '@/components/button/GhostButton.vue'
import SquaredButton from '@/components/button/SquaredButton.vue'
import PillButton from '@/components/button/PillButton.vue'

export default {
  name: 'ButtonsView',
  components: {
    Page,
    GridRow,
    GridColumn,
    Card,
    CardHeaderTitle,
    StandardButton,
    OutlineButton,
    GhostButton,
    SquaredButton,
    PillButton
  }
}
</script>
