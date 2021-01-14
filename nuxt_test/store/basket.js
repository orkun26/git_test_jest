export const state = () => ({
  items: [
    {
      id: 481.2167724786085,
      count: 11,
      product: {
        id: 4,
        title: "Meier M-115BT USB-SD-FM-Bluetooth Destekli Nostaljik Radyo",
        image:
          "https://www.toptanal.com/cdn/2/700/700/images/urunler/5fcf7e2db28e5-50047.jpg",
        "Ürün Kodu": "QV1IJXMSPD",
        Barkod: "6242005526190",
        Stok: "20+",
        price: 169,
        category: ["Bilgisayar & Tablet", "Kablolar"]
      }
    },
    {
      id: 962.8748253783979,
      count: 7,
      product: {
        Barkod: "6242005969881",
        Stok: "20+",
        category: ["Görüntü Sistemleri"],
        id: 2,
        image:
          "https://www.toptanal.com/cdn/2/700/700/images/urunler/5fcf874e83294-50053.jpg",
        price: 431.54,
        title: "Egonex GeceGörüşlü Bebek Kamerası",
        "Ürün Kodu": "X3BQ1RITNE"
      }
    }
  ]
});
export const mutations = {
  addBasketItem(state, item) {
    state.items.push(item);
  },
  removeBasketItem(state, index) {
    state.items.splice(index, 1);
  },
  increase(state, index) {
    state.items[index].count++;
  },
  decrease(state, index) {
    state.items[index].count--;
  }
};
export const actions = {
  addBasket({ state, commit }, data) {
    for (let i = 0; i < state.items.length; i++) {
      if (state.items[i].product.id === data.product.id) {
        commit("increase", i);
        return true;
      }
    }
    commit("addBasketItem", data);
  },
  increaseBasketItem({ state, commit }, id) {
    for (let i = 0; i < state.items.length; i++) {
      if (state.items[i].id === id) {
        commit("increase", i);
        return false;
      }
    }
  },
  decreaseBasketItem({ state, commit }, id) {
    for (let i = 0; i < state.items.length; i++) {
      if (state.items[i].id === id) {
        if (state.items[i].count < 2) {
          commit("removeBasketItem", i);
        } else {
          commit("decrease", i);
        }
        return false;
      }
    }
  },
  removeBasketItem({ state, commit }, id) {
    for (let i = 0; i < state.items.length; i++) {
      if (state.items[i].id === id) {
        commit("removeBasketItem", i);
        return false;
      }
    }
  }
};
export const getters = {
  getBasketItems(state) {
    return state.items;
  }
};
