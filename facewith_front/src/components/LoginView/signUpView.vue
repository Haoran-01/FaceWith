<template>
  <t-layout>
    <t-header>
      <t-head-menu theme="null" height="64px">
        <template #logo>
          <img height="48" class="logo" src="../../image/logo_full.svg" alt="logo" />
        </template>
        <template #operations>
          <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="internet" style="height: 32px; width: 32px"/></a>
          <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="view-module" style="height: 32px; width: 32px"/></a>
          <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="logo-github" style="height: 32px; width: 32px"/></a>
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
          <t-form label-width="0">
            <t-form-item name="email">
              <t-input size="large" clearable placeholder="email" style="width: 100%">
                <template #prefix-icon>
                  <t-icon name="mail"/>
                </template>
              </t-input>
            </t-form-item>
              <t-form-item name="captcha">
                <t-input-group style="width: 100%">
                  <t-input size="large" clearable placeholder="captcha">
                    <template #prefix-icon>
                      <t-icon name="mail"/>
                    </template>
                  </t-input>
                  <t-button theme="primary" size="large">get captcha</t-button>
              </t-input-group>
            </t-form-item>
            <t-form-item name="password">
              <t-input size="large" type="password" clearable placeholder="please enter password" style="width: 100%">
                <template #prefix-icon>
                  <t-icon name="lock-on"/>
                </template>
              </t-input>
            </t-form-item>
            <t-form-item name="repeat-password">
              <t-input size="large" type="password" clearable placeholder="please enter password again" style="width: 100%">
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
        <div class="introduction-img"></div>
      </t-content>
    </t-layout>
  </t-layout>
</template>

<script>
export default {
  name: "signUpView"
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