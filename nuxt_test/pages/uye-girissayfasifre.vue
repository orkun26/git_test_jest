<template>
  <section
    class="pattern-group pattern-group-t-0 pattern-group-p-forgot_password"
  >
    <div class="container">
      <div class="pattern-group-body">
        <div class="row">
          <div
            class="col-list col-12 d-block col-sm-12 d-sm-block col-md-12 d-md-block col-lg-7 d-lg-block col-xl-7 d-xl-block p-g-b-c-0"
          >
            <div class="p-g-b-c-wrapper">
              <div class="p-g-b-c-inner">
                <div class="p-g-mod p-g-mod-t-6 p-g-mod-base-content">
                  <div class="p-g-mod-header">
                    <div class="p-g-m-h-info">
                      <div class="p-g-m-h-i-title">Şifremi Unuttum</div>
                    </div>
                  </div>
                  <div class="p-g-mod-body">
                    <form
                      class="password-form"
                      action=""
                      method="post"
                      onsubmit="return userForgotPassword(this)"
                    >
                      <input type="hidden" name="returnUrl" value="" /><label
                        >E-Posta Adresiniz</label
                      ><input
                        type="text"
                        class="form-control m-input"
                        name="email"
                        value=""
                      /><button type="submit" class="btn btn-success mt-4">
                        Gönder
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
                <div class="p-g-mod p-g-mod-t-7 p-g-mod-base-content">
                  <div class="p-g-mod-body">
                    <div class="box" id="user_login_right">
                      <div class="userPanelTitle" id="uptPass">
                        <h4>Giriş Yap</h4>
                        Daha önceden üye olduysanız giriş yapabilirsiniz.<br />
                        (Giriş yapmak için butonu takip ediniz.)
                        <br /><br /><a
                          href="/uye-giris"
                          class="btn btn-primary"
                        >
                          Giriş Yap
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