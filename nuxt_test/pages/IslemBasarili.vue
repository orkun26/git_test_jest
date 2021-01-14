
<template>
  <div class="container">
    <IslemBasarili />
  </div>
</template>

<script>
import IslemBasarili from "../components/IslemBasarili";
export default {
    components:{
        IslemBasarili,
    }
  
};
</script>
<style>
.secenek {
  cursor: pointer;
  background-color: lightgray;
  padding: 7px;
 width: 90%;
  color: black;
  font-size: 12px;
  text-align: center;
}
.secilmis {
  background-color: gray;
  color: white;
}
.mega-menu .dropdown {
    position: static;
}

 .mega-menu .dropdown-menu {
    border-top: 0;
    border-radius: 3px;
    background-color: #fff;
    width: 100%;
    left:0;
    right:0;
    top:47px;
    position: absolute;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
}
    
.mega-menu .dropdown:hover .dropdown-menu, 
 .mega-menu .dropdown .dropdown-menu:hover {
    display:block!important;
 }
 


</style>