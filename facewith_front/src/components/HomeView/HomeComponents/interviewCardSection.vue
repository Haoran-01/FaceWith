<template>
  <t-card style="width: 100%;margin-top: 24px" hoverShadow>
    <template #avatar>
      <t-avatar size="56px"  :hide-on-load-failed="false"/>
      <span style="position: relative; left: 10px; font-size: large">{{title}}</span>
      <span style="position: relative; left: 20px; color: var( --td-bg-color-component-active )">ID:{{roomID}}</span>
    </template>
    <template #actions>
      <t-button @click="prepare">
        <template #icon>
          <t-icon name="caret-right"/>
        </template>
        Prepare & Start</t-button>
      <t-dialog :visible="prepareVisibility" :on-close="prepareClose" header="check info" :on-confirm="enterMeeting" confirm-btn="Enter the Meeting" cancel-btn="Save & Close">
        <t-form>
          <t-form-item label="Title">
            <t-input v-model="title" style="width: 240px"></t-input>
          </t-form-item>
          <t-form-item label="Interviewee">
            <t-input v-model="interviewee" disabled style="width: 240px"></t-input>
          </t-form-item>
          <t-form-item label="Start Time">
              <t-time-picker v-model="startTime" format="HH:mm"></t-time-picker>
          </t-form-item>
          <t-form-item label="End Time">
            <t-time-picker v-model="endTime" format="HH:mm"></t-time-picker>
          </t-form-item>
          <t-tag v-for="(tag, key) in tags" :key="key" theme="primary" variant="light" style="margin-left: 10px; margin-bottom: 24px" closable @close="handleClose(key)">{{ tag }}</t-tag>
          <t-form-item>
            <t-tag v-if="!inputVisible" @click="handleClickAdd" style="position: relative; right: 90px;">
              <template #icon>
                <t-icon name="add"/>
              </template>
              add tag
            </t-tag>
            <t-input v-else ref="input" size="small" style="width: 94px; position: relative; right: 90px;" @blur="handleInputEnter" @enter="handleInputEnter" />
          </t-form-item>
        </t-form>
      </t-dialog>
    </template>
    <span style="font-size: 28px; position: relative; left: 10px;">{{startTime}}~{{endTime}}</span>
    <div style="position: relative; display: inline-block; left: 10px; bottom: 4px">
      <t-tag v-for="(tag, key) in tags" :key="key" theme="primary" variant="light" style="margin-left: 10px;">{{ tag }}</t-tag>
    </div>
    <template #footer>
      <t-avatar-group>
        <div v-for="(i, k) in this.item.interviewers" :key="k">
          <f-avatar  v-bind="{i, k}" ></f-avatar>
        </div>
      </t-avatar-group>
      <t-button @click="invite" variant="text" size="large" shape="square" style="float: right;">
        <template #icon>
          <t-icon name="user-add"></t-icon>
        </template>
        </t-button>
      <t-dialog :visible="inviteVisibility" :on-close="inviteClose" header="Invite" confirm-btn="Confirm" cancel-btn="Cancel">
        <h1>Directly Invite</h1>
                  <t-input-group>
                    <t-input placeholder="Interviewer ID"></t-input>
                    <t-button theme="primary" type="submit" block>Invite</t-button>
                  </t-input-group>
        <h1>Invite through link</h1>
          <t-input-group>
            <t-input v-model="inviteLink" placeholder="" disabled></t-input>
            <t-button block @click="handleCopy(inviteLink)">
              <template #icon>
                <t-icon name="file-copy"/>
              </template>
            </t-button>
          </t-input-group>
      </t-dialog>
    </template>
  </t-card>
</template>

<script>
import {ref} from "vue";
import FAvatar from "@/components/HomeView/HomeComponents/fAvatar";
import {toClipboard} from "@soerenmartius/vue3-clipboard";
import router from "@/router";
import {roomIDStore} from "@/store";
export default {
  components: {FAvatar},
  props:["item", "index"],
  name: "interviewCardSection",
  setup(){
    const prepareVisibility = ref(false);
    const prepare = () => {
      prepareVisibility.value = true;
    }
    const prepareClose = () => {
      prepareVisibility.value = false;
    }
    const inviteVisibility = ref(false);
    const invite = () => {
      inviteVisibility.value = true;
    }
    const inviteClose = () => {
      inviteVisibility.value = false;
    }
    const roomIDStore1 = roomIDStore();

    return {
      prepareVisibility,
      prepare,
      prepareClose,
      inviteVisibility,
      invite,
      inviteClose,
      roomIDStore1
    }
  },
  data(){
    return {
      startTime: ref(this.item.startTime),
      endTime: ref(this.item.endTime),
      tags: ref(this.item.tags),
      inputVisible: ref(false),
      input: ref(''),
      title: ref(this.item.title),
      interviewee: this.item.interviewee,
      roomID: this.item.roomID,
      inviteLink: this.item.inviteLink
    }
  },
  methods: {
    handleClose(index){
      console.log(index)
      this.tags.splice(index, 1);
    },
    handleInputEnter(val){
      if (val && !this.tags.some((item) => item.name === val)) {
        this.tags.push(val);
      }
      this.inputVisible = false;
    },
    handleClickAdd(){
      this.inputVisible = true;
    },
    handleCopy(val){
      toClipboard(val);
      this.$message.success({ content: 'Copied', duration: 2000 })
    },
    enterMeeting(){
      this.roomIDStore1.roomID = this.roomID;
      router.push({path: '/meeting', name: 'meeting', params: {roomID: this.roomID}})
    }
  }
}
</script>

<style scoped>

</style>