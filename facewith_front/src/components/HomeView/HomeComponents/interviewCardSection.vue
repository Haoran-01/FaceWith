<template>
  <t-card style="width: 97.5%; margin: 0 0 25px 25px;">
    <template #avatar>
      <t-avatar size="56px" :icon="icon" />
      <span style="position: relative; left: 10px; font-size: large">销售渠道</span>
    </template>
    <template #actions>
      <t-tag theme="primary"><t-icon name="discount"></t-icon>默认标签</t-tag>
    </template>
    <span style="font-size: 28px; position: relative; left: 10px;">12:00~12:40</span>
      <t-tag theme="primary" variant="light" style="position: relative; left: 15px; bottom: 5px;">默认标签</t-tag>
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