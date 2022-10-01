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
    <t-content style="height: calc(100vh - 112px); min-width: 720px; background-color: var(--td-gray-color-8)">
      <div id="interviewee" style="width: 100%; height: 100%">
      </div>
    </t-content>
    <t-aside style="height: calc(100vh - 112px); width: 360px; background-color: var(--td-gray-color-8)">
      <div class="interviewers" >
        <div class="interviewer" id="myVideo"></div>
        <div class="nameTag">Nidie</div>
        <div class="interviewer"></div>
        <div class="interviewer"></div>
        <div class="interviewer"></div>
        <div class="interviewer"></div>
      </div>
    </t-aside>
  </t-layout>
  <t-footer class="tools" style="height: 80px; padding: 0; background-color: var(--td-gray-color-10)">
    <t-button variant="text" theme="default" class="toolButton" id="microphone" @click="handleMicrophone">
      <div :class="{toolIcon, microphoneIcon, muteIcon}" id="microphoneIcon"></div>
      <div class="toolLabel" id="microphoneLabel">mute</div>
    </t-button>
    <t-button variant="text" theme="default" class="toolButton" id="video" @click="handleVideo">
      <div :class="{toolIcon, videoIcon, blindIcon} " id="videoIcon"></div>
      <div class="toolLabel" id="videoLabel">close</div>
    </t-button>
    <t-button variant="text" theme="default" class="toolButton" id="chat" @click="handleChatBoard">
      <div class="toolIcon" id="chatIcon"></div>
      <div class="toolLabel" id="chatLabel">chat</div>
    </t-button>
    <chat-board v-if="showChatBoard"></chat-board>
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
import TRTC from "trtc-js-sdk";
import {MessagePlugin} from "tdesign-vue-next"
import {roomIDStore} from "@/store";
import ChatBoard from "@/components/InterviewView/InterviewComponents/chatBoard";
export default {
  components: {ChatBoard},
  async setup(){
    const toolIcon = true;
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

    const client = TRTC.createClient({
      sdkAppId: 1400735136,   // 填写您申请的 sdkAppId
      userId: 'test',    // 填写您业务对应的 userId
      userSig: 'eJwtzFELgjAUhuH-cq5Djs5NJ3RREUGEBXlR3tU24xDm2kYE0X-P1Mvv*eD9QLU7Ri-joIAkQpgNm7R5BGpo4GB8mNzr*8Va0lDEKWLGeMzE*Ji3JWd655wniDhqoPZvQjAp81ykU4VufbZpyu65l5Vco-O1b1fLOmd46ip3WGy251JlCbsq8qxTc-j*APX8MOs_',   // 填写服务器或本地计算的 userSig
      mode: 'rtc'
    });

    try {
      const roomIDStore1 = roomIDStore();
      await client.join({
        roomId: roomIDStore1.roomID,
        role: 'anchor'
      });
    } catch (error) {
      await MessagePlugin.warning('Failed Entering Meeting Room');
      console.log(error)
    }

    const localStream = TRTC.createStream({ userId:"test", audio: true, video: true });
    try {
      await client.publish(localStream);
      console.log('本地流发布成功');
    } catch (error) {
      console.error('本地流发布失败 ' + error);
    }

    return{
      time,
      localStream,
      toolIcon
    }
  },
  data(){
    return{
      title: "Test Meeting",
      roomID: this.$route.params.roomID,
      videoIcon: ref(true),
      blindIcon: ref(false),
      microphoneIcon: ref(true),
      muteIcon: ref(false),
      showChatBoard: ref(false)
    }
  },
  async beforeMount() {
    try {
      await this.localStream.initialize();
      console.log('初始化本地流成功');
      // 播放本地流，'local_stream' 是在 DOM 中的一个 div 标签的 ID
      await this.localStream.play('myVideo');
    } catch (error) {
      console.error('初始化本地流失败 ' + error);
    }
  },
  methods:{
    async handleVideo() {
      if (this.videoIcon) {
        this.videoIcon = false;
        this.blindIcon = true;
        const videoTrack = this.localStream.getVideoTrack();
        if (videoTrack) {
          await this.localStream.removeTrack(videoTrack);
          videoTrack.stop();
        }
      }else {
        this.videoIcon = true;
        this.blindIcon = false;
        const videoStream = TRTC.createStream({ userId: "test", audio: false, video: true });
        await videoStream.initialize();
        await this.localStream.addTrack(videoStream.getVideoTrack());
      }
    },
    async handleMicrophone(){
      if (this.microphoneIcon){
        this.microphoneIcon = false;
        this.muteIcon = true;
        this.localStream.muteAudio();
      }else {
        this.microphoneIcon = true;
        this.muteIcon = false;
        this.localStream.unmuteAudio();
      }
},
    handleChatBoard(){
      this.showChatBoard = !(this.showChatBoard)
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
.interviewers{
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow-y: auto;
}
.nameTag{
  background-color: var(--td-gray-color-8);
  position: absolute;
  top: 178px;
  padding-left: 5px;
  padding-right: 5px;
}
.interviewer{
  width: 100%;
  min-height: 200px;
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
.microphoneIcon{
  background-image: url("../../image/micro_phone.svg");
  background-size: 30%;
}
.muteIcon{
  background-image: url("../../image/microphone-slash.svg");
  background-size: 50%;
}

#video{
  grid-area: 1 / 2 / 2 / 3;
}
.videoIcon{
  background-image: url("../../image/video.svg");
  background-size: 50%;
}
.blindIcon{
  background-image: url("../../image/video-slash.svg");
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