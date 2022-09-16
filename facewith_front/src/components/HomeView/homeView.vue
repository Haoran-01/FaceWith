<template>
  <t-layout>
    <t-aside>
      <t-menu v-if="theme" theme="dark" v-model=currentOption @change="changeMenu" style="margin-right: 50px; height: 100vh">
        <img
            width="200"
            class="t-menu__logo--center"
            src="../../image/logo_full_anti.svg"
            alt="logo"
        />
        <t-divider style="position: absolute; top:40px; left: -1px; width: 100%; color: var( --td-bg-color-component )"></t-divider>
        <div style="margin-top:30px; padding-left:18px; font-size: 0.8em;color: var( --td-text-color-anti )">
          Navigation
        </div>
        <t-menu-item value="workSpace">
          <template #icon>
            <t-icon name="app"></t-icon>
          </template>
           workspace
        </t-menu-item>
        <div style="margin-top:20px; padding-left:18px; font-size: 0.8em; color: var( --td-text-color-anti )">
          Tools
        </div>
        <t-menu-item value="itwTimeTable">
          <template #icon>
            <t-icon name="time"></t-icon>
          </template>
          Interview Schedule
        </t-menu-item>
        <t-menu-item value="itweManage" to="/home/manage">
          <template #icon>
            <t-icon name="usergroup"></t-icon>
          </template>
          Interviewee Management
        </t-menu-item>
        <t-menu-item value="playback">
          <template #icon>
            <t-icon name="video"></t-icon>
          </template>
          Interview Playback
        </t-menu-item>
      </t-menu>
      <t-menu v-else theme="light" v-model=currentOption @change="changeMenu" style="margin-right: 50px; height: 100vh">
        <img
            width="200"
            class="t-menu__logo--center"
            src="../../image/logo_full.svg"
            alt="logo"
        />
        <t-divider style="position: absolute; top:40px; left: -1px; width: 100%; color: var( --td-text-color-secondary )"></t-divider>
        <div style="margin-top:30px; padding-left:18px; font-size: 0.8em; color: var(--td-text-color-secondary)">
          Navigation
        </div>
        <t-menu-item value="workSpace" to="workspace">
          <template #icon>
            <t-icon name="app"></t-icon>
          </template>
          workspace
        </t-menu-item>
        <div style="margin-top:20px; padding-left:18px; font-size: 0.8em; color: var(--td-text-color-secondary)">
          Tools
        </div>
        <t-menu-item value="itwTimeTable">
          <template #icon>
            <t-icon name="time"></t-icon>
          </template>
          Interview Schedule
        </t-menu-item>
        <t-menu-item value="itweManage" to="manage">
          <template #icon>
            <t-icon name="usergroup"></t-icon>
          </template>
          Interviewee Management
        </t-menu-item>
        <t-menu-item value="playback">
          <template #icon>
            <t-icon name="video"></t-icon>
          </template>
          Interview Playback
        </t-menu-item>
      </t-menu>
    </t-aside>
    <t-layout>
      <t-header>
        <t-head-menu v-if="theme" theme="dark"  height="120px" style="border-bottom: 1px solid var(--td-bg-color-component )">
          <template #operations>
            <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="view-module" style="height: 24px; width: 24px; color: white;"/></a>
            <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="mail" style="height: 24px; width: 24px; color: white;"/></a>
            <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="logo-github" style="height: 24px; width: 24px; color: white;"/></a>
            <t-dropdown :options="options" :minColumnWidth="112">
              <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="setting" style="height: 24px; width: 24px; color: white;"/></a>
            </t-dropdown>
            <span>
            Change Theme
            <t-switch size="large" v-model="theme" @change="changeTheme"/>
          </span>
          </template>
        </t-head-menu>
        <t-head-menu v-else theme="light"  height="120px" style="border-bottom: 1px solid var(--td-bg-color-component )">
          <template #operations>
            <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="view-module" style="height: 24px; width: 24px; color: black;"/></a>
            <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="mail" style="height: 24px; width: 24px; color: black;"/></a>
            <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="logo-github" style="height: 24px; width: 24px; color: black;"/></a>
            <t-dropdown :options="options" :minColumnWidth="112">
              <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="setting" style="height: 24px; width: 24px; color: black;"/></a>
            </t-dropdown>
            <span>
            Change Theme
            <t-switch size="large" v-model="theme" @change="changeTheme"/>
          </span>
          </template>
        </t-head-menu>
      </t-header>
      <t-content>
        <router-view></router-view>
      </t-content>
    </t-layout>
  </t-layout>
</template>

<script>

import {ref} from "vue";
export default {
  setup(){
    const theme=ref(false);
    const currentOption= ref('workSpace');
    const changeMenu = (active) => {
      currentOption.value = active;
    }
    const changeTheme = () => {
      if (theme.value){
        document.documentElement.setAttribute('theme-mode', 'dark');
      }else {
        document.documentElement.removeAttribute('theme-mode');
      }
    }
    return {
      theme,
      currentOption,
      changeTheme,
      changeMenu
    }
  },
  name: "homeView",
  methods: {

  },
  data() {
    return {

      options: [
        {
          content: 'Profile',
          value: 1,
        },
        {
          content: 'Setting',
          value: 2,
        },
        {
          content: 'Log out',
          value: 3,
        },
      ],

    };
  },
}
</script>

<style scoped>

</style>