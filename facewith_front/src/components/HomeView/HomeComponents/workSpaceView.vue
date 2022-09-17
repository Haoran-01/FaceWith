<template>
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
</template>

<script>
import InterviewCardSection from "@/components/HomeView/HomeComponents/interviewCardSection";

export default {
  name: "workSpaceView",
  components: {InterviewCardSection},
  data(){
    return{
      interviewData:[
        {
          intervieweeAvatar: '',
          intervieweeInfo: [],
          title: '1',
          startTime: '12:00',
          endTime: '14:00',
          tags: ["code", "l"],
          interviewers: [{name: "Tan", id: "12", job: "Front-end Engineer", department: "Wechat", tel: "1213721834" }, {name: "TE", id: "12", job: "Front-end Engineer", department: "Wechat", tel: "1213721834"}],
          interviewee: 'zzy',
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
          interviewee: 'zzy',
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
          interviewee: 'zzy',
          roomID: 1,
          inviteLink: "baidu.com"
        },
      ]
    }
  }
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