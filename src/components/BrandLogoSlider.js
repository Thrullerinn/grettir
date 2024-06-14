import React, {Component} from 'react';
import SwiperSlider, { SwiperSlide } from "./swiper";

class BrandLogoSlider extends Component{
    render(){

        const params = {
            slidesPerView : 2,
            loop: true,
            spaceBetween : 30,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            // Responsive breakpoints
            breakpoints: {
                576:{
                    slidesPerView : 3

                },
                992:{
                    slidesPerView : 4
                }
            }
        }

        let data = [
            {img: 'altak.png', logoLink: 'www.altak.is'},
            {img: 'Ga-merki.png', logoLink: 'www.ga.is'},
            {img: 'metal.jpeg', logoLink: 'www.metal.is'},
            {img: 'altak.png', logoLink: 'www.altak.is'},
            {img: 'Ga-merki.png', logoLink: 'www.ga.is'},
            {img: 'metal.jpeg', logoLink: 'www.metal.is'},
        ];

        let DataList = data.map((val, i)=>{
            return(
                <SwiperSlide key={i}>
                    <div className="brand-logo-slider__single">
                        <div className="image text-center">
                            <a href={val.logoLink}>
                                <img style={{maxWidth:150, maxHeight: 60 }} src={`assets/img/logo/${val.img}`} className="img-fluid" alt="" />
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
            )
        });


        return(
            <div>
                {/*====================  brand logo area ====================*/}
                <div className={`brand-logo-slider-area section-space--inner--60 ${this.props.background}`}>
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        {/* brand logo slider */}
                        <div className="brand-logo-slider__container-area">
                            <SwiperSlider options={params}>
                                {DataList}
                            </SwiperSlider>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/*====================  End of brand logo area  ====================*/}
            </div>
        )
    }
}

export default BrandLogoSlider;