<template>
  <section class="pattern-group pattern-group-t-0 pattern-group-p-register">
    <div class="container">
      <div class="pattern-group-body">
        <div class="row">
          <div
            class="col-list col-12 d-block col-sm-12 d-sm-block col-md-12 d-md-block col-lg-12 d-lg-block col-xl-12 d-xl-block p-g-b-c-0"
          >
            <div class="p-g-b-c-wrapper">
              <div class="p-g-b-c-inner">
                <div
                  class="p-g-mod p-g-mod-t-8 p-g-mod-base-content p-g-mod-trans"
                >
                  <div class="p-g-mod-header p-g-mod-header-p-0">
                    <div class="p-g-m-h-info">
                      <div class="p-g-m-h-i-title">Yeni Üyelik</div>
                    </div>
                  </div>
                  <div class="p-g-mod-body p-g-mod-body-p-0">
                    <form
                      class="common-register-form"
                      action=""
                      method="post"
                      onsubmit="return userRegister(this)"
                    >
                      <input type="hidden" name="returnUrl" value="" />
                      <div class="register_description">
                        <div class="alert alert-info">
                          Kişisel bilgileriniz, 3. kişilerin ulaşamayacağı
                          şekilde saklanmaktadır.
                        </div>
                      </div>
                      <div class="mws-form-inline">
                        <label>E-Posta <span class="text-danger">*</span></label
                        ><input
                          type="text"
                          class="form-control m-input small"
                          name="email"
                          value=""
                        />
                        <div class="mt-3"></div>
                        <label>Ad <span class="text-danger">*</span></label
                        ><input
                          type="text"
                          class="form-control m-input small"
                          name="name"
                          value=""
                        />
                        <div class="mt-3"></div>
                        <label>Soyad <span class="text-danger">*</span></label
                        ><input
                          type="text"
                          class="form-control m-input small"
                          name="lastname"
                          value=""
                        />
                        <div class="mt-3"></div>
                        <label>Telefon Numarası</label>
                        <div class="iti iti--allow-dropdown">
                          <div class="iti__flag-container">
                            <div
                              class="iti__selected-flag"
                              role="combobox"
                              aria-owns="country-listbox"
                              tabindex="0"
                              title="Turkey (Türkiye): +90"
                            >
                              <div class="iti__flag iti__tr"></div>
                              <div class="iti__arrow"></div>
                            </div>
                            <ul
                              class="iti__country-list iti__hide"
                              id="country-listbox"
                              aria-expanded="false"
                              role="listbox"
                              aria-activedescendant="iti-item-tr"
                            >
                              <li
                                class="iti__country iti__preferred iti__active"
                                tabindex="-1"
                                id="iti-item-tr"
                                role="option"
                                data-dial-code="90"
                                data-country-code="tr"
                                aria-selected="true"
                              >
                                <div class="iti__flag-box">
                                  <div class="iti__flag iti__tr"></div>
                                </div>
                                <span class="iti__country-name"
                                  >Turkey (Türkiye)</span
                                ><span class="iti__dial-code">+90</span>
                              </li>
                              <li
                                class="iti__divider"
                                role="separator"
                                aria-disabled="true"
                              ></li>
                              <li
                                class="iti__country iti__standard"
                                tabindex="-1"
                                id="iti-item-tr"
                                role="option"
                                data-dial-code="90"
                                data-country-code="tr"
                              >
                                <div class="iti__flag-box">
                                  <div class="iti__flag iti__tr"></div>
                                </div>
                                <span class="iti__country-name"
                                  >Turkey (Türkiye)</span
                                ><span class="iti__dial-code">+90</span>
                              </li>
                            </ul>
                          </div>
                          <input
                            type="text"
                            class="form-control form-phone-control m-input small"
                            name="phone"
                            value=""
                            autocomplete="off"
                          />
                        </div>
                        <div class="mt-3"></div>
                        <label>Şifre <span class="text-danger">*</span></label
                        ><input
                          type="password"
                          class="form-control m-input small"
                          name="password"
                          value=""
                        />
                        <div class="mt-3"></div>
                        <label
                          >Şifre (tekrar)
                          <span class="text-danger">*</span></label
                        ><input
                          type="password"
                          class="form-control m-input small"
                          name="password2"
                          value=""
                        />
                        <div class="mt-3"></div>
                        <label>Üyelik Kuralları</label
                        ><textarea
                          rows=""
                          cols=""
                          class="form-control"
                          style=""
                          readonly="readonly"
                        ></textarea>
                        <div class="">
                          <label></label
                          ><input
                            type="checkbox"
                            class="ibutton"
                            checked=""
                            name="user_rules"
                            id="checkUserRule"
                            value="1"
                            style="margin-right: 10px"
                          /><label for="checkUserRule"
                            >Kurallari okudum ve kabul ediyorum.</label
                          ><br />
                        </div>
                        <div class="mt-3"></div>
                        <button class="btn btn-success">Kayıt Ol</button>
                      </div>
                    </form>
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