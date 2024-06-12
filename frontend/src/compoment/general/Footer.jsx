import React from 'react'
import Messenger from '../plugin/Messenger'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next"


const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <footer>
        {/* <!--? Footer Start--> */}
        <div className="footer-area black-bg">
          <div className="container">
            <div className="footer-top footer-padding">
              {/* <!-- Footer Menu --> */}
              <div className="row">
                <div className="col-xl-12">
                  <div className="single-footer-caption mb-50 text-center">
                    {/* <!-- logo --> */}
                    <div className="footer-logo wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                      <a href="index.html"><img src="assets/img/logo/logo2_footer.png" alt="" /></a>
                    </div>
                    {/* <!-- Menu --> */}
                    {/* <!-- Header Start --> */}
                    <div className="header-area main-header2 wow fadeInUp" data-wow-duration="2s" data-wow-delay=".4s">
                      <div className="main-header main-header2">
                        <div className="menu-wrapper menu-wrapper2">
                          {/* <!-- Main-menu --> */}
                          <div className="main-menu main-menu2 text-center">
                            <nav>
                              <ul>
                                <li><Link to="/home">{t('header.home')}</Link></li>
                                <li><Link to="/about">{t('header.about')}</Link></li>
                                <li><Link to="/bmi-calculator">{t('header.BMI calculator')}</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/pricing">{t('header.pricing')}</Link></li>
                                <li><Link to="/contact">{t('header.contact')}</Link></li>
                                <li><Link to="/courses">{t('header.contact')}</Link></li>
                              </ul>
                            </nav>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Header End --> */}
                    {/* <!-- social --> */}

                    <div className="footer-social mt-30 wow fadeInUp back-top" data-wow-duration="3s" data-wow-delay=".8s">
                      <a href="#"><i className="fab fa-twitter"></i></a>
                      <a href="https://bit.ly/sai4ull"><i className="fab fa-facebook-f"></i></a>
                      <a href="#"><i className="fab fa-pinterest-p"></i></a>
                    </div>


                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Footer Bottom --> */}
            <div className="footer-bottom">
              <div className="row d-flex align-items-center">
                <div className="col-lg-12">
                  <div className="footer-copy-right text-center">
                    <p>{/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                      Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                      {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Footer End--> */}
      </footer>
      {/* <!-- Scroll Up --> */}
      <div  >


        <Messenger></Messenger>
      </div>

    </div>
  )
}

export default Footer
