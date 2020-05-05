<template>
  <div class="main-company">
    <div class="company-text">
      <p
        ref="Company"
        class="font-sans font-semibold text-xl tracking-tight"
        id="company-big-font"
      >
        POLICY
      </p>
      <p
        class="font-sans col-span-6 font-hairline text-semi tracking-tight midel-font"
      >
        {{ msg }}
      </p>
      <br />
      <p
        class="font-sans font-hairline tracking-tight text-xs"
        id="company-samll-font"
      >
        業務系アプリケーションの開発に加え、
        <br />WEB・APPシステム構築、AWS導入、
        <br />設計・製造・運用までサポートさせていただきます。
      </p>
      <button
        @click="getHub"
        class="btcus bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        ポリシーを見る
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Company",
  props: {
    value: {}
  },
  data() {
    return {
      msg: "「ITを活かし、社会に貢献する自分を目指します」"
    };
  },
  methods: {
    getHub() {
      const url = "https://github.com/simobeKang";
      document.location.href = url;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.company-text p {
  font-family: "Noto Sans JP", sans-serif;
  margin-top: 40px;
  text-align: center;
  color: #2d38a9;
}
.midel-font {
  font-size: 0.9999rem;
}
#company-big-font {
  font-size: 38px;
}

#company-samll-font {
  font-size: 0.92543em;
  line-height: 40px;
}
.btcus {
  background-color: #2d38a9;
  margin-top: 50px;
}
</style>
