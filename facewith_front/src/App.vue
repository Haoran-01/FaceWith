<template>
  <t-config-provider :global-config="language">
    <router-view></router-view>
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
</style>
