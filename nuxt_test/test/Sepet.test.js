import { mount, createLocalVue, config, shallowMount } from "@vue/test-utils";
import Sepet from "../pages/Sepet.vue";
import { getters, mutations, actions, state } from "../store/basket";

config.mocks["$store"] = {
  state: { ...state },
  getters: {
    "basket/getBasketItems": { ...state }
  },
  actions: {
    "basket/removeBasketItem": { ...actions }
  },
  mutations: {
    ...mutations
  }
};

describe("Sepet.vue", () => {
  it("Render", () => {
    let wrapper = shallowMount(Sepet);
    expect(wrapper.text()).toContain("Sepet Listesi");
  });
});
