const SliderItem = () => {
    return(
        <div className="slider-item">
            <div className="left-slider-item">
                <div className="article">
                    <h1>Косметология</h1>
                    <p>Современный мир диктует новые каноны жизни: ухоженное лицо и тело, стройная, подтянутая фигура — сегодня это неотъемлемые черты привлекательной внешности, характеризующие человека благополучного и успешного.</p>
                    <button><span>ПОДРОБНЕЕ</span></button>
                </div>
                <div className="slider-btn">
                        <img src="./img/svg/left-arrow.svg" alt="" srcset="" />
                        <img src="./img/svg/right-arrow.svg" alt="" srcset="" />
                </div>
            </div>
            <div className="slider-image">
                <img src="./img/png/photo.png" alt="A!" srcset="" />
            </div>
    </div>
    );
};

export default SliderItem;