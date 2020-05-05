<template>
  <div class="main-contact">
    <div class="company-text">
      <p
        ref="Company"
        class="font-sans font-semibold text-xl tracking-tight"
        id="company-big-font"
      >
        Contact
      </p>

      <p class="font-sans font-hairline text-semi tracking-tight midletext">
        {{ msg }}
      </p>
      <br />
      <div id="map">
        <GmapMap
          :center="{ lat: 35.4946423, lng: 139.4805857 }"
          :zoom="10"
          map-type-id="terrain"
          ref="mapRef"
          style="width: 70%; height: 300px"
          class="map"
        ></GmapMap>
      </div>
      <p
        class="font-sans font-hairline tracking-tight text-xs rowtext"
        id="company-samll-font"
      >
        お客様のビジネスを正しく理解して<br />
        プロジェクトの成功を実行するため最善を尽くしています。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      msg: "「Here I satand for you」",
      map: ""
    };
  },
  methods: {},
  mounted() {
    this.$refs.mapRef.$mapPromise.then(map => {
      map.panTo({ lat: 35.4946423, lng: 139.4805857 });
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.company-text p {
  font-family: "Noto Sans JP", sans-serif;
  text-align: center;
  color: #2d38a9;
  font-size: 1.52543em;
}

#company-big-font {
  font-size: 38px;
}

#company-samll-font {
  font-size: 0.82543em;
  line-height: 40px;
}

.map {
  text-align: center;
  margin: 0 auto;
}
.midletext {
  margin-top: 3%;
  margin-bottom: 1%;
}

.rowtext {
  margin-top: 1%;
}
</style>
