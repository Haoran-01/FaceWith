<template>
  <t-layout>
    <t-aside>
      <t-menu theme="light" value="workSpace" style="margin-right: 50px; height: 100vh">
        <img
            width="200"
            class="t-menu__logo--center"
            src="../../image/logo_full.svg"
            alt="logo"
        />
        <t-divider style="position: absolute; top:40px; left: -1px; width: 100%; color: var(--td-gray-color-3)"></t-divider>
        <div style="margin-top:30px; padding-left:18px; font-size: 0.8em;">
          主导航
        </div>
        <t-menu-item value="workSpace">
          <t-icon name="app"></t-icon> 工作台
        </t-menu-item>
        <div style="margin-top:20px; padding-left:18px; font-size: 0.8em;">
          工具
        </div>
        <t-menu-item value="itwTimeTable">
          <t-icon name="time"></t-icon>
          面试时间表
        </t-menu-item>
        <t-menu-item value="itweManage">
          <t-icon name="usergroup"></t-icon>
          面试者管理
        </t-menu-item>
        <t-menu-item value="playback">
          <t-icon name="video"></t-icon>
          面试回放
        </t-menu-item>
      </t-menu>
    </t-aside>
    <t-layout>
      <t-header>
        <t-head-menu theme="light"  height="120px" style="border-bottom: 1px solid var(--td-gray-color-3)">
          <template #operations>
            <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="internet" style="height: 24px; width: 24px; color: black;"/></a>
            <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="view-module" style="height: 24px; width: 24px; color: black;"/></a>
            <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="mail" style="height: 24px; width: 24px; color: black;"/></a>
            <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="logo-github" style="height: 24px; width: 24px; color: black;"/></a>
            <t-dropdown :options="options" :minColumnWidth="112">
              <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="setting" style="height: 24px; width: 24px; color: black;"/></a>
            </t-dropdown>
          </template>
        </t-head-menu>
      </t-header>
      <t-content>
        <t-layout>
          <t-content>
            <div style="margin: 25px 0px 25px 25px; display: flex; width: 96%; background-color: white; padding: 10px; box-shadow: var(--td-shadow-1); border-radius: 4px;">
              <div style="margin: auto;">
                <t-avatar size="100px">Son</t-avatar>
                <span style="font-size: var(--td-font-size-headline-small)">Hi, son of PuYang</span>
              </div>
            </div>
            <interview-card-section/>
            <interview-card-section/>
            <interview-card-section/>
          </t-content>
          <t-aside width="400px" style="border-top: 1px solid var(--td-gray-color-3); background-color: rgb(238, 238, 238)">
            <t-calendar
              theme="card"
              controllerConfig
              fillWithZero
              preventCellContextmenu
              isShowWeekendDefault
              style="margin: 25px"
            />
          </t-aside>
        </t-layout>
      </t-content>
      <t-footer>Footer</t-footer>
    </t-layout>
  </t-layout>
</template>

<script>

import InterviewCardSection from "@/components/HomeView/HomeComponents/interviewCardSection";
export default {
  name: "homeView",
  components: {InterviewCardSection},
  methods: {
    renderIcon() {
      return <user-circle/>;
    },
  },
  data() {
    return {
      options: [
        {
          content: '个人中心',
          value: 1,
        },
        {
          content: '设置',
          value: 2,
        },
        {
          content: '退出登录',
          value: 3,
        },
      ],
    };
  },
}
</script>

<style scoped>
.parent {
  display: grid;
  grid-template-columns: 1fr 30px 100px 150px 500px 250px 1fr;
  grid-template-rows: 1fr 100px 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.div1 { grid-area: 2 / 3 / 3 / 4; }
.div2 { grid-area: 2 / 5 / 3 / 6; }
</style>