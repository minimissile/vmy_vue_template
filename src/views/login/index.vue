<template>
  <div>
    登录
    <br>
    <router-link to='/home'>跳转到首页</router-link>
    <br>
    <br>
    <van-button type="default" @click="getList">默认按钮</van-button>
  </div>
</template>

<script>
  import request from '../../utils/request'
  import api from '../../api/api'
  import {Button} from 'vant';
  import {mapState, mapActions} from "vuex"
  import {getType} from '../../utils'

  export default {
    name: "login",
    components: {
      vanButton: Button
    },
    data() {
      return {
        params: {
          pageSize: 20,
          pageNum: 1,
          provincesName: ''
        }
      }
    },
    methods: {
      ...mapActions("userStore", ["dynamicList"]),
      ...mapActions(["reset"]),

      getList() {
        this.dynamicList(this.params).then(res => {
          console.log('getList', getType(res))
          console.log(123, res);
          // this.$toast('加载完成')
          // this.reset()
        })
      }
    }
  }
</script>

<style scoped>

</style>
