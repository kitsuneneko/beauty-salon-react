import './style.scss';

const Slider = () => {
    return(
        <div className="bg-header">
            <div className="wrapper">
                <div className="slider">
                    <div className="slider-nav">
                        <nav>
                            <ul>
                                <li><a href="#">Косметология</a></li>
                                <li><a href="#">Пластическая хирургия</a></li>
                                <li><a href="#">Стоматология</a></li>
                                <li><a href="#">Лазерная медицина</a></li>
                                <li><a href="#">Контакты</a></li>
                                <li><a href="#">Запись на прием</a></li>
                            </ul>
                        </nav>
                    </div>
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
                    <div className="slider-footer-nav">
                        <div><span>Комплексные процедуры</span></div>
                        <div><span>Центр обучения</span></div>
                        <div><span>VIP клиентам</span></div>
                    </div>
                </div>
            </div>
        </div>  
    );
};

export default Slider;