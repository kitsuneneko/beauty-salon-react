import './style.scss';
import SliderNav from './slider-nav';
import SliderItem from './slider-item';
import SliderFooterNav from './slider-footer-nav';


const Slider = () => {
    return(
        <div className="bg-header">
            <div className="wrapper">
                <div className="slider">
                    <SliderNav />
                    <SliderItem />
                    <SliderFooterNav />
                </div>
            </div>
        </div>  
    );
};

export default Slider;