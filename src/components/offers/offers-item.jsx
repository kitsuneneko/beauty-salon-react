const OffersItem = ({ category, a, bg }) => {
    return(
        <div>
            <div className="offers-item-bg" id={bg}>
                <div className="offers-sticker-align">
                    <div className="offers-item-sticker">
                        <span>{ category }</span>
                    </div>
                </div>

            </div>
            <div className="offers-item-nav">
                <div>
                    <span>{ a }</span>
                </div>
                <div>
                    <img src="./img/svg/right-arrow.svg" alt="" /> 
                </div>
            </div>
        </div>
    );
};

export default OffersItem;