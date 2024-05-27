import React, { Component } from 'react';

class FeatureIcon extends Component{
    render(){

        let data = [
            {featureIcon: "feature-1.png", featureTitle: "Þjónusta", featureDescription: "Reyndir suðumenn leggja metnað sinn í að skila einstöku handverki og nákvæmni."},
            {featureIcon: "feature-2.png", featureTitle: "Gæði", featureDescription: "Hvort sem um er að ræða burðarsuðu, pípusuðu eða almenna málmsmíði þá ræður Blikksmiðjan Grettir yfir góðum tækjakosti og mannskap sem býr yfir mikilli þekkingu, sem leiðir af sér hágæða smíði."},
            {featureIcon: "feature-3.png", featureTitle: "Starfsemi", featureDescription: "Grettir Blikksmiðjar fylgir stöðlum iðnaðarins." }
        ];

        let Datalist = data.map((val, i)=>{
            return(
                <div className="col-lg-4 col-md-6 col-12 section-space--bottom--30" key={i}>
                    <div className="feature">
                    <div className="icon">
                        <img src={`assets/img/icons/${val.featureIcon}`} className="img-fluid" alt="" />
                    </div>
                    <div className="content">
                        <h3>{val.featureTitle}</h3>
                        <p>{val.featureDescription}</p>
                    </div>
                    </div>
                </div>
            )
        });

        return(
            <div>
                {/*Feature section start*/}
                <div className={`feature-section section-space--inner--100 ${this.props.background}`}>
                    <div className="container">
                        <div className="col-lg-12">
                            <div className="feature-item-wrapper">
                                <div className="row">
                                    {Datalist}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Feature section end*/}
            </div>
        )
    }
}

export default FeatureIcon;