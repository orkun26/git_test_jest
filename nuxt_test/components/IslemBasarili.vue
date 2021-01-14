<template>
  <div class="text-center">
    <img :src="ok" />
    <p class="h2">Başarılı !</p>
    <p class="text-secondary">İşlem başarıyla Gerçekleştirildi.</p>

    <a href="/" class="btn btn-primary mr-4">Alışverişe Devam Et </a>

    <a href="/sepet" class="btn btn-success">Sepete Git </a>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import ok from "../assets/icons/ok.png";

export default {
  data() {
    return {
      ok, //ok:ok
    };
  },
};
</script>

<style>
</style>