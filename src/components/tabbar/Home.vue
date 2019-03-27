<template>
  <div class="home">
    <swiper :lunbotuList="lunbotuList"></swiper>
    <gird></gird>
  </div>
</template>

<script>
import { Toast } from 'vant'
import Gird from '../subcomponent/Gird'
import Swiper from '../subcomponent/Swiper'

export default {
  data: () => ({
    lunbotuList: []
  }),
  created () {
    this.getlunbotu()
  },
  methods: {
    async getlunbotu () {
      const {
        data: { status, message }
      } = await this.$http.get('api/getlunbo')
      if (status === 0) {
        this.lunbotuList = message
      } else {
        Toast('请求轮播图数据失败')
      }
    }
  },
  components: {
    Gird,
    Swiper
  }
}
</script>

<style lang="less">
.home {
  .demo-swipe {
    height: 200px;
    .item {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
