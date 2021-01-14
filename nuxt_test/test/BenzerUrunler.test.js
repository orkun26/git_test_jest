import { mount, config, shallowMount, RouterLinkStub } from "@vue/test-utils";
import BenzerUrunler from "../components/BenzerUrunler.vue";

config.mocks["$fire"] = {
  database: {
    ref: () => {
      return "";
    }
  }
};

jest.mock("axios", () => ({
  get: () =>
    Promise.resolve({
      data: [
        {
          Barkod: "6242005969881",
          Stok: "20+",
          category: ["Bilgisayar & Tablet", "Kablolar"],
          id: 1,
          image:
            "https://www.toptanal.com/cdn/2/700/700/images/urunler/5fcf8ef55d813-50062.jpg",
          price: 99,
          title: "AC1200 Mbps Dual Band USB 3.0 Adaptör Kablosuz Wifi Alıcı",
          "Ürün Kodu": "X3BQ1RITNE"
        },
        {
          Barkod: "6242005969881",
          Stok: "20+",
          category: ["Görüntü Sistemleri"],
          id: 2,
          image:
            "https://www.toptanal.com/cdn/2/700/700/images/urunler/5fcf874e83294-50053.jpg",
          price: 431.54,
          title: "Egonex GeceGörüşlü Bebek Kamerası",
          "Ürün Kodu": "X3BQ1RITNE"
        },
        {
          Barkod: "6242005969881",
          Stok: "20+",
          category: ["Bilgisayar & Tablet", "Görüntü Aktarıcıları"],
          id: 3,
          image:
            "https://www.toptanal.com/cdn/2/700/700/images/urunler/5fcf8514f21b0-50049.jpg",
          price: 549.23,
          title:
            "Egonex Gece Görüşlü Oda Sıcaklık Sensörlü Bebek Video Kamerası",
          "Ürün Kodu": "X3BQ1RITNE"
        },
        {
          Barkod: "6242005526190",
          Stok: "20+",
          category: ["Bilgisayar & Tablet", "Kablolar"],
          id: 4,
          image:
            "https://www.toptanal.com/cdn/2/700/700/images/urunler/5fcf7e2db28e5-50047.jpg",
          price: 169,
          title:
            "ORkun ÖZTÜRK-115BT USB-SD-FM-Bluetooth Destekli Nostaljik Radyo",
          "Ürün Kodu": "QV1IJXMSPD"
        },
        {
          Barkod: "6242005147661",
          Stok: "20+",
          category: ["Bilgisayar & Tablet", "Elektronik"],
          id: 5,
          image:
            "https://www.toptanal.com/cdn/2/700/700/images/urunler/5fce4dd18bcd0-50042.jpg",
          price: 169,
          title:
            "Egonex Profesyonel Boyun Bel Sırt Ayak Omuz Karın Bacak Masaj Aleti",
          "Ürün Kodu": "C54QYPVT8U"
        },
        {
          Barkod: "6242005321429",
          Stok: "20+",
          category: ["Bilgisayar & Tablet", "Küçük Ev Aletleri"],
          id: 6,
          image:
            "https://www.toptanal.com/cdn/2/700/700/images/urunler/5fca31ec28407-50037.jpg",
          price: 130,
          title: "Dearling RF-259 Profesyonel Saç Sakal Tıraş Makinesi",
          "Ürün Kodu": "5964BI0UCB"
        },
        {
          Barkod: "6242005267338",
          Stok: "20+",
          category: ["Bilgisayar & Tablet", "Mobil & Mobil Aksesuar"],
          id: 7,
          image:
            "https://www.toptanal.com/cdn/2/700/700/images/urunler/5fc8b019d223f-50014.jpg",
          price: 63,
          title: "Sony Xperia Z3 Z3 COMPACT Manyetik Dock Stand Şarj Ünitesi",
          "Ürün Kodu": "CHDWXE0BRH"
        },
        {
          Barkod: "6242005969881",
          Stok: "20+",
          category: ["Bilgisayar & Tablet", "Hobi"],
          id: 8,
          image:
            "https://www.toptanal.com/cdn/2/700/700/images/urunler/5fc50531b2e65-49983.jpg",
          price: 115,
          title: "Çiçekli Tulumlu Peluş Ayıcık 80 Cm Siyah",
          "Ürün Kodu": "X3BQ1RITNE"
        },
        {
          Barkod: "6242005969881",
          Stok: "20+",
          category: ["Bilgisayar & Tablet", "Kablolar"],
          id: 9,
          image:
            "https://www.toptanal.com/cdn/2/700/700/images/urunler/5fce007c666e2-50036.jpg",
          price: 79,
          title: "Egonex Mutfak Tartısı 5 Kg",
          "Ürün Kodu": "0384434"
        },
        {
          Barkod: "6242005969881",
          Stok: "20+",
          category: ["Bilgisayar & Tablet", "Kablolar"],
          id: 10,
          image:
            "https://www.toptanal.com/cdn/2/700/700/images/urunler/5fc11cac4929c-49962.jpg",
          price: 140,
          title:
            "Xiaomi Mi Wifi Pro Sinyal Yakınlaştırıcı - Güçlendirici 300 Mbps",
          "Ürün Kodu": "X3BQ1RITNE"
        },
        {
          Barkod: "6242005969881",
          Stok: "20+",
          category: ["Bilgisayar & Tablet", "Akıllı Saat & Bileklikler"],
          id: 11,
          image:
            "https://www.toptanal.com/cdn/2/700/700/images/urunler/5fc1194013b74-49961.jpg",
          price: 15,
          title:
            "Mi Band 4 Bilezik Bileklik Akıllı spor bilezik Bileklik Su Geçirmez Darı 4 Yarı Saydam Kayış 6 renk",
          "Ürün Kodu": "X3BQ1RITNE"
        }
      ]
    })
}));

describe("Get Products", () => {
  let wrapper = mount(BenzerUrunler, {
    stubs: {
      NuxtLink: RouterLinkStub
    }
  });
  it("Benzer Ürünler", () => {
    expect(wrapper.text()).toContain("Benzer Ürünler");
  });

  it("Sepete Ekle Button", () => {
    expect(wrapper.text()).toContain("Sepete Ekle");
  });
  it("Have a AC1200", () => {
    expect(wrapper.text()).toContain("AC1200");
  });
  it("Have a Egonex", () => {
    expect(wrapper.text()).toContain("Egonex");
  });
  it("Have a ORkun ÖZTÜRK-115BT", () => {
    expect(wrapper.text()).toContain("ORkun ÖZTÜRK-115BT");
  });
  it("Have a Xiaomi", () => {
    expect(wrapper.text()).toContain("Xiaomi");
  });
  it("Have a Mi Band", () => {
    expect(wrapper.text()).toContain("Mi Band");
  });
  it("Have a Çiçekli", () => {
    expect(wrapper.text()).toContain("Çiçekli");
  });
});
