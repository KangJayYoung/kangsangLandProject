<template>
  <div class="main-works">
    <div class="company-text">
      <p
        ref="Company"
        class="font-sans font-semibold text-xl tracking-tight"
        id="company-big-font"
      >
        Works
      </p>
      <p class="font-sans font-hairline text-semi tracking-tight">{{ msg }}</p>
      <br />
      <p
        class="font-sans font-hairline tracking-tight text-xs"
        id="company-samll-font"
      >
        フール―スタックエンジニアを目指して、
        <br />日々懸命に新しいスキルの勉強に努めて参ります
        <br />
      </p>
      <button
        @click="popUp"
        class="btcus bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Detail
      </button>

      <div
        v-show="show"
        class="cursor-wait box-content md:flex bg-white shadow-lg rounded-lg p-6 popup fadein boxsize"
      >
        <img
          class="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
          src="..\assets\010.jpg"
        />
        <div
          class="text-center md:text-left cursor-wait"
          style="line-height:150%"
        >
          <h2 class="text-lg">Kang JayYoung</h2>
          <div class="text-purple-500">System Engineer</div>
          <div class="text-gray-600">kangjay0@yahoo.co.jp</div>
          <div class="text-gray-600">すみません。まだ工事中です。</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Works",
  data() {
    return {
      msg: "「FrontEnd・SeverSide・AWS・RDBS」",
      show: false
    };
  },
  methods: {
    popUp() {
      this.show = true;
      setTimeout(this.popDown, 3000);
    },
    popDown() {
      this.show = false;
    }
  }
};
</script>

<style Lang="scss" scoped>
.fadein {
  animation: fadein 2s;
  -webkit-animation: fadein 2s;
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@-webkit-keyframes fadein {
  /* Safari and Chrome */
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.company-text p {
  font-family: "Noto Sans JP", sans-serif;
  z-index: 1;
  margin-top: 40px;
  position: relative;
  text-align: center;
  color: #2d38a9;
  font-size: 1.19543em;
}

#company-big-font {
  font-size: 38px;
}

#company-samll-font {
  font-size: 1.016543em;
  line-height: 40px;
}
.btcus {
  background-color: #2d38a9;
  margin-top: 50px;
}

.popup {
  z-index: 2;
  width: 350px;
  position: absolute;
  left: 17%;
  bottom: 26%;
}

.boxsize {
  width: 10%;
  line-height: 200%;
  font-size: 0.8em;
}
</style>
