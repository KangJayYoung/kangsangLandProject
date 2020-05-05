<template>
  <div id="app">
    <ul id="menu">
      <div class="ver flex flex-wrap bg-teal-300 p-5">
        <li data-menuanchor="page1" class="active">
          <a @click="$refs.fullpage.api.moveTo('page1', 0)">HOME</a>
        </li>
        <li>
          <a @click="$refs.fullpage.api.moveTo('page2', 0)">WORKS</a>
        </li>
        <li>
          <a @click="$refs.fullpage.api.moveTo('page3', 0)">POLICY</a>
        </li>
        <li>
          <a @click="$refs.fullpage.api.moveTo('page4', 0)">CONTACT</a>
        </li>
      </div>
    </ul>
    <ul class="actions"></ul>

    <full-page :options="options" id="fullpage" ref="fullpage">
      <div class="section">
        <index class="vedio-fix"></index>
      </div>
      <div class="section">
        <div class="slide">
          <main-works></main-works>
        </div>
        <div class="slide">
          <main-companytwo></main-companytwo>
        </div>
        <div class="slide">
          <main-companythree></main-companythree>
        </div>
      </div>
      <div class="section">
        <main-company></main-company>
      </div>
      <div class="section">
        <main-contact></main-contact>
      </div>
    </full-page>
  </div>
</template>

<script>
import Index from "./components/Index.vue";
import Company from "./components/Company.vue";
import CompanyTwo from "./components/CompanyTwo.vue";
import CompanyThree from "./components/CompanyThree.vue";
import Contact from "./components/Contact.vue";
import Works from "./components/Works.vue";
export default {
  name: "App",
  components: {
    index: Index,
    "main-company": Company,
    "main-contact": Contact,
    "main-works": Works,
    "main-companytwo": CompanyTwo,
    "main-companythree": CompanyThree
  },
  data() {
    return {
      options: {
        afterLoad: this.afterLoad,
        scrollOverflow: false,
        scrollBar: false,
        menu: "#menu",
        navigation: true,
        anchors: ["page1", "page2", "page3", "page4"],
        sectionsColor: [
          "#000000",
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#1bcee6",
          "#ee1a59",
          "#2c3e4f",
          "#ba5be9",
          "#b4b8ab"
        ]
      }
    };
  },
  methods: {
    afterLoad() {
      console.log("After load");
    },
    toggleNavigation() {
      this.options.navigation = !this.options.navigation;
    },
    toggleScrollbar() {
      console.log("Changing scrollbar...");
      this.options.scrollBar = !this.options.scrollBar;
    },
    home(url) {
      this.$refs.fullpage.api.moveTo("page1", 0);
    }
  },
  created: function() {
    //this.$nextTick(this.home);
  },
  updated() {
    this.$ref.fullpage_api.reBuild();
  }
};
</script>

<style>
@import "./style/reset.css";
#app {
  font-family: "Awesome Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: aliceblue;
  cursor: pointer;
}
.fp-controlArrow.fp-prev {
  border-color: transparent #171d5a55 transparent !important;
}
.fp-controlArrow.fp-next {
  border-color: transparent transparent transparent #171d5a55;
}
.ver {
  width: 100%;
  background-color: #171d5abf;
  position: sticky;
  top: 0;
  height: 10px;
  line-height: 1px;
  z-index: 100;
}
</style>
