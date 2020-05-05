<template>
  <div class="main-vedio">
    <video
      ref="page1"
      loop="loop"
      autoplay="autoplay"
      muted="muted"
      playsinline
    >
      <source src="../assets/Shrine.mp4" type="video/mp4" />
    </video>
    <div class="jb-text">
      <h1 class="headtitle col-span-6">
        There
        <span>{{ typeValue }}</span>
        <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
      </h1>
      <transition name="fade">
        <p
          v-if="show"
          class="col-span-6 font-sans font-hairline main-font-setumei"
        >
          "Ipsum efficitur nisi ac turpis venenatis varius."
          <br />Suspendisse sed dictum leo ipsum amet pellentesque fusce
          achendrerit <br />consectetur tempor risus, sed eget semper nunc.
          <br />eleifend facilisis nisi vitae lorem ipsum dolor consequat
          loremipsum etiam.
          <br />
          <br />スクロール
        </p>
      </transition>

      <i class="fas fa-arrow-down icon-mainvedio new blink"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainVedio",
  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      typeArray: ["is no ", "compression", " algorithm"],
      typingSpeed: 200,
      erasingSpeed: 100,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0,
      show: false
    };
  },
  methods: {
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if (this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
    arawareText(count) {
      this.show = true;
    },
    playVedio() {}
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
    console.log("testset");
    setTimeout(this.arawareText, 2000);
  }
};
</script>

<style Lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

video {
  right: 0;
  bottom: 0;
  width: 100%;
  height: auto;
  min-width: 100%;
  z-index: -100;
  background-size: cover;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.jb-text {
  position: absolute;
  top: 25%;
  width: 100%;
  color: aliceblue;
  font-family: "Noto Sans JP", sans-serif;
}

.headtitle {
  font-size: 2.5rem;
}

.main-font-setumei {
  margin-top: 8%;
  font-size: 1.023232em;
  line-height: 200%;
}

.icon-mainvedio {
  margin-top: 20px;
}

.main-font-skroll {
  margin-top: 40px;
  font-size: 0.9323em;
}

span.cursor {
  display: inline-block;
  margin-left: 3px;
  width: 4px;
  background-color: #fff;
  animation: cursorBlink 1s infinite;
}
span.cursor.typing {
  animation: none;
}
@keyframes cursorBlink {
  49% {
    background-color: #fff;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}

.new {
  color: #ffffff;
  padding-left: 5px;
}
.blink {
  -webkit-animation: blink 1s linear infinite;
}
@keyframes blink {
  0% {
    color: #fff;
  }
  100% {
    color: rgba(68, 68, 68, 0.578);
  }
}
</style>
