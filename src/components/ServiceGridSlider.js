import React, {Component} from 'react';
import SwiperSlider, { SwiperSlide } from "./swiper"

class ServiceGridSlider extends Component{
    render(){
        const params = {
            slidesPerView : 3,
            loop: true,
            spaceBetween : 30,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            // Responsive breakpoints
            breakpoints: {
                300:{
                    slidesPerView : 1
                },
                768:{
                    slidesPerView : 2

                },
                992:{
                    slidesPerView : 3
                }
            }
        }
        let data = [
            {img: 'service1.jpg', iconName: 'flaticon-002-welding', serviceTitle: 'Flasningar', serviceExcerpt: 'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor', serviceUrl: 'service-details-left-sidebar'},
            {img: 'service2.jpg', iconName: 'flaticon-004-walkie-talkie', serviceTitle: 'Fittings', serviceExcerpt: 'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor', serviceUrl: 'service-details-left-sidebar'},
            {img: 'service3.jpg', iconName: 'flaticon-015-cart', serviceTitle: 'Sérsmíði', serviceExcerpt: 'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor', serviceUrl: 'service-details-left-sidebar'},
            {img: 'service1.jpg', iconName: 'flaticon-010-tank-1', serviceTitle: 'Kerrusmíði', serviceExcerpt: 'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor', serviceUrl: 'service-details-left-sidebar'},
        ];

        let DataList = data.map((val, i)=>{
            return(
                <SwiperSlide key={i}>
                    <div className="swiper-slide">
                        <div className="service-grid-item">
                        <div className="service-grid-item__image">
                            <div className="service-grid-item__image-wrapper">
                            <a href={`${process.env.PUBLIC_URL}/${val.serviceUrl}`}>
                                <img src={`assets/img/service/${val.img}`} className="img-fluid" alt="" />
                            </a>
                            </div>
                            <div className="icon">
                            <i className={val.iconName} />
                            </div>
                        </div>
                        <div className="service-grid-item__content">
                            <h3 className="title">
                            <a href={`${process.env.PUBLIC_URL}/${val.serviceUrl}`}>{val.serviceTitle}</a>
                            </h3>
                            <p className="subtitle">{val.serviceExcerpt}</p>
                            <a href={`${process.env.PUBLIC_URL}/${val.serviceUrl}`} className="see-more-link">SEE MORE</a>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
            )
        });
        return(
            <div>
                {/*====================  End of service grid slider area  ====================*/}

            </div>
        )
    }
}


export default ServiceGridSlider;