<template>
  <div class="wrap">
    <Uploader
      :before-read="beforeRead"
      :after-read="afterRead"
      :accept="accept"
      result-type="file"
      :max-count="maxSize">
      <slot></slot>
    </Uploader>
  </div>
</template>

<script>
  import {Uploader, Toast} from 'vant';
  import OSS from 'ali-oss';
  import {getOssKey} from '../../api/othr'
  import request from '../../utils/request'

  export default {
    name: "Upload",
    components: {
      Uploader,
    },
    props: {
      type: {
        type: Number,
        required: true
      },
      beforeRead: {
        type: Function,
        default: () => true,
      },
      // 回调地址
      onChange: {
        type: Function,
        default: path => console.log(path)
      },
      accept: {
        type: String,
        default: 'image/*'
      },
      'max-size': {
        type: [String, Number],
      }
    },
    methods: {
      /**
       * 获取oss key
       * @param type 0视频1头像 2banner3公共4朋友圈5活动6项目 7自定义名片 8 投诉9 个人详情
       * @returns {Promise<AxiosResponse<T>>}
       */
      async getOssKey(type) {
        const data = await request.get('/sms/oss', {
          params: {
            type: type
          }
        })
        return data
      },


      async afterRead(F) {
        const ossData = await this.getOssKey(this.type)
        if (ossData.ok) {
          let suffix = '';
          if (F.file && F.file.name && F.file.name.lastIndexOf('.') > -1) {
            const name = F.file.name
            suffix = name.slice(name.lastIndexOf('.'))
          }
          const ossParams = ossData.data
          let fileName = 'ossfile' + new Date().getTime() + Math.random().toString(16).slice(-8)
          if (suffix) fileName += suffix
          const toast = Toast.loading({
            duration: 0,
            forbidClick: true,
            message: '上传中...'
          })
          const uploadProcess = num => {
            toast.message = `上传中...${num}%`
          }
          const client = new OSS({
            region: 'oss-cn-shenzhen',
            accessKeyId: ossParams.accessKeyId,
            accessKeySecret: ossParams.accessKeySecret,
            stsToken: ossParams.securityToken,
            bucket: ossParams.bucket
          })
          try {
            await client.multipartUpload(fileName, F.file, {
              progress: uploadProcess,
              meta: {}
            });
            let head = await client.head(fileName);
            this.onChange(head.res.requestUrls[0])
            toast.clear()
          } catch (e) {
            // 捕获超时异常
            if (e.code === 'ConnectionTimeoutError') {
              // do ConnectionTimeoutError operation
            }
            Toast('上传失败')
            toast.clear()
          }
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .wrap {
    font-size: 0.16rem;
  }
</style>
