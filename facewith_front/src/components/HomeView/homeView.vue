<template>
  <t-layout>
    <t-aside>
      <t-menu v-if="theme" theme="dark" value="workSpace" style="margin-right: 50px; height: 100vh">
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
        <t-menu-item value="itweManage">
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
      <t-menu v-else theme="light" value="workSpace" style="margin-right: 50px; height: 100vh">
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
        <t-menu-item value="workSpace">
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
        <t-menu-item value="itweManage">
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
        <t-layout>
          <t-content style="padding: 24px">
            <div class="welcome" >
                <t-avatar size="100px" style="grid-area: 1 / 2 / 2 / 3;">I</t-avatar>
                <div style="font-size: var(--td-font-size-headline-small);grid-area: 1 / 1 / 2 / 5;">Hi, interviewer! start your work today!</div>
            </div>
            <div v-for="(item, index) in interviewData" :key="index">
            <interview-card-section v-bind="{item, index}"/>
            </div>
            <t-button size="large" style="width: 100%; margin-top: 24px">
              <template #icon>
                <t-icon name="add"/>
              </template>
              Add new interview
            </t-button>
          </t-content>
          <t-aside width="376px" style="border-top: 1px solid var(--td-bg-color-component ); background-color: var(--td-bg-color-page)">
            <t-calendar
              theme="card"
              controllerConfig
              fillWithZero
              preventCellContextmenu
              isShowWeekendDefault
              style="margin: 24px 24px 24px 0;"
            />
          </t-aside>
        </t-layout>
      </t-content>
      <t-footer></t-footer>
    </t-layout>
  </t-layout>
</template>

<script>

import InterviewCardSection from "@/components/HomeView/HomeComponents/interviewCardSection";
import {ref} from "vue";
export default {
  setup(){
    const theme=ref(false);
    const changeTheme = () => {
      if (theme.value){
        document.documentElement.setAttribute('theme-mode', 'dark');
      }else {
        document.documentElement.removeAttribute('theme-mode');
      }
    }
    return {
      theme,
      changeTheme
    }
  },
  name: "homeView",
  components: {InterviewCardSection},
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
      interviewData:[
        {
          intervieweeAvatar: '',
          intervieweeInfo: [],
          title: '1',
          startTime: '12:00',
          endTime: '14:00',
          tags: ["code", "l"],
          interviewers: [{name: "Tan", id: "12", job: "Front-end Engineer", department: "Wechat", tel: "1213721834" }, {name: "TE", id: "12", job: "Front-end Engineer", department: "Wechat", tel: "1213721834"}],
          roomID: 1,
          inviteLink: "baidu.com"
        },
        {
          intervieweeAvatar: '',
          intervieweeInfo: [],
          title: '1',
          startTime: '',
          endTime: '',
          tags: ["code", "l"],
          interviewers: [{name: "Tan", id: "12", job: "Front-end Engineer", department: "Wechat", tel: "1213721834" }, {name: "TE", id: "12", job: "Front-end Engineer", department: "Wechat", tel: "1213721834"}],
          roomID: 1,
          inviteLink: "baidu.com"
        },
        {
          intervieweeAvatar: '',
          intervieweeInfo: [],
          title: '1',
          startTime: '',
          endTime: '',
          tags: ["code", "l"],
          interviewers: [{name: "Tan", job: "Front-end Engineer", department: "Wechat", tel: "1213721834" }, {name: "TE", id: "12", job: "Front-end Engineer", department: "Wechat", tel: "1213721834"}],
          roomID: 1,
          inviteLink: "baidu.com"
        },
      ]
    };
  },
}
</script>

<style scoped>
.welcome {
  display: grid;
  grid-template-columns: 32px 100px 1fr 32px;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 120px;
  width: 100%;
  min-width:775px;
  background-color: var(--td-bg-color-container);
  justify-items: center;
  align-items:center;
  box-shadow: var(--td-shadow-1);
  border-radius: 4px;
}
</style>