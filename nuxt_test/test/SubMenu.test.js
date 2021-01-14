import { mount } from "@vue/test-utils";

import SubMenu from "../components/SubMenu.vue";

describe("SubMenu.vue", () => {
  let wrapper = mount(SubMenu);
  it("There is a Hakkımızda", () => {
    expect(wrapper.text()).toContain("Hakkımızda");
  });
  it("There is a Gizlilik Sözleşmesi", () => {
    expect(wrapper.text()).toContain("Gizlilik Sözleşmesi");
  });
  it("There is a Kullanıcı Sözleşmesi", () => {
    expect(wrapper.text()).toContain("Kullanıcı Sözleşmesi");
  });
  it("There is a İletişim", () => {
    expect(wrapper.text()).toContain("İletişim");
  });
  it("There is a Sıkça Sorulan Sorular", () => {
    expect(wrapper.text()).toContain("Sıkça Sorulan Sorular");
  });
  it("There is a Sıkça Sorulan Sorular", () => {
    expect(wrapper.text()).toContain("Havale Bildirimleri");
  });
});
