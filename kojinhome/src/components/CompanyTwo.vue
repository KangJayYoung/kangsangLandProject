<template>
  <div class="main-companytwo">
    <div class="company-text">
      <p
        ref="Company"
        class="font-sans font-semibold text-xl tracking-tight"
        id="company-big-font"
      >
        SKILLLIST
      </p>
      <p class="font-sans font-hairline text-semi tracking-tight">{{ msg }}</p>
      <br />

      <div id="slider">
        <div class="imgbox">
          <img
            class="imgfix box-content md:flex bg-white shadow-lg rounded-lg p-6 fadding-photo"
            src="../assets/html.png"
          />
          <img
            class="imgfix box-content md:flex bg-white shadow-lg rounded-lg p-6 fadding-photo"
            src="../assets/amazon.png"
          />

          <img
            class="imgfix box-content md:flex bg-white shadow-lg rounded-lg p-6 fadding-photo"
            src="../assets/boot.png"
          />
          <img
            class="imgfix box-content md:flex bg-white shadow-lg rounded-lg p-6 fadding-photo"
            src="../assets/jq.png"
          />
        </div>
        <div class="imgbox">
          <img
            class="imgfix box-content md:flex bg-white shadow-lg rounded-lg p-6 fadding-photo"
            src="../assets/java.png"
          />
          <img
            class="imgfix box-content md:flex bg-white shadow-lg rounded-lg p-6 fadding-photo"
            src="../assets/vue.png"
          />
          <img
            class="imgfix box-content md:flex bg-white shadow-lg rounded-lg p-6 fadding-photo"
            src="../assets/node.png"
          />
          <img
            class="imgfix box-content md:flex bg-white shadow-lg rounded-lg p-6 fadding-photo"
            src="../assets/sql.png"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompanyTwo",
  props: {
    value: {
      show: "",
      showtwo: ""
    }
  },
  data() {
    return {
      msg: "「一人ではなく、協業するためのスキル」"
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.company-text p {
  font-family: "Noto Sans JP", sans-serif;
  margin-top: 20px;
  text-align: center;
  color: #2d38a9;
  font-size: 1.22543em;
}

#company-big-font {
  font-size: 38px;
}

#company-samll-font {
  font-size: 20px;
  line-height: 40px;
}

#slider {
  display: inline-block;
  margin-top: 20px;
  text-align: center;
}
#slidertwo {
  display: inline-block;
}
.imgfix {
  width: 13%;
  height: auto;
  float: left;
  padding: 4%;
  margin-bottom: 1%;
}

.fadding-photo:hover {
  opacity: 0.1;
  transition: opacity 1s;
}

.fadein:hover {
  opacity: 100;
  transition: opacity 1s;
}
.fadein {
  opacity: 0;
  transition: opacity 1s;
}

.imgdiv {
  line-height: 30px;
  text-align: left;
  position: absolute;
}
.levelsokusei {
  margin: 10px;
}

.imgbox {
  margin-left: 15%;
}
</style>
