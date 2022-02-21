import { Logo, Contacts, DropDownList, SwitchSiteBtn, SocialLinks } from "../corner-nav"
import './style.scss';

const UpperNav = () => {
    return(
        <div className="wrapper">
            <div className="upper-nav">
                <div className="corner-left-nav">
                    <Logo />
                    <Contacts />
                    <DropDownList />
                </div>
                <SwitchSiteBtn />
                <SocialLinks />
            </div>
        </div>
    );
};

export default UpperNav;