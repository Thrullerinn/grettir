import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import HeroSliderThree from '../components/HeroSliderThree';
import FeatureIconText from '../components/FeatureIconText';
import AboutText from '../components/AboutText';
import ServiceTabTwo from '../components/ServiceTabTwo';
import ProjectImageGallery from '../components/ProjectImageGallery'
import BlogGridTwo from '../components/BlogGridTwo';
import BrandLogoSlider from '../components/BrandLogoSlider';
import Footer from '../components/Footer';

class HomeThree extends Component{
    render(){
        
        return(
            <div>
                
                {/* Navigation bar */}
                <NavBar/>
                
                {/* Hero slider */}
                <HeroSliderThree/>
                
                {/* Feature icon text */}
                <FeatureIconText/>
                
                {/* About text */}
                <AboutText/>
                
                {/* Service Tab */}
                <ServiceTabTwo/>
                
                {/* Testimonial Slider */}
                {/* TestimonialSlider/> */}

                {/* Project image gallery */}
                <ProjectImageGallery />
                
                {/* Brand logo */}
                <BrandLogoSlider background="grey-bg" />
                
                {/* Blog grid */}
                <BlogGridTwo />

                {/* Footer */}
                <Footer/>

            </div>
        )
    }
}


export default HomeThree;