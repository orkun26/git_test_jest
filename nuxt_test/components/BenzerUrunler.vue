<template>
  <div class="container">
    <h4>Benzer Ürünler</h4>
    <hr />
    <div class="scroll-olacak">
      <span class="ok sag">
        <button @click="kaydir(true)">
          <img height="25" width="25" src="../assets/icons/rightb.PNG" />
        </button>
      </span>
      <span class="ok sol">
        <button @click="kaydir(false)" button="arrow-left">
          <img height="25" width="25" src="../assets/icons/leftb.PNG" />
        </button>
      </span>
      <div
        ref="urunler"
        style="position: relative"
        :style="{ left: left + 'rem' }"
        class="urunler d-flex"
      >
        <div v-for="(urun, index) in urunler" :key="index" class="card urun">
          <nuxt-link :to="'/urun-detay/' + urun.id">
            <img class="card-img-top" :src="urun.image" alt="Card image cap" />
          </nuxt-link>
          <div class="card-body text-center">
            <h5 class="card-title">{{ urun.title }}</h5>
            <div
              class="d-flex flex-row justify-content-center align-items-center"
            >
              <div class="bg-danger text-light rounded p-2">
                {{ parseInt(100 - (urun.price / (urun.price + 200)) * 100) }}%
              </div>
              <div class="d-flex flex-column">
                <span class="text-secondary"
                  ><del> {{ urun.price + 200 }}TL </del></span
                >
                <span> {{ urun.price }}TL</span>
              </div>
            </div>
            <a
              href="/sepet"
              class="mt-3 w-75 btn btn-outline-secondary rounded-btn"
              ><img
                height="20"
                width="20 "
                src="../assets/icons/SepetEkle.PNG"
              />
              Sepete Ekle</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    const messageRef = this.$fire.database.ref("/");
    axios.get(messageRef.toString() + ".json").then((res) => {
      console.log(res.data);
      this.urunler = res.data;
    });
  },
  data() {
    return {
      left: 0,
      urunler: [
        // {
        //   baslik: "Orkun Ayakkabı",
        //   eskiFiyat: 50.0,
        //   fiyat: 30,
        //   indirim: 40,
        //   resim: require("../assets/icons/ayakkabi.jpg"),
        // },
      ],
    };
  },
  methods: {
    kaydir(sagaMi) {
      if (sagaMi) this.left -= 18;
      else this.left += 18;
      if (this.left * -1 >= this.$refs.urunler.scrollWidth / 16 - 4 * 18) {
        this.left = 0;
      }
      if (this.left > 0) {
        this.left = 0;
      }
    },
  },
};
</script>

<style>
.rounded-btn {
  border-radius: 70px !important;
}
.urun {
  border: none !important;
  width: 18rem;
}
.urunler {
  width: max-content;
  transition: all 1s ease;
}
.scroll-olacak {
  position: relative;
  overflow: hidden;
}
.ok {
  padding: 5px;

  border-radius: 30px;
  top: 30%;
  text-align: center;
  z-index: 9;

  position: absolute;
}
.sag {
  right: -5px;
}
.sol {
  left: -5px;
}
</style>