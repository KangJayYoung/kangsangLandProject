<template>
  <div class="main-companythree">
    <div class="company-text">
      <p
        ref="Company"
        class="font-sans font-semibold text-xl tracking-tight"
        id="company-big-font"
        style="margin-bottom:50px"
      >
        PROJECT
      </p>

      <p class="font-sans font-hairline text-semi tracking-tight subtitle">
        {{ msg }}
      </p>

      <p class="font-sans font-hairline text-semi tracking-tight midletitle">
        <i class="fab fa-android"></i>&nbsp;韓国 通信社向けスポーツアプリ保守
      </p>
      <p class="font-sans font-hairline text-semi tracking-tight midletitle">
        <i class="fab fa-vuejs"></i>
        &nbsp;日本 通信社向けチャットボットAPI/管理者ページ開発
      </p>
      <p class="font-sans font-hairline text-semi tracking-tight midletitle">
        <i class="fab fa-amazon"></i>&nbsp;日本 AWS 社内中継サーバー機能実装
      </p>
      <p class="font-sans font-hairline text-semi tracking-tight midletitle">
        <i class="fab fa-java"></i>&nbsp;日本
        通信社向け検収・会計システム開発（現在）
      </p>
      <p class="font-sans font-hairline text-semi tracking-tight midletitle">
        <i class="fas fa-globe-americas"></i>&nbsp;日本語能力試験1級
      </p>
      <p class="font-sans font-hairline text-semi tracking-tight midletitle">
        <i class="fas fa-laptop-code"></i>&nbsp;情報処理技師
      </p>
      <p class="font-sans font-hairline text-semi tracking-tight midletitle">
        <i class="fas fa-medal"></i>&nbsp;韓国軍新武器体系開発アイデア公募展 /
        優秀
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompanyThree",
  props: {
    value: {}
  },
  data() {
    return {
      msg: "「WEB/APP システム開発」"
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.company-text p {
  font-family: "Noto Sans JP", sans-serif;
  margin-top: 25px;
  text-align: center;
  color: #2d38a9;
}
.subtitle {
  font-size: 1.63235em;
  margin-bottom: 3%;
}

.midletitle {
  font-size: 0.91135em;
}

#company-big-font {
  font-size: 38px;
}

#company-samll-font {
  font-size: 20px;
  line-height: 40px;
}

#slider {
  margin-top: 20px;
  text-align: center;
  padding-left: 13%;
}
.imgfix {
  width: 40%;
  height: 400px;
  float: left;
  display: flow-root;
  margin-left: auto;
  margin-right: auto;
}
</style>
