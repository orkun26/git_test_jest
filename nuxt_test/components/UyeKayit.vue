<template>
  <section class="pattern-group pattern-group-t-0 pattern-group-p-login">
    <div class="container">
      <div class="pattern-group-body">
        <div class="row">
          <div
            class="col-list col-12 d-block col-sm-12 d-sm-block col-md-12 d-md-block col-lg-7 d-lg-block col-xl-7 d-xl-block p-g-b-c-0"
          >
            <div class="p-g-b-c-wrapper">
              <div class="p-g-b-c-inner">
                <div
                  class="p-g-mod p-g-mod-t-4 p-g-mod-base-content p-g-mod-trans"
                >
                  <div class="p-g-mod-header p-g-mod-header-p-0">
                    <div class="p-g-m-h-info">
                      <div class="p-g-m-h-i-title">Üye Girişi</div>
                    </div>
                  </div>
                  <div v-if="error" class="alert alert-danger">
                    Hatalı kullanıcı adı yada şifre
                  </div>
                  <div v-if="success" class="alert alert-success">
                    Giriş Başarılı Yönlendiriliyorsunuz...
                  </div>
                  <div class="p-g-mod-body p-g-mod-body-p-0">
                    <form
                      class="login-form"
                      action=""
                      method="post"
                      onsubmit="return userLogin(this)"
                    >
                      <input type="hidden" name="returnUrl" value="" /><label
                        >E-Posta Adresiniz</label
                      ><input
                        type="text"
                        class="form-control m-input"
                        name="email"
                        v-model="email"
                      />
                      <div class="mt-3"></div>
                      <label>Şifre</label
                      ><input
                        type="password"
                        class="form-control m-input"
                        name="password"
                        v-model="password"
                      />
                      <div class="mt-3"></div>
                      <!-- href="/IslemBasarili" -->
                      <button @click="login" class="btn btn-success">
                        Giriş Yap
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-list col-12 d-block col-sm-12 d-sm-block col-md-12 d-md-block col-lg-5 d-lg-block col-xl-5 d-xl-block p-g-b-c-1"
          >
            <div class="p-g-b-c-wrapper">
              <div class="p-g-b-c-inner">
                <div
                  class="p-g-mod p-g-mod-t-5 p-g-mod-base-content p-g-mod-trans"
                >
                  <div class="p-g-mod-body p-g-mod-body-p-0">
                    <div class="box">
                      <div class="userPanelTitle">
                        <h4>Şifremi Unuttum</h4>
                        Şifrenizi kaybettiyseniz geri alabilirsiniz.
                        <br /><a
                          href="/uye-girissayfasifre"
                          class="btn btn-danger mb-3 mt-3"
                        >
                          Şifremi Hatırlat
                        </a>
                      </div>
                      <div class="userPanelTitle" id="uptNew">
                        <h4>Yeni Üyelik</h4>
                        Siteye henüz üye değilim ve üye olmak istiyorum.<br />
                        (Hesabınızı oluşturmak için butonu takip ediniz.)
                        <br /><a href="/uye-ol" class="btn btn-primary">
                          Üye Ol
                        </a>
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
  </section>
</template>


<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      error: false,
      success: false,
    };
  },
  mounted() {
    console.log(this.$store.getters["user/getUser"]);
  },
  methods: {
    login(e) {
      e.preventDefault();
      this.$fire.auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then((res) => {
          console.log("Giriş başarılı");
          this.$store.commit("user/setUser", this.email);
          setTimeout(() => {
            window.location.href = "/";
          }, 1500);

          this.error = false;
          this.success = true;
        })
        .catch((err) => {
          console.log("Giriş başarısız");
          this.error = true;
        });
    },
  },
};
</script>