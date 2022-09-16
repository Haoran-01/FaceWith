<template>
<div class="main">
  <t-form style="margin-bottom: 32px">
    <t-form-item name="IDSearch" label="Interviewee ID">
      <t-input-group>
        <t-input></t-input>
        <t-button>
          Search
        </t-button>
      </t-input-group>
    </t-form-item>
  </t-form>
  <t-table
      row-key="key"
    :columns="columns"
    :data="tableData"
    :pagination="{ defaultCurrent: 1, defaultPageSize: 5, total: TOTAL }"
    resizable
  >
  </t-table>
</div>
</template>

<script>

import {computed, ref} from "vue";
import {DatePicker, Input, Select} from "tdesign-vue-next";

export default {
  setup(){
    const theme=ref(false);
    const TOTAL=ref(1);
    const changeTheme = () => {
      if (theme.value){
        document.documentElement.setAttribute('theme-mode', 'dark');
      }else {
        document.documentElement.removeAttribute('theme-mode');
      }
    };
    const STATUS_OPTIONS = [
      { label: 'Not Interviewed', value: 'not' },
      { label: 'First Interviewed', value: 'first' },
      { label: 'Second Interviewed', value: 'second' },
      { label: 'Passed', value: 'success' },
      { label: 'Denied', value: 'deny' },
      { label: 'Cancelled', value: 'cancel' },
    ];
    const tableData = ref([{id: 1, name: 1, status: 'success', lid: ['1991-1-10']},{id: 2, name: 1, status: 'success', lid: ['1978-1-10']}]);
    const columns = computed(() => [
      {
        colKey: 'id',
        title: 'ID',
        width: 120
      },
      { colKey: 'name',
        title: 'name',
        edit: {
          component: Input,
          props: {
            clearable: true,
            autofocus: true,
          },
          abortEditOnEvent: ['onEnter'],
          onEdited: (context) => {
            tableData.value.splice(context.rowIndex, 1, context.newRowData);
          },
          rules: [
            { required: true, message: 'Should Not be Empty' },
            { max: 10, message: '字符数量不能超过 10', type: 'warning' },
          ],
        },
        width: 120
      },
      { colKey: 'status',
        title: 'status',
        cell: (h, { row }) => STATUS_OPTIONS.find((t) => t.value === row.status)?.label,
        edit: {
          component: Select,
          abortEditOnEvent: ['onChange'],
          props: {
            clearable: true,
            options: STATUS_OPTIONS,
          },
          onEdited: (context) => {
            tableData.value.splice(context.rowIndex, 1, context.newRowData);
          },
        },
        width: 120
      },
      { colKey: 'lid',
        title: 'Last Interview Date',
        sorter: true,
        edit: {
          component: DatePicker,
          // props, 透传全部属性到 DatePicker 组件
          props: {},
          // 除了点击非自身元素退出编辑态之外，还有哪些事件退出编辑态
          abortEditOnEvent: ['onChange'],
          onEdited: (context) => {
            tableData.value.splice(context.rowIndex, 1, context.newRowData);
          },
        },
        width: 120 },
    ])
    return {
      theme,
      changeTheme,
      columns,
      tableData,
      TOTAL
    }
  },
  name: "intervieweeManageView",/*
  data(){
    return{
      columns: [
        { colKey: 'id', title: 'ID', width: 120 },
        { colKey: 'name', title: 'name', width: 120 },
        { colKey: 'status', title: 'status', width: 120 },
        { colKey: 'lit', title: 'Last Interview Time', width: 120 },
        // Wait for further definition
        { colKey: 'action', title: 'Last Interview Time', width: 120 },
      ],
      data: [{id: 1, name: 1, status: 1, lit: 1, action: 1}]
    }
  }*/
}
</script>

<style scoped>
.main{
  margin: 24px;
  padding: 32px;
  box-sizing: border-box;
  height: calc(100% - 48px);
  background-color: var(--td-bg-color-container);
  box-shadow: var(--td-shadow-1);
  border-radius: 4px;
}
</style>