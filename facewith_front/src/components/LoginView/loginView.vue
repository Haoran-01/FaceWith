<template>
  <t-layout>
    <t-header>
      <t-head-menu v-if="theme" theme="dark" height="64px">
        <template #logo>
          <img height="48" class="logo" src="../../image/logo_full_anti.svg" alt="logo" />
        </template>
        <template #operations>
          <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="view-module" style="height: 32px; width: 32px; color: white"/></a>
          <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="logo-github" style="height: 32px; width: 32px; color: white"/></a>
          <span>
            Change Theme
            <t-switch size="large" v-model="theme" @change="changeTheme"/>
          </span>
        </template>
      </t-head-menu>
      <t-head-menu v-else theme="light" height="64px">
        <template #logo>
          <img height="48" class="logo" src="../../image/logo_full.svg" alt="logo" />
        </template>
        <template #operations>
          <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="view-module" style="height: 32px; width: 32px;"/></a>
          <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="logo-github" style="height: 32px; width: 32px;"/></a>
          <span>
            Change Theme
            <t-switch size="large" v-model="theme" @change="changeTheme"/>
          </span>
        </template>
      </t-head-menu>
    </t-header>
    <t-layout>
      <t-aside width="33%" style="height: calc( 100vh - 64px ); display: flex; min-width: 560px; background-color: var(--td-bg-color-page)">
        <div style="width: 400px; height: 424px; margin: auto;">
          <div>
            <span style="font-family: 'Noto Sans';font-style: italic; font-size: 36px; color: var(--td-text-color-primary); line-height: 44px; margin-bottom: 4px" >Log into</span>
            <br/>
            <span style="font-family: 'Noto Sans';font-style: italic; font-weight: 600;font-size: 36px; color: var(--td-text-color-primary); line-height: 44px; ">FaceWith</span>
          </div>
          <div style="margin-top: 24px; margin-bottom: 48px">
            <span style="font-size: 14px; color: var(--td-text-color-primary); margin-right: 8px">Do not have account?</span>
            <router-link to="/signup"><t-link style="font-size: 14px; color: var(--td-text-color-secondary)">Sign up</t-link></router-link>
          </div>
          <t-form ref="form" :rules="FORM_RULES" :data="formData" @submit="onSubmit" label-width="0">
            <t-form-item name="email">
              <t-input v-model="formData.email" size="large" clearable placeholder="email" style="width: 100%">
                <template #prefix-icon>
                  <t-icon name="mail"/>
                </template>
              </t-input>
            </t-form-item>
            <t-form-item name="password">
              <t-input v-model="formData.password" size="large" type="password" clearable placeholder="password" style="width: 100%">
                <template #prefix-icon>
                  <t-icon name="lock-on"/>
                </template>
              </t-input>
            </t-form-item>
            <div style="display: flex; justify-content: space-between; margin-bottom: 48px">
              <t-form-item name="remember">
                <t-checkbox>Remember me</t-checkbox>
              </t-form-item>
              <router-link to="/forget"><t-link theme="primary">Forget password?</t-link></router-link>
            </div>
            <t-form-item>
              <t-button theme="primary" type="submit" block size="large">Login</t-button>
            </t-form-item>
          </t-form>
        </div>
      </t-aside>
      <t-content style="background-color: var(--td-bg-color-page)">
        <div v-if="theme" class="introduction-img-anti"></div>
        <div v-else class="introduction-img"></div>
      </t-content>
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
        axios.post('/login/login_form', {
          email: this.formData.email,
          password: this.formData.password
        })
        .then(function () {
          window.location.assign(window.location.origin);
        })//获取uid
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

<style>
.introduction-img{
  background-image: url("../../image/introduction_img.svg");
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
}
.introduction-img-anti{
  background-image: url("../../image/introduction_img_anti.svg");
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
}
</style>
