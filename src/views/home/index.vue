<template>
  <div>
    首页
    <br/>
    <br/>
    <router-link to='/login'>跳转到登录</router-link>
    <br>
    <br>
    <div @click="geHot">获取热门动态</div>
  </div>
</template>

<script>
  import request from '../../utils/request'
  import api from '../../api/api'

  export default {
    name: "home",
    mounted() {
      console.log(this.$store);
    },
    methods: {

      geHot() {
        console.time('geHot1')
        request.get(api["dynamic.list"], {
          params: {
            pageSize: 20,
            pageNum: 1,
            provincesName: ''
          }
        }).then(res => {
          console.timeEnd('geHot1')
        })
      }
    }
  }
</script>

<style scoped>

</style>
