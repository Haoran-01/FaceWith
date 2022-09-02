<template>
  <t-layout>
    <t-header>
      <t-head-menu height="64px">
        <template #logo>
          <img height="48" class="logo" src="../../image/logo_full.svg" alt="logo" />
        </template>
        <template #operations>
          <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="view-module" style="height: 32px; width: 32px"/></a>
          <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="logo-github" style="height: 32px; width: 32px"/></a>
          <span>
            Change Theme
            <t-switch size="large" v-model="theme" @change="changeTheme"/>
          </span>
        </template>
      </t-head-menu>
    </t-header>
    <t-layout style="height: calc(100vh - 64px); display: flex; ">
      <div style="margin: auto; height: 286px; width: 200px; padding-left: 16px; padding-right: 16px; display: flex; justify-content: center;flex-wrap: wrap">
        <img src="../../image/404.svg" style="width: 144px; margin-top: 20px; margin-bottom: 42px;">
        <div style="font-size: 20px; font-weight: bold">404 Not Found</div>
      </div>
    </t-layout>
  </t-layout>
</template>

<script>
import axios from "axios";
import {ref} from "vue";
import { MessagePlugin } from 'tdesign-vue-next';

export default {
  setup(){
    const theme=ref(false);
    const FORM_RULES = {
      email: [{ email: { ignore_max_length: true }, message: 'Invalid email address' }, {  required: true, message: 'Email required' }],
      password: [{ required: true, message: 'Password required' }],
    };
    const INITIAL_DATA = {
      email: '',
      password: '',
    }
    const formData = ref({ ...INITIAL_DATA });

    const onSubmit = ({ validateResult, firstError, e }) => {
      e.preventDefault();
      if (validateResult === true) {
        axios.post('')
        .then()
      } else {
        console.log('Validate Errors: ', firstError, validateResult);
        MessagePlugin.warning(firstError);
      }
    };
    const changeTheme = () => {
      if (theme.value){
        document.documentElement.setAttribute('theme-mode', 'dark');
      }else {
        document.documentElement.removeAttribute('theme-mode');
      }
    }
    return{
      FORM_RULES,
      formData,
      onSubmit,
      theme,
      changeTheme
    }
  },
  name: "loginView",
}
</script>

<style scoped>
.introduction-img{
  background-image: url("../../image/introduction_img.svg");
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
}
</style>