import React from 'react';

const Contact = () => {
  return (
    <div>
      <main>
        {/* Hero Start */}
        <div className="slider-area2">
          <div className="slider-height2 d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="hero-cap hero-cap2 pt-70">
                    <h2>Contact me</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero End */}
        
        {/* Contact Area start */}
        <section className="contact-section">
          <div className="container">
            <div className="d-none d-sm-block mb-5 pb-4">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.506341942526!2d105.52271427426528!3d21.012416680632764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abc60e7d3f19%3A0x2be9d7d0b5abcbf4!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBGUFQgSMOgIE7hu5lp!5e0!3m2!1svi!2s!4v1717148556423!5m2!1svi!2s" 
                width="100%" 
                height="480" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="row">
              <div className="col-12">
                <h2 className="contact-title">Get in Touch</h2>
              </div>
              <div className="col-lg-8">
                <form className="form-contact contact_form" action="contact_process.php" method="post" id="contactForm" noValidate="novalidate">
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <textarea className="form-control w-100" name="message" id="message" cols="30" rows="9" onFocus={(e) => (e.target.placeholder = '')} onBlur={(e) => (e.target.placeholder = 'Enter Message')} placeholder="Enter Message"></textarea>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input className="form-control valid" name="name" id="name" type="text" onFocus={(e) => (e.target.placeholder = '')} onBlur={(e) => (e.target.placeholder = 'Enter your name')} placeholder="Enter your name" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input className="form-control valid" name="email" id="email" type="email" onFocus={(e) => (e.target.placeholder = '')} onBlur={(e) => (e.target.placeholder = 'Enter email address')} placeholder="Email" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input className="form-control" name="subject" id="subject" type="text" onFocus={(e) => (e.target.placeholder = '')} onBlur={(e) => (e.target.placeholder = 'Enter Subject')} placeholder="Enter Subject" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <button type="submit" className="button button-contactForm boxed-btn">Send</button>
                  </div>
                </form>
              </div>
              <div className="col-lg-3 offset-lg-1">
                <div className="media contact-info">
                  <span className="contact-info__icon"><i className="ti-home"></i></span>
                  <div className="media-body">
                    <h3>Buttonwood, California.</h3>
                    <p>Rosemead, CA 91770</p>
                  </div>
                </div>
                <div className="media contact-info">
                  <span className="contact-info__icon"><i className="ti-tablet"></i></span>
                  <div className="media-body">
                    <h3>+1 253 565 2365</h3>
                    <p>Mon to Fri 9am to 6pm</p>
                  </div>
                </div>
                <div className="media contact-info">
                  <span className="contact-info__icon"><i className="ti-email"></i></span>
                  <div className="media-body">
                    <h3>support@colorlib.com</h3>
                    <p>Send us your query anytime!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Area End */}
        
        {/* Services Area */}
        <section className="services-area">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                <div className="single-services mb-40">
                  <div className="features-icon">
                    <img src="assets/img/icon/icon1.svg" alt="" />
                  </div>
                  <div className="features-caption">
                    <h3>Location</h3>
                    <p>You’ll look at graphs and charts in Task One, how to approach</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                <div className="single-services mb-40">
                  <div className="features-icon">
                    <img src="assets/img/icon/icon2.svg" alt="" />
                  </div>
                  <div className="features-caption">
                    <h3>Phone</h3>
                    <p>(90) 277 278 2566</p>
                    <p>(78) 267 256 2578</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                <div className="single-services mb-40">
                  <div className="features-icon">
                    <img src="assets/img/icon/icon3.svg" alt="" />
                  </div>
                  <div className="features-caption">
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
  );
};

export default Contact;
