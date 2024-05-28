import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
class Contact extends Component {
  render() {
    return (
      <div>
        {/* Navigation bar */}
        <NavBar />

        {/* breadcrumb */}
        {/*====================  breadcrumb area ====================*/}
        <div
          className="breadcrumb-area breadcrumb-bg"
          style={{
            backgroundImage: `url(assets/img/backgrounds/funfact-bg.jpg)`
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="page-banner text-center">
                  <h1>Hafa samband</h1>
                  <ul className="page-breadcrumb">
                    <li>
                      <a href="/">Heim</a>
                    </li>
                    <li>Hafa samband</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of breadcrumb area  ====================*/}

        {/*====================  content page content ====================*/}
        <div className="page-wrapper section-space--inner--120">
          {/*Contact section start*/}
          <div className="conact-section">
            <div className="container">
              <div className="row section-space--bottom--50">
                <div className="col">
                  <div className="contact-map">
                    <iframe
                    title="blehhh"
                        id="project_frame" name="project_frame"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1741.0009177103589!2d-21.827062922384115!3d64.128075018107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d67481f30eb80f%3A0x885fc8bd9a61d063!2sBlikksmi%C3%B0jan%20Grettir!5e0!3m2!1sen!2sis!4v1716412954935!5m2!1sen!2sis"
                        width="600" height="450" allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">

                    </iframe>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-12">
                  <div className="contact-information">
                    <h3>Upplýsingar</h3>
                    <ul>
                      <li>
                        <span className="icon">
                          <i className="ion-android-map"/>
                        </span>
                        <span className="text">
                          <span>
                            Blikksmiðjan Grettir ehf
                            Funahöfða 5, 110 Reykjavík
                            Kennitala: 511200-3690
                          </span>
                        </span>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="ion-ios-telephone-outline" />
                        </span>
                        <span className="text">
                          <a href="tel:+3545681877">568 1877</a>
                        </span>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="ion-ios-email-outline" />
                        </span>
                        <span className="text">
                          <a href="mailto:grettirblikk@grettirblikk.is">grettirblikk@grettirblikk.is</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-8 col-12">
                  <div className="contact-form">
                    <h3>Skilaboð</h3>
                    <form id="contact-form">
                      <div className="row row-10">
                        <div className="col-md-6 col-12 section-space--bottom--20">
                          <input
                            name="con_name"
                            type="text"
                            placeholder="Nafn"
                          />
                        </div>
                        <div className="col-md-6 col-12 section-space--bottom--20">
                          <input
                            name="con_email"
                            type="email"
                            placeholder="Netfang"
                          />
                        </div>
                        <div className="col-12">
                          <textarea
                            name="con_message"
                            placeholder="Skilaboð"
                            defaultValue={""}
                          />
                        </div>
                        <div className="col-12">
                          <button>Senda</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Contact section end*/}
        </div>
        {/*====================  End of content page content  ====================*/}

        {/* Footer */}
        <Footer />

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    );
  }
}

export default Contact;
