
<template>
  <section
    class="pattern-group pattern-group-t-0 pattern-group-p-cart sticky-sidebar-992-2"
    style="position: relative"
  >
    <div class="container">
      <div class="pattern-group-body">
        <div class="row">
          <div
            class="col-list col-12 d-block col-sm-12 d-sm-block col-md-12 d-md-block col-lg-9 d-lg-block col-xl-9 d-xl-block p-g-b-c-0"
          >
            <div class="p-g-b-c-wrapper">
              <div class="p-g-b-c-inner">
                <div
                  class="p-g-mod p-g-mod-t-31 p-g-mod-base-content p-g-mod-trans"
                >
                  <div class="p-g-mod-header p-g-mod-header-p-0">
                    <div class="p-g-m-h-info">
                      <div class="p-g-m-h-i-title">Sepet Listesi</div>
                    </div>
                  </div>
                  <div class="p-g-mod-body p-g-mod-body-p-0">
                    <div
                      v-for="item in basket"
                      :key="'basket' + item.id"
                      class="shopping-cart-1"
                    >
                      <div class="table-responsive">
                        <table class="table table-hover">
                          <thead>
                            <tr>
                              <th class="th-product">Ürün</th>
                              <th class="th-price">Fiyat</th>
                              <th class="th-quantity">Adet</th>
                              <th class="th-total-price">Tutar</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr data-cart-product-id="4302">
                              <td class="td-product">
                                <div class="product">
                                  <div class="image">
                                    <nuxt-link
                                      :to="'/urun-detay/' + item.product.id"
                                    >
                                      <img
                                        class="lazy-load lazy-complete basket-image"
                                        alt=""
                                        :src="item.product.image"
                                        style=""
                                      />
                                    </nuxt-link>
                                  </div>
                                  <div class="p-info">
                                    <nuxt-link
                                      :to="'/urun-detay/' + item.product.id"
                                      class="name"
                                    >
                                      {{ item.product.title }}
                                    </nuxt-link>
                                    <div class="variants"></div>
                                    <button
                                      @click="removeBasketItem(item.id)"
                                      class="btn btn-danger btn-remove"
                                      type="button"
                                    >
                                      Sil
                                    </button>
                                  </div>
                                </div>
                              </td>
                              <td class="td-price">
                                <span class="value">
                                  {{ item.product.price.toFixed(2) }} TL
                                </span>
                              </td>
                              <td class="td-quantity">
                                <div class="product-quantity">
                                  <a
                                    href="javascript:;"
                                    style="font-size: 23px"
                                    class="btn btn-minus"
                                    @click="decrease(item.id)"
                                  >
                                    -
                                  </a>
                                  <input
                                    class="form-control"
                                    data-base-value="1"
                                    name="quantity"
                                    min="1"
                                    max="9999"
                                    maxlength="4"
                                    :value="item.count"
                                  />
                                  <a
                                    href="javascript:;"
                                    style="font-size: 20px"
                                    class="btn btn-plus"
                                    @click="increase(item.id)"
                                  >
                                    +
                                  </a>
                                </div>
                              </td>
                              <td class="td-total-price">
                                <span class="value">
                                  {{
                                    (item.product.price * item.count).toFixed(2)
                                  }}
                                  TL
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div class="shopping-buttons-1">
                      <a href="/" class="btn btn-light btn-continue">
                        Alışverişe Devam Et
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-list col-12 d-block col-sm-12 d-sm-block col-md-12 d-md-block col-lg-3 d-lg-block col-xl-3 d-xl-block p-g-b-c-1"
          >
            <div class="p-g-b-c-wrapper">
              <div class="p-g-b-c-inner" style="position: relative">
                <div
                  class="p-g-mod p-g-mod-t-37 p-g-mod-base-content p-g-mod-trans"
                >
                  <div class="p-g-mod-header p-g-mod-header-p-0">
                    <div class="p-g-m-h-info">
                      <div class="p-g-m-h-i-title">Sipariş Özeti</div>
                    </div>
                  </div>
                  <div class="p-g-mod-body p-g-mod-body-p-0">
                    <div class="payment-cart-summary-1">
                      <table class="table summary">
                        <tfoot>
                          <tr>
                            <th>Ürünler Toplamı</th>
                            <th>{{ subtotal }}TL</th>
                          </tr>
                          <tr>
                            <th>
                              Genel Toplam <br />
                              (KDV Dahil)
                            </th>
                            <th>
                              <span class="final"> {{ total }} TL </span>
                            </th>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                </div>
                <div class="p-g-mod p-g-mod-t-38 p-g-mod-trans">
                  <div class="p-g-mod-body p-g-mod-body-p-0">
                    <div class="payment-final-buttons-1">
                      <a href="/uye-giris" class="btn btn-complete btn-theme-1">
                        Alışverişi Tamamla
                        <img
                          height="20"
                          width="20 "
                          src="../assets/icons/Right1.PNG"
                      /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => {
    return {};
  },
  created() {},
  computed: {
    basket() {
      return this.$store.getters["basket/getBasketItems"];
    },
    subtotal() {
      let total = 0;
      for (let i = 0; i < this.basket.length; i++) {
        total += this.basket[i].product.price;
      }
      return total.toFixed(2);
    },
    total() {
      let total = 0;
      for (let i = 0; i < this.basket.length; i++) {
        total += this.basket[i].product.price * this.basket[i].count;
      }
      return total.toFixed(2);
    },
  },
  methods: {
    removeBasketItem(id) {
      this.$store.dispatch("basket/removeBasketItem", id);
    },
    increase(id) {
      this.$store.dispatch("basket/increaseBasketItem", id);
      console.log(JSON.stringify({ basket: this.basket }));
    },
    decrease(id) {
      this.$store.dispatch("basket/decreaseBasketItem", id);
    },
  },
};
</script>
<style scoped>
.td-product {
  color: #333;
  font-weight: 500;
  font-size: 13px;
}
a {
  color: #333;
  text-decoration: none;
  background-color: transparent;
}
.shopping-cart-1 .td-product .product {
  display: flex;
}

.shopping-cart-1 .td-product {
  font-size: 13px;
  font-weight: 500;
}
.shopping-cart-1 td {
  padding: 5px 5px;
}
.table td,
.table th {
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}
.shopping-cart-1 .td-product .product .image {
  margin-right: 5px;
}
.shopping-cart-1 .td-product .product .image a {
  display: block;
}
.shopping-cart-1 .td-product .product .image img {
  max-width: 100px;
}
</style>
