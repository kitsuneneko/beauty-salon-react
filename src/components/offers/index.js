import offersData from './offers-data';
import OffersList from './offers-list';
import './style.scss';

const Offers = () => {
    return(
        <div className="offers">
            <div className="offers-bg">
                <div className="wrapper">
                    <div className="offers-content">
                        <div className="offers-article">
                            <span>Актуальные спецпредложения</span>
                        </div>
                        <OffersList data={offersData}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;