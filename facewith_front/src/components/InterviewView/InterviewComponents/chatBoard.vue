<template>
<div class="chatBoard">
  <t-list>
    <t-list-item v-for="(item, index) in commentsData" :key="index">
      <template #content>
        <t-comment :author="item.author" :datetime="item.datetime" :content="item.content">
        </t-comment>
      </template>
    </t-list-item>
  </t-list>
  <div class="tools">
    <t-input theme="light" style="width: 250px;"></t-input>
    <t-button>send</t-button>
  </div>
</div>
</template>

<script>
export default {
  setup(){
    const commentsData = [
      {
        id: 'A',
        avatar: 'w',
        author: '评论作者名A',
        datetime: '今天16:38',
        content: '评论作者名A写的评论内容。',
      },
      {
        id: 'B',
        avatar: 'https://tdesign.gtimg.com/site/avatar.jpg',
        author: '评论作者名B',
        datetime: '今天16:38',
        content: '评论作者名B写的评论内容。',
      },
      {
        id: 'C',
        avatar: 'https://tdesign.gtimg.com/site/avatar.jpg',
        author: '评论作者名C',
        datetime: '今天16:38',
        content: '评论作者名C写的评论内容。',
      },
      {
        id: 'C',
        avatar: 'https://tdesign.gtimg.com/site/avatar.jpg',
        author: '评论作者名C',
        datetime: '今天16:38',
        content: '评论作者名C写的评论内容。',
      },
      {
        id: 'C',
        avatar: 'https://tdesign.gtimg.com/site/avatar.jpg',
        author: '评论作者名C',
        datetime: '今天16:38',
        content: '评论作者名C写的评论内容。',
      },
        ]
    return{
      commentsData
    }
  },
  name: "chatBoard"
}
</script>

<style scoped>
.chatBoard{
  width: 400px;
  height: 600px;
  background-color: var(--td-bg-color-page);
  border-radius: 9px;
  border: 1px solid var(--td-component-border);
  position: absolute;
  bottom: 80px;
  left: calc(50vw - 200px);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 100px;
  overflow: hidden;
}
.messages{

}
.tools{
  display: flex;
  align-items: center;
  justify-content: space-around;
  }

</style>