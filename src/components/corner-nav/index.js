import './style.scss'
import HeaderLeftNav from './header-left-nav';
import FooterLeftNav from './footer-left-nav';


const CornerNav = ({ value }) => {
    return(
        <div className="wrapper">
            <div className={ value == "header" ? "main-nav" : "bottom-nav" }>
                { value == "header" ? <HeaderLeftNav/> : <FooterLeftNav/> }
                <div className="center-nav">
                        <div>
                            <img src="img/svg/eye.svg" />
                            <span>ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ</span>
                        </div>
                </div>
                <div className="right-nav">
                    <div>
                        <img src={"img/svg/vk.svg"} />
                    </div>
                    <div>
                        <img src={"img/svg/youtube.svg"} />
                    </div>
                    <div>
                        <img src={"img/svg/facebook.svg"} />
                    </div>
                    <div>
                        <img src={"img/svg/instagram.svg"} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CornerNav;
