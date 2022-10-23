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
        <div style="width: 400px; height: 473px; margin: auto;">
          <div>
            <span style="font-family: 'Noto Sans';font-style: italic; font-size: 36px; color: var(--td-text-color-primary); line-height: 44px; margin-bottom: 4px" >Register into</span>
            <br/>
            <span style="font-family: 'Noto Sans';font-style: italic; font-weight: 600;font-size: 36px; color: var(--td-text-color-primary); line-height: 44px; ">FaceWith</span>
          </div>
          <div style="margin-top: 24px; margin-bottom: 48px">
            <span style="font-size: 14px; color: var(--td-text-color-primary); margin-right: 8px">Already have an account?</span>
            <router-link to="/"><t-link style="font-size: 14px; color: var(--td-text-color-secondary)">Login</t-link></router-link>
          </div>
          <t-form :rules="FORM_RULES" :data="formData" @submit="onSubmit" label-width="0">
            <t-form-item name="email">
              <t-input v-model="formData.email" size="large" clearable placeholder="email" style="width: 100%">
                <template #prefix-icon>
                  <t-icon name="mail"/>
                </template>
              </t-input>
            </t-form-item>
              <t-form-item name="captcha">
                <t-input-group style="width: 100%">
                  <t-input v-model="formData.captcha" size="large" clearable placeholder="captcha">
                    <template #prefix-icon>
                      <t-icon name="mail"/>
                    </template>
                  </t-input>
                  <t-button theme="primary" size="large" @click="send_captcha()">get captcha</t-button>
              </t-input-group>
            </t-form-item>
            <t-form-item name="password">
              <t-input v-model="formData.password" size="large" type="password" clearable placeholder="please enter password" style="width: 100%">
                <template #prefix-icon>
                  <t-icon name="lock-on"/>
                </template>
              </t-input>
            </t-form-item>
            <t-form-item name="rePassword">
              <t-input v-model="formData.rePassword" size="large" type="password" clearable placeholder="please enter password again" style="width: 100%">
                <template #prefix-icon>
                  <t-icon name="lock-on"/>
                </template>
              </t-input>
            </t-form-item>
            <t-form-item>
              <t-button theme="primary" type="submit" block size="large" style="margin-top: 8px">Sign up</t-button>
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
import {ref} from "vue";
import axios from "axios";
import {MessagePlugin} from "tdesign-vue-next";

export default {
  methods: {
    send_captcha() {
      axios.post('/user/captcha', {
        email: this.formData.email
      })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
  },
  setup(){
    const theme=ref(false);
    const rePassword = (val) =>
        new Promise((resolve) => {
          const timer = setTimeout(() => {
            resolve(formData.value.password === val);
            clearTimeout(timer);
          });
        });

    const FORM_RULES = {
      email: [{ email: { ignore_max_length: true }, message: 'Invalid email address' }, {  required: true, message: 'Email required' }],
      captcha: [{ required: true, message: 'Captcha required' }],
      password: [{ required: true, message: 'Password required' }],
      rePassword: [{ required: true, message: 'Password required to be repeated' }, { validator: rePassword, message: 'Inconsistent Passwords' },],
    };
    const INITIAL_DATA = {
      email: '',
      captcha: '',
      password: '',
      rePassword: '',
    }
    const formData = ref({ ...INITIAL_DATA });

    const onSubmit = ({ validateResult, firstError, e }) => {
      e.preventDefault();
      if (validateResult === true) {
        axios.post('/user/register_form', {
          email: this.formData.email,
          captcha: this.formData.captcha,
          password: this.formData.password
        })
            .then(function () {
              window.location.assign(window.location.origin + '/user/login');
            })
            .catch(function (error) {
              console.log(error);
            });
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
  name: "signUpView"
}
</script>

<style scoped>
</style>
