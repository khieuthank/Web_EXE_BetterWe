import React from 'react'
import Header from '../../compoment/general/Header';
import { useTranslation } from "react-i18next";
const Pricing = () => {
    const { t, i18n } = useTranslation();
  return (
    <div>
      <div class="black-bg">

<main>
    {/* <!--? Hero Start  --> */}
    <div class="slider-area2">
        <div class="slider-height2 d-flex align-items-center">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="hero-cap hero-cap2 pt-70">
                            <h2>{t('header.pricing')}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Hero End  --> */}
    {/* <!-- Courses area start  --> */}
    <section class="pricing-area section-padding30 fix">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="section-tittle text-center mb-55">
                        <h2>{t('header.pricing')}</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="properties mb-30">
                        <div class="properties__card">
                            <div class="about-icon">
                                <img src="assets/img/icon/price.svg" alt=""/>
                            </div>
                            <div class="properties__caption">
                                <span class="month">{t('Service.Basic Package')}</span>
                                <p class="mb-25">{t('Price.Basic')}  <span></span></p>
                                <div class="single-features">
                                    <div class="features-icon">
                                        <img src="assets/img/icon/check.svg" alt=""/>
                                    </div>
                                    <div class="features-caption">
                                        <p>{t('Content.Basic.one')}</p>
                                    </div>
                                </div>
                                <div class="single-features">
                                    <div class="features-icon">
                                        <img src="assets/img/icon/check.svg" alt=""/>
                                    </div>
                                    <div class="features-caption">
                                        <p>{t('Content.Basic.two')}</p>
                                    </div>
                                </div>
                                <div class="single-features">
                                    <div class="features-icon">
                                        <img src="assets/img/icon/check.svg" alt=""/>
                                    </div>
                                    <div class="features-caption">
                                        <p>{t('Content.Basic.three')}</p>
                                    </div>
                                </div>
                                <div class="single-features">
                                    <div class="features-icon">
                                        <img src="assets/img/icon/check.svg" alt=""/>
                                    </div>
                                    <div class="features-caption">
                                        <p>{t('Content.Basic.four')}</p>
                                    </div>
                                </div>
                                
                                <a href="#" class="border-btn border-btn2">Join Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="properties mb-30">
                        <div class="properties__card">
                            <div class="about-icon">
                                <img src="assets/img/icon/price.svg" alt=""/>
                            </div>
                            <div class="properties__caption">
                                <span class="month">{t('Service.Advanced Package')}</span>
                                <p class="mb-25">{t('Price.Advanced')} <span></span></p>
                                <div class="single-features">
                                    <div class="features-icon">
                                        <img src="assets/img/icon/check.svg" alt=""/>
                                    </div>
                                    <div class="features-caption">
                                        <p>{t('Content.Advanced.one')} </p>
                                    </div>
                                </div>
                                <div class="single-features">
                                    <div class="features-icon">
                                        <img src="assets/img/icon/check.svg" alt=""/>
                                    </div>
                                    <div class="features-caption">
                                        <p>{t('Content.Advanced.two')}</p>
                                    </div>
                                </div>
                                <div class="single-features">
                                    <div class="features-icon">
                                        <img src="assets/img/icon/check.svg" alt=""/>
                                    </div>
                                    <div class="features-caption">
                                        <p>{t('Content.Advanced.three')}</p>
                                    </div>
                                </div>
                                <div class="single-features">
                                    <div class="features-icon">
                                        <img src="assets/img/icon/check.svg" alt=""/>
                                    </div>
                                    <div class="features-caption">
                                        <p>{t('Content.Advanced.four')}</p>
                                    </div>
                                </div>
                                <div class="single-features mb-20">
                                    <div class="features-icon">
                                        <img src="assets/img/icon/check.svg" alt=""/>
                                    </div>
                                    <div class="features-caption">
                                        <p>{t('Content.Advanced.five')}</p>
                                    </div>
                                </div>
                                <div class="single-features mb-20">
                                    <div class="features-icon">
                                        <img src="assets/img/icon/check.svg" alt=""/>
                                    </div>
                                    <div class="features-caption">
                                        <p>{t('Content.Advanced.six')}</p>
                                    </div>
                                </div>
                                <a href="#" class="border-btn border-btn2">Join Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="properties mb-30">
                        <div class="properties__card">
                            <div class="about-icon">
                                <img src="assets/img/icon/price.svg" alt=""/>
                            </div>
                            <div class="properties__caption">
                                <span class="month">{t('Service.Premium Package')}</span>
                                <p class="mb-25">{t('Price.Premium')}  <span></span></p>
                                <div class="single-features">
                                    <div class="features-icon">
                                        <img src="assets/img/icon/check.svg" alt=""/>
                                    </div>
                                    <div class="features-caption">
                                        <p>{t('Content.Premium.one')}</p>
                                    </div>
                                </div>
                                <div class="single-features">
                                    <div class="features-icon">
                                        <img src="assets/img/icon/check.svg" alt=""/>
                                    </div>
                                    <div class="features-caption">
                                        <p>{t('Content.Premium.two')}</p>
                                    </div>
                                </div>
                                <div class="single-features">
                                    <div class="features-icon">
                                        <img src="assets/img/icon/check.svg" alt=""/>
                                    </div>
                                    <div class="features-caption">
                                        <p>{t('Content.Premium.three')}</p>
                                    </div>
                                </div>
                                <div class="single-features">
                                    <div class="features-icon">
                                        <img src="assets/img/icon/check.svg" alt=""/>
                                    </div>
                                    <div class="features-caption">
                                        <p>{t('Content.Premium.four')}</p>
                                    </div>
                                </div>
                                <div class="single-features mb-20">
                                    <div class="features-icon">
                                        <img src="assets/img/icon/check.svg" alt=""/>
                                    </div>
                                    <div class="features-caption">
                                        <p>{t('Content.Premium.five')}</p>
                                    </div>
                                </div>
                                <div class="single-features mb-20">
                                    <div class="features-icon">
                                        <img src="assets/img/icon/check.svg" alt=""/>
                                    </div>
                                    <div class="features-caption">
                                        <p>{t('Content.Premium.six')}</p>
                                    </div>
                                </div>
                                <div class="single-features mb-20">
                                    <div class="features-icon">
                                        <img src="assets/img/icon/check.svg" alt=""/>
                                    </div>
                                    <div class="features-caption">
                                        <p>{t('Content.Premium.seven')}</p>
                                    </div>
                                </div>
                                <div class="single-features mb-20">
                                    <div class="features-icon">
                                        <img src="assets/img/icon/check.svg" alt=""/>
                                    </div>
                                    <div class="features-caption">
                                        <p>{t('Content.Premium.eight')}</p>
                                    </div>
                                </div>
                                <a href="#" class="border-btn border-btn2">Join Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Courses area End  --> */}
    {/* <!-- ? services-area  --> */}
    <section class="services-area">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                    <div class="single-services mb-40">
                        <div class="features-icon">
                            <img src="assets/img/icon/icon1.svg" alt=""/>
                        </div>
                        <div class="features-caption">
                            <h3>Location</h3>
                            <p>You’ll look at graphs and charts in Task One, how to approach </p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                    <div class="single-services mb-40">
                        <div class="features-icon">
                            <img src="assets/img/icon/icon2.svg" alt=""/>
                        </div>
                        <div class="features-caption">
                            <h3>Phone</h3>
                            <p>(90) 277 278 2566</p>
                            <p>  (78) 267 256 2578</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                    <div class="single-services mb-40">
                        <div class="features-icon">
                            <img src="assets/img/icon/icon3.svg" alt=""/>
                        </div>
                        <div class="features-caption">
                            <h3>Email</h3>
                            <p>jacson767@gmail.com</p>
                            <p>contact56@zacsion.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>




</div>
    </div>
  )
}

export default Pricing
