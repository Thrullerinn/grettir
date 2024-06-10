import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import HeroSliderOne from '../components/HeroSliderOne';
import ServiceGridSlider from '../components/ServiceGridSlider';
import ProjectSlider from '../components/ProjectSlider';
import BrandLogoSlider from '../components/BrandLogoSlider';
import Footer from '../components/Footer';


class HomeOne extends Component{
    render(){
        
        return(
            <div>
                
                {/* Navigation bar */}
                <NavBar/>
                
                {/* Hero slider */}
                <HeroSliderOne/>
                
                {/* Service grid slider */}
                <ServiceGridSlider/>
                
                {/* Project Slider */}
                <ProjectSlider/>
                
                {/* Team job */}
                {/* <TeamJob/> */}
                
                {/* Testimonial Slider */}
                {/* <TestimonialSlider/> */}
                
                {/* Blog grid */}
                {/* <BlogGrid background="grey-bg" /> */}

                {/* Brand logo */}
                <BrandLogoSlider />

                {/* Footer */}
                <Footer/>

            </div>
        )
    }
}


export default HomeOne;