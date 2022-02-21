import { Copyright, PolicyLink, SwitchSiteBtn, SocialLinks } from "../corner-nav"
import './style.scss';

const BottomNav = () => {
    return(
        <div className="wrapper">
            <div className="bottom-nav">
                <div className="corner-left-nav">
                    <Copyright />
                    <PolicyLink />
                </div>
                <SwitchSiteBtn />
                <SocialLinks />
            </div>
        </div>
    );
};

export default BottomNav;