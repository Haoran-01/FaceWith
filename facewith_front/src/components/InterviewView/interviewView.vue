<template>
<t-layout>
  <t-header class="header">
    <t-popup placement="bottom-left" :content="'room ID: ' + this.roomID" destroy-on-close>
      <div class="info"></div>
    </t-popup>
    <div class="title">{{this.title}}</div>
    <div class="timer">{{time}}</div>
  </t-header>
  <t-layout>
    <t-content style="height: calc(100vh - 112px); min-width: 720px; background-color: var(--td-gray-color-8)">a</t-content>
    <t-aside style="height: calc(100vh - 112px); width: 360px; background-color: var(--td-gray-color-8)">b</t-aside>
  </t-layout>
  <t-footer class="tools" style="height: 80px; padding: 0; background-color: var(--td-gray-color-10)">
    <t-button variant="text" theme="default" class="toolButton" id="microphone">
      <div class="toolIcon" id="microphoneIcon"></div>
      <div class="toolLabel" id="microphoneLabel">mute</div>
    </t-button>
    <t-button variant="text" theme="default" class="toolButton" id="video">
      <div class="toolIcon" id="videoIcon"></div>
      <div class="toolLabel" id="videoLabel">close</div>
    </t-button>
    <t-button variant="text" theme="default" class="toolButton" id="chat">
      <div class="toolIcon" id="chatIcon"></div>
      <div class="toolLabel" id="chatLabel">chat</div>
    </t-button>
    <t-button variant="text" theme="default" class="toolButton" id="whiteboard">
      <div class="toolIcon" id="whiteboardIcon"></div>
      <div class="toolLabel" id="whiteboardLabel">whiteboard</div>
    </t-button>
    <t-button variant="text" theme="default" class="toolButton" id="IDE">
      <div class="toolIcon" id="IDEIcon"></div>
      <div class="toolLabel" id="IDELabel">IDE</div>
    </t-button>
    <t-button theme="danger" size="large" id="closeRoom">Close Meeting</t-button>
    <t-button theme="danger" variant="outline" size="large" id="leaveRoom">Leave Meeting</t-button>
  </t-footer>
</t-layout>
</template>

<script>
import {ref} from "vue";
export default {
  async setup(){
    document.documentElement.setAttribute('theme-mode', 'dark');
    let s = 0;
    let m = 0;
    let h = 0;
    const time = ref("00:00:00");
    const toDub = (n) => {
      if(n<10){
        return "0"+n;
      }
      else {
        return ""+n;
      }
    }
    const timer = () =>{
      s = s + 1;
      if (s>=60){
        s = 0;
        m = m + 1;
      }
      if (m >= 60){
        m = 0;
        h = h + 1;
      }
      time.value = toDub(h) + ":" + toDub(m) + ":" + toDub(s);
    }
    setInterval(timer, 1000);
    return{
      time
    }
  },
  data(){
    return{
      title: "Test Meeting",
      roomID: this.$route.params.roomID
    }
  },
  name: "interviewView"
}
</script>

<style scoped>
.header{
  height: 32px;
  background-color: var(--td-gray-color-10);
  display: grid;
  grid-template-columns: 32px 1fr 100px;
  grid-template-rows: 1fr;
  align-items: center;
}
.info {
  z-index: 999 !important;
  grid-area: 1 / 1 / 2 / 2;
  height: 20px;
  width: 20px;
  background-color: var(--td-gray-color-5);
  border-radius: 2px;
  margin: auto;
  background-image: url("../../image/info.svg");
  background-size: 80%;
  background-position: center;
  background-repeat: no-repeat;
}
.timer {
  grid-area: 1 / 3 / 2 / 4;
  height: 20px;
  width: 64px;
  background-color: var(--td-gray-color-5);
  border-radius: 2px;
  margin: auto;
  text-align: center;
  color: var(--td-gray-color-10);
}
.title {
  grid-area: 1 / 1 / 2 / 4;
  text-align: center;
  color: var(--td-gray-color-5);
  font-size: 16px;
  height: 22px;
}
.tools {
  display: grid;
  grid-template-columns: repeat(2, 100px) 1fr repeat(3, 100px) 1fr repeat(2, 140px);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  align-items: center;
  justify-content: center;
}
.toolButton{
  width: 80px;
  height: 70px;
  margin: auto;
  padding: 0;
}

#microphone{
  grid-area: 1 / 1 / 2 / 2;
}
#microphoneIcon{
  background-image: url("../../image/micro_phone.svg");
  background-size: 30%;
}

#video{
  grid-area: 1 / 2 / 2 / 3;
}
#videoIcon{
  background-image: url("../../image/video.svg");
  background-size: 50%;
}

#chat{
  grid-area: 1 / 4 / 2 / 5;
}
#chatIcon{
  background-image: url("../../image/chat.svg");
  background-size: 50%;
}

#whiteboard {
  grid-area: 1 / 5 / 2 / 6;
}
#whiteboardIcon{
  background-image: url("../../image/whiteboard.svg");
  background-size: 40%;
}


#IDE {
  grid-area: 1 / 6 / 2 / 7;
}
#IDEIcon{
  background-image: url("../../image/IDE.svg");
  background-size: 40%;
}
#closeRoom { grid-area: 1 / 8 / 2 / 9; margin: 10px}
#leaveRoom { grid-area: 1 / 9 / 2 / 10; margin: 10px}

.toolIcon {
  grid-area: 1 / 1 / 2 / 2;
  background-position: center;
  background-repeat: no-repeat;
}
.toolLabel {
  grid-area: 2 / 1 / 3 / 2;
  color: white;
  text-align: center;
}
</style>