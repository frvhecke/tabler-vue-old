<template>
  <TablerDemoHeaderHorizontal />
  <PageWrapper title="Buttons">
    <template #body>
      <GridRow :row_cards="true">
        <GridColumn :col_x="12">
          <SimpleCard>
            <CardHeader title="Standard Buttons" />
            <CardBody>
              <GridRow :mb="-3" :g="2" align_items="center">
                <GridColumn :col_x="12" :col_xl_x="2" class="font-weight-semibold">
                    Normal
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <StandardButton text="Primary" color="primary" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <StandardButton text="Secondary" color="secondary" :full_width="true"/>
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <StandardButton text="Success" color="success" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <StandardButton text="Warning" color="warning" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <StandardButton text="Danger" color="danger" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <StandardButton text="Info" color="info" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <StandardButton text="Dark" color="dark" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3" bg_color="dark">
                    <StandardButton text="Light" color="light" :full_width="true" />
                </GridColumn>
              </GridRow>
              <GridRow :g="2" align_items="center">
                <GridColumn :col_x="12" :col_xl_x="2" class="font-weight-semibold">
                  Active state
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <StandardButton text="Primary" color="primary" :full_width="true" :active="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <StandardButton text="Secondary" color="secondary" :full_width="true" :active="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <StandardButton text="Success" color="success" :full_width="true" :active="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <StandardButton text="Warning" color="warning" :full_width="true" :active="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <StandardButton text="Danger" color="danger" :full_width="true" :active="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <StandardButton text="Info" color="info" :full_width="true" :active="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <StandardButton text="Dark" color="dark" :full_width="true" :active="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3" bg_color="dark">
                    <StandardButton text="Light" color="light" :full_width="true" :active="true" />
                </GridColumn>
              </GridRow>
              <GridRow :g="2" align_items="center">
                <GridColumn :col_x="12" :col_xl_x="2" class="font-weight-semibold">
                  Disabled
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <StandardButton text="Primary" color="primary" :full_width="true" :disabled="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <StandardButton text="Secondary" color="secondary" :full_width="true" :disabled="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <StandardButton text="Success" color="success" :full_width="true" :disabled="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <StandardButton text="Warning" color="warning" :full_width="true" :disabled="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <StandardButton text="Danger" color="danger" :full_width="true" :disabled="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <StandardButton text="Info" color="info" :full_width="true" :disabled="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <StandardButton text="Dark" color="dark" :full_width="true" :disabled="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3" bg_color="dark">
                    <StandardButton text="Light" color="light" :full_width="true" :disabled="true" />
                </GridColumn>
              </GridRow>
            </CardBody>
          </SimpleCard>
        </GridColumn>
        <GridColumn :col_x="12">
          <SimpleCard>
            <CardHeader title="Outline Buttons" />
            <CardBody>
              <p>Use <code>&#60;OutlineButton&#62;</code> for outline buttons.</p>
              <GridRow :g="2" align_items="center">
                <GridColumn :col_x="12" :col_xl_x="2" class="font-weight-semibold">
                    Normal
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <OutlineButton text="Primary" color="primary" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <OutlineButton text="Secondary" color="secondary" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <OutlineButton text="Success" color="success" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <OutlineButton text="Warning" color="warning" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <OutlineButton text="Danger" color="danger" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <OutlineButton text="Info" color="info" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <OutlineButton text="Dark" color="dark" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3" bg_color="dark">
                    <OutlineButton text="Light" color="light" :full_width="true" />
                </GridColumn>
              </GridRow>
              <GridRow :g="2" align_items="center">
                <GridColumn :col_x="12" :col_xl_x="2" class="font-weight-semibold">
                    Active state
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <OutlineButton text="Primary" color="primary" :full_width="true" :active="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <OutlineButton text="Secondary" color="secondary" :full_width="true" :active="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <OutlineButton text="Success" color="success" :full_width="true" :active="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <OutlineButton text="Warning" color="warning" :full_width="true" :active="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <OutlineButton text="Danger" color="danger" :full_width="true" :active="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <OutlineButton text="Info" color="info" :full_width="true" :active="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <OutlineButton text="Dark" color="dark" :full_width="true" :active="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3" bg_color="dark">
                    <OutlineButton text="Light" color="light" :full_width="true" :active="true" />
                </GridColumn>
              </GridRow>
              <GridRow :g="2" align_items="center">
                <GridColumn :col_x="12" :col_xl_x="2" class="font-weight-semibold">
                    Disabled
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <OutlineButton text="Primary" color="primary" :full_width="true" :disabled="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <OutlineButton text="Secondary" color="secondary" :full_width="true" :disabled="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <OutlineButton text="Success" color="success" :full_width="true" :disabled="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <OutlineButton text="Warning" color="warning" :full_width="true" :disabled="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <OutlineButton text="Danger" color="danger" :full_width="true" :disabled="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <OutlineButton text="Info" color="info" :full_width="true" :disabled="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <OutlineButton text="Dark" color="dark" :full_width="true" :disabled="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3" bg_color="dark">
                    <OutlineButton text="Light" color="light" :full_width="true" :disabled="true" />
                </GridColumn>
              </GridRow>
            </CardBody>
          </SimpleCard>
        </GridColumn>
        <GridColumn :col_x="12">
          <SimpleCard>
            <CardHeader title="Ghost Buttons" />
            <CardBody>
              <p>Use <code>&#60;GhostButton&#62;</code> for ghost buttons.</p>
              <GridRow :g="2" align_items="center">
                <GridColumn :col_x="12" :col_xl_x="2" class="font-weight-semibold">
                    Normal
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <GhostButton text="Primary" color="primary" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <GhostButton text="Secondary" color="secondary" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <GhostButton text="Success" color="success" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <GhostButton text="Warning" color="warning" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <GhostButton text="Danger" color="danger" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <GhostButton text="Info" color="info" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <GhostButton text="Dark" color="dark" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3" bg_color="dark">
                    <GhostButton text="Light" color="light" :full_width="true" />
                </GridColumn>
              </GridRow>
              <GridRow :g="2" align_items="center">
                <GridColumn :col_x="12" :col_xl_x="2" class="font-weight-semibold">
                    Active
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <GhostButton text="Primary" color="primary" :full_width="true" :active="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <GhostButton text="Secondary" color="secondary" :full_width="true" :active="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <GhostButton text="Success" color="success" :full_width="true" :active="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <GhostButton text="Warning" color="warning" :full_width="true" :active="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <GhostButton text="Danger" color="danger" :full_width="true" :active="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <GhostButton text="Info" color="info" :full_width="true" :active="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <GhostButton text="Dark" color="dark" :full_width="true" :active="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3" bg_color="dark">
                    <GhostButton text="Light" color="light" :full_width="true" :active="true" />
                </GridColumn>
              </GridRow>
              <GridRow :g="2" align_items="center">
                <GridColumn :col_x="12" :col_xl_x="2" class="font-weight-semibold">
                    Disabled
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <GhostButton text="Primary" color="primary" :full_width="true" :disabled="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <GhostButton text="Secondary" color="secondary" :full_width="true" :disabled="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <GhostButton text="Success" color="success" :full_width="true" :disabled="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <GhostButton text="Warning" color="warning" :full_width="true" :disabled="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <GhostButton text="Danger" color="danger" :full_width="true" :disabled="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <GhostButton text="Info" color="info" :full_width="true" :disabled="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <GhostButton text="Dark" color="dark" :full_width="true" :disabled="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3" bg_color="dark">
                    <GhostButton text="Light" color="light" :full_width="true" :disabled="true" />
                </GridColumn>
              </GridRow>
            </CardBody>
          </SimpleCard>
        </GridColumn>
        <GridColumn :col_x="12">
          <SimpleCard>
            <CardHeader title="Square Buttons" />
            <CardBody>
              <p>Use <code>&#60;SquareButton&#62;</code> for square buttons.</p>
              <GridRow :g="2" align_items="center">
                <GridColumn :col_x="12" :col_xl_x="2" class="font-weight-semibold">
                    Normal
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <SquareButton text="Primary" color="primary" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <SquareButton text="Secondary" color="secondary" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <SquareButton text="Success" color="success" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <SquareButton text="Warning" color="warning" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <SquareButton text="Danger" color="danger" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <SquareButton text="Info" color="info" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <SquareButton text="Dark" color="dark" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3" bg_color="dark">
                    <SquareButton text="Light" color="light" :full_width="true" />
                </GridColumn>
              </GridRow>
            </CardBody>
          </SimpleCard>
        </GridColumn>
        <GridColumn :col_x="12">
          <SimpleCard>
            <CardHeader title="Pill Buttons" />
            <CardBody>
              <p>Use <code>&#60;PillButton&#62;</code> for pill buttons.</p>
              <GridRow :g="2" align_items="center">
                <GridColumn :col_x="12" :col_xl_x="2" class="font-weight-semibold">
                    Normal
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <PillButton text="Primary" color="primary" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <PillButton text="Secondary" color="secondary" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <PillButton text="Success" color="success" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <PillButton text="Warning" color="warning" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <PillButton text="Danger" color="danger" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <PillButton text="Info" color="info" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3">
                    <PillButton text="Dark" color="dark" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl="true" :py="3" bg_color="dark">
                    <PillButton text="Light" color="light" :full_width="true" />
                </GridColumn>
              </GridRow>
            </CardBody>
          </SimpleCard>
        </GridColumn>
        <GridColumn :col_x="12">
          <SimpleCard>
            <CardHeader title="Extra colors" />
            <CardBody>
              <GridRow :g="2" align_items="center">
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :py="3">
                  <StandardButton text="Blue" color="blue" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :py="3">
                  <StandardButton text="Azure" color="azure" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :py="3">
                  <StandardButton text="Indigo" color="indigo" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :py="3">
                  <StandardButton text="Purple" color="purple" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :py="3">
                  <StandardButton text="Pink" color="pink" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :py="3">
                  <StandardButton text="Red" color="red" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :py="3">
                  <StandardButton text="Orange" color="orange" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :py="3">
                  <StandardButton text="Yellow" color="yellow" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :py="3">
                  <StandardButton text="Lime" color="lime" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :py="3">
                  <StandardButton text="Green" color="green" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :py="3">
                  <StandardButton text="Teal" color="teal" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :py="3">
                  <StandardButton text="Cyan" color="cyan" :full_width="true" />
                </GridColumn>
              </GridRow>
            </CardBody>
          </SimpleCard>
        </GridColumn>
        <GridColumn :col_x="12">
          <SimpleCard>
            <CardHeader title="Icon buttons" />
            <CardBody>
              <GridRow :g="2" align_items="center">
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :py="3">
                  <StandardButton color="facebook" icon_name="brand-facebook" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :py="3">
                  <StandardButton color="twitter" icon_name="brand-twitter" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :py="3">
                  <StandardButton color="google" icon_name="brand-google" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :py="3">
                  <StandardButton color="youtube" icon_name="brand-youtube" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :py="3">
                  <StandardButton color="vimeo" icon_name="brand-vimeo" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :py="3">
                  <StandardButton color="dribbble" icon_name="brand-dribbble" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :py="3">
                  <StandardButton color="github" icon_name="brand-github" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :py="3">
                  <StandardButton color="instagram" icon_name="brand-instagram" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :py="3">
                  <StandardButton color="pinterest" icon_name="brand-pinterest" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :py="3">
                  <StandardButton color="vk" icon_name="brand-vk" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :py="3">
                  <StandardButton color="rss" icon_name="rss" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :py="3">
                  <StandardButton color="flickr" icon_name="brand-flickr" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :py="3">
                  <StandardButton color="bitbucket" icon_name="brand-bitbucket" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :py="3">
                  <StandardButton color="tabler" icon_name="brand-tabler" :full_width="true" />
                </GridColumn>
              </GridRow>
            </CardBody>
          </SimpleCard>
        </GridColumn>
        <GridColumn :col_x="12">
          <SimpleCard>
            <CardHeader title="Social colors" />
            <CardBody>
              <GridRow :g="2" align_items="center">
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :py="3">
                  <StandardButton text="Facebook" color="facebook" icon_name="brand-facebook" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :py="3">
                  <StandardButton text="Twitter" color="twitter" icon_name="brand-twitter" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :py="3">
                  <StandardButton text="Google" color="google" icon_name="brand-google" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :py="3">
                  <StandardButton text="Youtube" color="youtube" icon_name="brand-youtube" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :py="3">
                  <StandardButton text="Vimeo" color="vimeo" icon_name="brand-vimeo" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :py="3">
                  <StandardButton text="Dribbble" color="dribbble" icon_name="brand-dribbble" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :py="3">
                  <StandardButton text="Github" color="github" icon_name="brand-github" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :py="3">
                  <StandardButton text="Instagram" color="instagram" icon_name="brand-instagram" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :py="3">
                  <StandardButton text="Pinterest" color="pinterest" icon_name="brand-pinterest" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :py="3">
                  <StandardButton text="VK" color="vk" icon_name="brand-vk" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :py="3">
                  <StandardButton text="RSS" color="rss" icon_name="rss" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :py="3">
                  <StandardButton text="Flickr" color="flickr" icon_name="brand-flickr" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :py="3">
                  <StandardButton text="Bitbucket" color="bitbucket" icon_name="brand-bitbucket" :full_width="true" />
                </GridColumn>
                <GridColumn :col_x="6" :col_sm_x="4" :col_md_x="2" :col_xl_auto="true" :py="3">
                  <StandardButton text="Tabler" color="tabler" icon_name="brand-tabler" :full_width="true" />
                </GridColumn>
              </GridRow>
            </CardBody>
          </SimpleCard>
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
import SimpleCard from '@/components/card/SimpleCard.vue'
import CardHeader from '@/components/card/CardHeader.vue'
import CardBody from '@/components/card/CardBody.vue'
import StandardButton from '@/components/button/StandardButton.vue'
import OutlineButton from '@/components/button/OutlineButton.vue'
import GhostButton from '@/components/button/GhostButton.vue'
import SquareButton from '@/components/button/SquareButton.vue'
import PillButton from '@/components/button/PillButton.vue'

export default {
  name: 'ButtonsView',
  components: {
    TablerDemoHeaderHorizontal,
    PageWrapper,
    GridRow,
    GridColumn,
    SimpleCard,
    CardHeader,
    CardBody,
    StandardButton,
    OutlineButton,
    GhostButton,
    SquareButton,
    PillButton
  }
}
</script>
