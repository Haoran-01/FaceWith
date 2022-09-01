<template>
  <t-layout>
    <t-header>
      <t-head-menu theme="light" value="item1" height="56px">
        <template #logo>
          <img height="40" class="logo" src="../../image/logo_full.svg" alt="logo" />
        </template>
        <template #operations>
          <a href="javascript:;" size="small"><t-icon class="t-menu__operations-icon" name="internet" size="small"/></a>
          <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="view-module" /></a>
          <a href="javascript:;"><icon name="cps-icon-home-sheep" :url="require('../../image/Gitlab.svg')" /></a>
        </template>
      </t-head-menu>
    </t-header>
  </t-layout>
</template>

<script>
export default {
  name: "loginView"
}
</script>

<style scoped>
</style>