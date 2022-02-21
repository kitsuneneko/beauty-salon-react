const News = () => {
    return(
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
    );
};

export default News;