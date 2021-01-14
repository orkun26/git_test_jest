<template>
  <div class="container">
       <p> 
         
       <img class="btn " :src="WhatsappDestek" v-on:click="redirect_to_login" />
     
      <br />
        <p>
            <img class="btn" :src="GuvenliAlısveris" v-on:click="redirect_to_login" />
       <br />
          <p>
       <img class="btn" :src="KolayIade" v-on:click="redirect_to_login"/>
          <br />
           <p>
        <img class="btn" :src="AltiAyTaksit" v-on:click="redirect_to_login"/>
        <br />
        <p>
        <img class="btn" :src="HizliKargo" v-on:click="redirect_to_login"/>
        </p>
      

        </div>       
</template>

<script>
import WhatsappDestek from "../assets/icons/WhatsappDestek.png";
import GuvenliAlısveris from "../assets/icons/GuvenliAlısveris.png";
import KolayIade from "../assets/icons/KolayIade.png";
import AltiAyTaksit from "../assets/icons/AltiAyTaksit.png";
import HizliKargo from "../assets/icons/HizliKargo.png";
export default {
  data() {
    return {
      WhatsappDestek,GuvenliAlısveris, KolayIade, AltiAyTaksit, HizliKargo
    };
  },
};

</script>

<style scoped>
.btn   {
  width: 23%
}

</style>