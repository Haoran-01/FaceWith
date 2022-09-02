<template>
  <t-card style="width: 100%;margin-top: 24px" hoverShadow>
    <template #avatar>
      <t-avatar size="56px" :icon="icon" />
      <span style="position: relative; left: 10px; font-size: large">Front-End Engineer Interview</span>
    </template>
    <template #actions>
      <t-button>
        <template #icon>
          <t-icon name="caret-right"/>
        </template>
        Prepare & Start</t-button>
    </template>
    <span style="font-size: 28px; position: relative; left: 10px;">12:00~12:40</span>
      <t-tag theme="primary" variant="light" style="position: relative; left: 15px; bottom: 5px; margin-right: 8px">Code</t-tag>
    <t-tag theme="primary" variant="light" style="position: relative; left: 15px; bottom: 5px;">Second</t-tag>
    <template #footer>
      <t-avatar-group>
        <t-avatar>L</t-avatar>
        <t-avatar>W</t-avatar>
        <t-avatar>H</t-avatar>
      </t-avatar-group>
      <t-icon name="more" style="float: right"></t-icon>
    </template>
  </t-card>
</template>

<script>
export default {
  name: "interviewCardSection"
}
</script>

<style scoped>

</style>