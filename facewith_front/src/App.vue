<template>
  <t-config-provider :global-config="language">
    <suspense>
      <router-view></router-view>
    </suspense>
  </t-config-provider>
</template>

<script>
import merge from 'lodash/merge';
import enConfig from 'tdesign-vue-next/es/locale/en_US';
export default {
  setup(){
    const language = merge(enConfig, {
      calendar: {
        week: 'Mon,Tue,Wen,Thu,Fri,Sat,Sun'
      }
    });
    return{
      language
    }
  },
  name: 'App',
}
</script>
<style>
body {
  margin: 0;
}
.toolButton .t-button__text{
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 70% 30%;
  height: 100%;
  width: 100%;
}
</style>
