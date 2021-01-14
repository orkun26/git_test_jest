<template>
  <div class="container">
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div
          v-for="(foto, index) in fotolar"
          :key="index + 98785"
          class="carousel-item"
          :class="index == seciliFoto ? 'active' : ''"
        >
          <img :src="foto" class="d-block w-100" />
        </div>
      </div>
      <a
        @click="slaytDegis(-1)"
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        @click="slaytDegis(1)"
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
import Resim1 from "../assets/images/1.png";
import Resim2 from "../assets/images/2.png";
import Resim3 from "../assets/images/3.png";
import Resim4 from "../assets/images/4.png";
export default {
  data() {
    return {
      seciliFoto: 0,
      fotolar: [Resim1, Resim2, Resim3, Resim4],
    };
  },
  mounted() {
    setInterval(() => {
      this.slaytDegis(1);
    }, 1500);
  },
  methods: {
    slaytDegis(yon) {
      if (yon == 1 && this.seciliFoto == 3) this.seciliFoto = 0;
      else if (yon == -1 && this.seciliFoto == 0) this.seciliFoto = 3;
      else if (yon == -1 && this.seciliFoto >= 1) this.seciliFoto--;
      else if (yon == 1 && this.seciliFoto < 3) this.seciliFoto++;
    },
  },
};
</script>

<style>
</style>