import './style.scss';

const Content = () => {
    return(
        <div className="wrapper">
        <div className="content">
            <div className="innovations">
                <div className="innovations-content">
                    <div className="innovations-sticker">
                        <span>Инновации</span>
                    </div>
                    <div className="innovations-text-align">
                        <h2>Мы практикуем новый курс процедур аппаратной косметологии</h2>
                    </div>
                    
                    <div className="innovations-nav">
                        <img src="img/svg/right-arrow.svg" />
                        <span>ПОДРОБНЕЕ</span>
                    </div>
                </div>
                <div className="innovations-image">
                    <img src="./img/png/innovations__img.png" alt="A!" srcset="" />
                </div>
            </div>
            <div className="numbers">
                <div className="numbers-sticker-align">
                    <div className="numbers-sticker">
                        <span>Эстетика красоты</span>
                    </div>
                </div>
                <div className="numbers-content">
                    <div className="numbers-left-content">
                        <div className="small-text">
                            <div>
                                <span>78</span>
                            </div>
                            <div>
                                <span>Современных центра
                                    в странах СНГ</span>    
                            </div>
                        </div>
                        <div className="small-text">
                            <div>
                                <span>78</span>
                            </div>
                            <div>
                                <span>Современных центра
                                    в странах СНГ</span>    
                            </div>
                        </div>
                        <div className="large-text">
                            <div>
                                <span>20</span>
                            </div>
                            <div>
                                <span>Уникальных патентов
                                    в области косметологии</span>    
                            </div>
                        </div>
                        <div className="small-text">
                            <div>
                                <span>78</span>
                            </div>
                            <div>
                                <span>Современных центра
                                    в странах СНГ</span>    
                            </div>
                        </div>
                        <div className="small-text">
                            <div>
                                <span>78</span>
                            </div>
                            <div>
                                <span>Современных центра
                                    в странах СНГ</span>    
                            </div>
                        </div>
                    </div>
                    <div className="numbers-image">
                         <img src="img/png/patent.png" alt="" srcset="" />
                    </div>
                </div>
            </div>
            <div className="news">
                <div className="news-left-content">
                    <div className="news-sticker">
                        <div className="news-wrapper">
                            <div className="news-sticker-item">
                                <span>Новости</span>
                            </div>
                        </div>
                    </div>
                    <div id="news-nav">
                        <div className="news-nav-item selected">
                            <div className="news-wrapper">
                                <span>Почему рекомендуется посещать профессионального косметолога. Мнение специалистов центра</span>
                            </div>
                        </div>
                        <div className="news-nav-item">
                            <div className="news-wrapper">
                                <span>Стандартизация деятельности клиник в соответствии с ISO 9001:2015.</span>
                            </div>
                        </div>
                        <div className="news-nav-item">
                            <div className="news-wrapper">
                                <span>Индивидуальный подход к каждому пациенту и подбор оптимальных косметологических методик.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="news-right-content">
                    <div className="news-article">
                        <span>Почему рекомендуется посещать профессионального косметолога. Мнение специалистов центра</span>
                    </div>
                    <div className="news-text">
                        <ul>
                            <li><span>Процедуры аппаратной косметологии на оборудовании экспертного класса от ведущих мировых производителей могут проводиться в любом возрасте и решать широкий спектр проблем: возрастные изменения, покраснения, акне и купероз, потеря тонуса и упругости кожи, отечность, целлюлит и т. п.</span></li>
                            <li><span> С помощью инъекционных методик мы можем разгладить морщины, провести объёмное моделирование, увлажнить кожу, ввести активные вещества в поверхностные и средние слои кожи, запустить процессы омоложения.</span></li>
                            <li><span>Лазерное и фотоомоложение помогут запустить процесс синтеза собственного коллагена, улучшить светооптические свойства кожи, а также получить максимальный эффект подтяжки лица без уколов и длительного восстановительного периода.</span></li>
                            <li><span>Курс процедур лазерной эпиляции поможет навсегда избавиться от проблемы нежелательных волос.</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Content;