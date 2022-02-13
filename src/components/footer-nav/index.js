import './style.scss';
import FooterNavColumn from './footer-nav-column';

const FooterNav = () => {
    return(
        <div className="wrapper">
            <div className="footer-nav-align">
                <div className="footer-nav">
                    <div className="footer-nav-left">
                        <FooterNavColumn />
                        <FooterNavColumn />
                        <FooterNavColumn />
                        <FooterNavColumn />
                        <FooterNavColumn />
                        <FooterNavColumn />
                    </div>
                    <div className="footer-nav-right">
                        <div className="contacts">
                            <span>телефон</span>
                            <span>+7 (812) 123-45-67</span>
                        </div>
                        <div className="address">
                            <span>адрес</span>
                            <span>Невский пр. 140, пом. 10</span>
                            <div>
                                <a href="#">как проехать?</a>
                            </div>
                        </div>
                        <div className="address">
                            <span>адрес</span>
                            <span>Большой пр. 12</span>
                            <div>
                                <a href="#">как проехать?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterNav;