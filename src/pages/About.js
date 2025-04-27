import React, { Component } from "react";
import NavBar from "../components/NavBar";
import TeamMemberGrid from "../components/TeamMemberGrid";
import BrandLogoSlider from "../components/BrandLogoSlider";
import MobileMenu from "../components/MobileMenu";
import Contact from "../pages/Contact";
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
                  <h1>Blikksmiðjan Grettir</h1>
                  <ul className="page-breadcrumb">
                    <li>
                      <a href="/">Tilbaka</a>
                    </li>
                    <li>Um</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of breadcrumb area  ====================*/}

          {/* Team member */}
          <TeamMemberGrid />

        <div className="page-wrapper section-space--inner--top--120">
          {/*About section start*/}
          <div className="about-section section-space--inner--bottom--120">
            <div className="container">
              <div className="row row-25 align-items-center">
                <div className="col-lg-6 col-12 mb-30">
                  <div className="about-image-two">
                    <img src="assets/img/logo/logo.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-6 col-12 mb-30">
                  <div className="about-content-two">
                    <h3>Blikksmidjan Grettir</h3>
                    <h1>Stofnuð 1990</h1>
                    <h4>
                      Hágæða Málmsmíði
                    </h4>
                    <p>
                    Grettir Blikksmiðja er framleiðslu- og þjónustufyrirtæki fyrir stáliðnað. 
                    Framleiðum vörur úr stáli fyrir heimili, fyrirtæki og stofnanir. 
                    Smíði og framleiðsla á vörum til notkunar innan- sem utandyra.
                                        </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*About section end*/}

          {/* Brand logo */}
          <BrandLogoSlider background="" />

          <Contact />
        </div>

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    );
  }
}

export default About;
