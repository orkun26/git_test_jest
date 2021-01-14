<template>
  <section class="pattern-group pattern-group-t-0 pattern-group-p-product ">
    <div class="container">
      <div class="pattern-group-body">

        <div class="row">

          <div
            class="col-list col-12 d-block col-sm-12 d-sm-block col-md-12 d-md-block col-lg-12 d-lg-block col-xl-12 d-xl-block p-g-b-c-0"
          >
            <div class="p-g-b-c-wrapper">
              <div class="p-g-b-c-inner">
                <div
                  class="p-g-mod p-g-mod-t-13 p-g-mod-base-content  p-g-mod-trans   "
                >
                  <div class="p-g-mod-body  p-g-mod-body-p-0  ">
                    <div class="product-profile-1"  >
                      <div class="row">
                        <div class="col-lg-5">

                          <div
                            id="product-profile-carousel-3580"
                            class="carousel slide"
                            data-ride="carousel"
                          >
                            <div class="carousel-outer">
                              <div class="carousel-inner">
                                <div class="carousel-item active">
                                  <a
                                    href="/"
                                    data-fancybox="images"
                                    data-caption="Xiaomi Mi Wifi Pro Sinyal Yakınlaştırıcı - Güçlendirici 300 Mbps"
                                    ><img
                                      :src="product.image"
                                      id="zoom_01"
                                      data-zoom-image="https://www.toptanal.com/cdn/2/700/700/images/urunler/5fc11cac4929c-49962.jpg"
                                      alt="Xiaomi Mi Wifi Pro Sinyal Yakınlaştırıcı - Güçlendirici 300 Mbps"
                                  /></a>
                                </div>
                              </div>
                            </div>
                            <ol class="carousel-indicators">
                              <li
                                data-target="#product-profile-carousel-3580"
                                data-slide-to="0"
                                class="active"
                              >
                                <img
                                  class="d-block w-100"
                                  :src="product.image"
                                  alt="Xiaomi Mi Wifi Pro Sinyal Yakınlaştırıcı - Güçlendirici 300 Mbps"
                                />
                              </li>
                            </ol>
                          </div>
                        </div>
                        <div class="col-lg-7">
                          <h1 class="title">
                            {{product.title}}
                          </h1>
                          <ul class="product-profile-info">
                            <li>
                              <div class="product-reviews">
                                <div class="stars">
                                  <span class="star "
                                    >♡<i class= ""></i></span
                                  ><span class="star "
                                    >♡<i class=""></i></span
                                  ><span class="star "
                                    >♡<i class=""></i></span
                                  ><span class="star "
                                    >♡<i class=""></i></span
                                  ><span class="star "
                                    >♡</span>
                                </div>
                              </div>
                            </li>
                            <li>
                              Ürün Kodu: <span class="value">ONQGY1BAF9</span>
                            </li>
                            <li>
                              Barkod: <span class="value">6242005772733</span>
                            </li>
                            <li>
                              Kategori:
                              <a
                                href="/mobil-mobil-aksesuar-c-185"
                                alt="Mobil &amp; Mobil Aksesuar"
                                ><span class="value"
                                  >Mobil &amp; Mobil Aksesuar</span
                                ></a
                              >
                            </li>
                            <li>
                              Stok:
                              <span class="value"
                                ><span class="text-success">20+</span></span
                              >
                            </li>
                            <li>
                              Fiyat
                            </li>
                            <li>
                              <div class="product-price-group">
                                <div class="prices">
                                  <div class="sale-price sale-variant-price">
                                    {{product.price}} TL
                                  </div>
                                </div>
                                <div class="free-cargo-badge">KARGO BEDAVA</div>
                              </div>
                            </li>
                          </ul>
                          <div class="product-buttons">
                            <div class="product-quantity">
                              <a
                                href="javascript:;"
                                class="btn btn-minus"

                                ><i @click="decsreaseCount()" class=""><img src="https://img.icons8.com/android/24/000000/minus.png"/></i></a
                              ><span
                                class="form-control"
                                name="quantity"


                              >
                              {{count}}
                              </span><a
                                href="javascript:;"
                                class="btn btn-plus"

                                ><i @click="count++" class=""><img src="https://img.icons8.com/android/24/000000/plus.png"/></i
                              ></a>
                            </div>
                            <button
                              class="btn btn-cart btn-color-1"
                              @click="addBasket"
                            >
                              <img src="https://img.icons8.com/ios-filled/30/000000/add-shopping-cart.png"/>
                              Sepete Ekle</button
                            ><nuxt-link
                              class="btn btn-fast-buy btn-color-2"
                           :to="'/Sepet'" 
 
                            >
                              <nuxt-link  :to="'/Sepet'"  class=""><img src="https://img.icons8.com/material-sharp/24/000000/turkish-lira.png"/>
                              </nuxt-link>
                              Hemen Al</nuxt-link
                            ><nuxt-link
                               :to="'/' "
                              class="btn btn-wp"
                              target="_blank"
                              ><img src="https://img.icons8.com/fluent/18/000000/whatsapp.png"/>
                              WHATSAPP İLE SİPARİŞ VER
                            </nuxt-link>
                          </div>
                          <div
                            class="product-favourite"
                            data-favourite-product-id="3580"
                          >
                            <a
                              href="javascript:;"
                              class="d-block add-favorite"
                              onclick="userProductFavourite('add', 3580)"
                              >♡<i class=""></i>
                              Favorilerime ekle </a
                            ><a
                              href="javascript:;"
                              class="d-none remove-favorite"
                              onclick="userProductFavourite('remove', 3580)"
                              ><i class="fa fa-heart"></i>
                              Favorilerimden çıkar
                            </a>
                          </div>
                          <div class="product-badges">
                            <div class="p-badge shipping-fast">
                              <img src="https://img.icons8.com/metro/26/000000/in-transit.png"/><span>Hızlı Gönderi</span>
                            </div>
                            <div class="p-badge door-payment">
                              <img src="https://img.icons8.com/metro/26/000000/shield.png"/><span>Güvenli Alışveriş</span>
                            </div>
                            <div class="p-badge credit-card">
                              <img src="https://img.icons8.com/fluent-systems-filled/24/000000/retweet.png"/><span>İade ve Değişim</span>
                            </div>
                          </div>
                          <div class="social-share jssocials">
                            <div class="jssocials-shares">
                              <div
                                class="jssocials-share jssocials-share-twitter"
                              >
                                <a
                                  target="_blank"
                                  href="/"
                                  class="jssocials-share-link"
                                  ><img src="https://img.icons8.com/fluent/18/000000/twitter.png"/></a>
                              </div>
                              <div
                                class="jssocials-share jssocials-share-facebook"
                              >
                                <a
                                  target="_blank"
                                  href="/"
                                  class="jssocials-share-link"
                                  ><img src="https://img.icons8.com/fluent/18/000000/facebook-new.png"/></a>
                              </div>
                              <div
                                class="jssocials-share jssocials-share-linkedin"
                              >
                                <a
                                  target="_blank"
                                  href="/"
                                  class="jssocials-share-link"
                                  ><img src="https://img.icons8.com/fluent/18/000000/linkedin.png"/></a>
                              </div>
                              <div
                                class="jssocials-share jssocials-share-whatsapp"
                              >
                                <a
                                  target="_self"
                                  href="/"
                                  class="jssocials-share-link"
                                  ><img src="https://img.icons8.com/fluent/18/000000/whatsapp.png"/></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     <BenzerUrunler />
  </section>
 
</template>
<script>
export default {
  name: "app",
  data: () => {
    return {
      count: 1,

    };
  },
  created() {
    const id = this.$route.params.id;
    this.$store.dispatch("product/initData");
    this.$store.dispatch("product/setProduct", parseInt(id));
  },
  computed: {
    product() {
      return this.$store.getters["product/getProduct"];
    }
  },
  methods: {
    decsreaseCount() {
      if (this.count > 1) {
        this.count--;
      }
    },
    addBasket() {
      const payload = {
        id: Math.random() * 1000,
        count: this.count,
        product: this.product
      };
      this.$store.dispatch("basket/addBasket", payload);
    }
  }
};
</script>
