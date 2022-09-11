<template>
  <div>
    <t-avatar @click="irVisible">{{ this.i.name }}</t-avatar>
    <t-dialog :visible="visible" :on-close="handleClose" :header="this.i.name">
      <t-list>
        <t-list-item>
          <t-list-item-meta title="ID" :description="this.i.id"></t-list-item-meta>
          <template #action>
            <t-button variant="text" shape="square" @click="handleCopy(this.i.id)">
              <template #icon>
                <t-icon name="file-copy"/>
              </template>
            </t-button>
          </template>
        </t-list-item>
        <t-list-item>
          <t-list-item-meta title="Job" :description="this.i.job"></t-list-item-meta>
        </t-list-item>
        <t-list-item>
          <t-list-item-meta title="Department" :description="this.i.department"></t-list-item-meta>
        </t-list-item>
        <t-list-item>
          <t-list-item-meta title="Tel" :description="this.i.tel"></t-list-item-meta>
          <template #action>
              <t-button variant="text" shape="square" @click="handleCopy(this.i.id)">
                <template #icon>
                  <t-icon name="file-copy"/>
                </template>
              </t-button>
            </template>
        </t-list-item>
      </t-list>
    </t-dialog>
  </div>

</template>

<script>
import {ref} from "vue";
import { toClipboard } from '@soerenmartius/vue3-clipboard';

export default {
  name: "fAvatar",
  props: ["i", "k"],
  setup(){
    const visible=ref(false);
    const irVisible = () => {
      visible.value = true;
    };
    const handleClose = () => {
      visible.value = false;
    };
    return {
      visible,
      irVisible,
      handleClose
    }
  },
  methods:{
    handleCopy(val){
      toClipboard(val);
      this.$message.success({ content: 'Copied', duration: 2000 });
    }
  }
}
</script>

<style scoped>

</style>