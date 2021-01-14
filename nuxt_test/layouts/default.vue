<template>
  <div>
    <Navbar />
    <Megamenu />
    <Nuxt />
    <SubMenu />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Megamenu from "../components/Megamenu.vue";
import SubMenu from "../components/SubMenu.vue";
import axios from "axios";
export default {
  mounted() {
    const messageRef = this.$fire.database.ref("/");
    axios.get(messageRef.toString() + ".json").then((res) => {
      console.log(JSON.stringify([...res.data]));
      this.$store.commit("product/setProducts", res.data);
    });
  },
  components: {
    Navbar,
    Megamenu,
    SubMenu,
  },
};
</script>

