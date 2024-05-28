import React, { Component } from "react";
import NavBar from "../components/NavBar";
import FeatureIcon from "../components/FeatureIcon";
import Funfact from "../components/Funfact";
import TeamMemberGrid from "../components/TeamMemberGrid";
import TestimonialSlider from "../components/TestimonialSlider";
import BrandLogoSlider from "../components/BrandLogoSlider";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
class About extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

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
                  <h1>About Us</h1>
                  <ul className="page-breadcrumb">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>About Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of breadcrumb area  ====================*/}

        <div className="page-wrapper section-space--inner--top--120">
          {/*About section start*/}
          <div className="about-section section-space--inner--bottom--120">
            <div className="container">
              <div className="row row-25 align-items-center">
                <div className="col-lg-6 col-12 mb-30">
                  <div className="about-image-two">
                    <img src="assets/img/about/about-3.jpg" alt="" />
                    <span className="video-popup">
                     
                      <button onClick={this.openModal}>
                        <i className="ion-ios-play-outline" />
                      </button>
                    </span>
                  </div>
                </div>
                <div className="col-lg-6 col-12 mb-30">
                  <div className="about-content-two">
                    <h3>Blikksmidjan Grettir</h3>
                    <h1>30? ár í Blikksmiði</h1>
                    <h4>
                      Hágæða suðuþjónustu
                    </h4>
                    <p>
                    Grettir Blikksmiðja er þekkt fyrirtæki sem sérhæfir sig í hágæða suðuþjónustu fyrir fjölbreyttan iðnað. 
                    Reyndir suðumenn leggja metnað sinn í að skila einstöku handverki og nákvæmni. 
                    Hvort sem um er að ræða burðarsuðu, pípusuðu eða almenna málmsmíði er Blikksmiðjan Grettir smáatriðum og ánægðum viðskiptavinum. 
                    Grettir Blikksmiðjar fylgir stöðlum iðnaðarins til að tryggja öruggt vinnuumhverfi fyrir bæði starfsmenn sína og viðskiptavini. 
                    Áreiðanleiki, fagmennska og geta til að klára verkefni á réttum tíma
                                        </p>
                    <a
                      href="services"
                      className="ht-btn--default ht-btn--default--dark-hover section-space--top--20"
                    >
                      Þjónustan
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*About section end*/}

          {/* Feature Icon */}
          <FeatureIcon background="grey-bg" />

          {/* Fun fact
          <Funfact /> */}

          {/* Team member */}
          <TeamMemberGrid />

          {/* Testimonial Slider */}
          <TestimonialSlider />

          {/* Brand logo */}
          <BrandLogoSlider background="" />
        </div>

        {/* Footer */}
        <Footer />

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    );
  }
}

export default About;
