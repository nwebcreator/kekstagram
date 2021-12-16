const Main = (): JSX.Element => {
    return (
        <main>
            {/* <!-- Фильтрация изображений от других пользователей --> */}
            <section className="img-filters container">
                <h2 className="img-filters__title  visually-hidden">Фильтр фотографий</h2>
                <form className="img-filters__form" action="index.html" method="get" autoComplete="off">
                    <button type="button" className="img-filters__button  img-filters__button--active" id="filter-default">По умолчанию</button>
                    <button type="button" className="img-filters__button" id="filter-random">Случайные</button>
                    <button type="button" className="img-filters__button" id="filter-discussed">Обсуждаемые</button>
                </form>
            </section>

            {/* <!-- Контейнер для изображений от других пользователей --> */}
            <section className="pictures  container">
                <h2 className="pictures__title  visually-hidden">Фотографии других пользователей</h2>

                {/* <!-- Поле для загрузки нового изображения на сайт --> */}
                <section className="img-upload">
                    <div className="img-upload__wrapper">
                        <h2 className="img-upload__title  visually-hidden">Загрузка фотографии</h2>
                        <form className="img-upload__form" id="upload-select-image" method="post" encType="multipart/form-data" autoComplete="off">

                            {/* <!-- Изначальное состояние поля для загрузки изображения --> */}
                            <fieldset className="img-upload__start">
                                <input type="file" id="upload-file" className="img-upload__input  visually-hidden" name="filename" required />
                                <label htmlFor="upload-file" className="img-upload__label  img-upload__control">Загрузить</label>
                            </fieldset>

                            {/* <!-- Форма редактирования изображения --> */}
                            <div className="img-upload__overlay  hidden">
                                <div className="img-upload__wrapper">
                                    <div className="img-upload__preview-container">

                                        {/* <!-- Изменение размера изображения --> */}
                                        <fieldset className="img-upload__scale  scale">
                                            <button type="button" className="scale__control  scale__control--smaller">Уменьшить</button>
                                            <input type="text" className="scale__control  scale__control--value" value="55%" title="Image Scale" name="scale" readOnly />
                                            <button type="button" className="scale__control  scale__control--bigger">Увеличить</button>
                                        </fieldset>

                                        {/* <!-- Предварительный просмотр изображения --> */}
                                        <div className="img-upload__preview">
                                            <img src="img/upload-default-image.jpg" alt="Предварительный просмотр фотографии" />
                                        </div>

                                        {/* <!-- Изменение глубины эффекта, накладываемого на изображение --> */}
                                        <fieldset className="img-upload__effect-level  effect-level">
                                            <input className="effect-level__value" type="number" step="any" name="effect-level" value="" />
                                            <div className="effect-level__slider"></div>
                                        </fieldset>

                                        {/* <!-- Кнопка для закрытия формы редактирования изображения --> */}
                                        <button type="reset" className="img-upload__cancel  cancel" id="upload-cancel">Закрыть</button>
                                    </div>

                                    {/* <!-- Наложение эффекта на изображение --> */}
                                    <fieldset className="img-upload__effects  effects">
                                        <ul className="effects__list">
                                            <li className="effects__item">
                                                <input type="radio" className="effects__radio  visually-hidden" name="effect" id="effect-none" value="none" checked />
                                                <label htmlFor="effect-none" className="effects__label">
                                                    <span className="effects__preview  effects__preview--none">Превью фото без эффекта</span>
                                                    Оригинал
                                                </label>
                                            </li>
                                            <li className="effects__item">
                                                <input type="radio" className="effects__radio  visually-hidden" name="effect" id="effect-chrome" value="chrome" />
                                                <label htmlFor="effect-chrome" className="effects__label">
                                                    <span className="effects__preview  effects__preview--chrome">Превью эффекта Хром</span>
                                                    Хром
                                                </label>
                                            </li>
                                            <li className="effects__item">
                                                <input type="radio" className="effects__radio  visually-hidden" name="effect" id="effect-sepia" value="sepia" />
                                                <label htmlFor="effect-sepia" className="effects__label">
                                                    <span className="effects__preview  effects__preview--sepia">Превью эффекта Сепия</span>
                                                    Сепия
                                                </label>
                                            </li>
                                            <li className="effects__item">
                                                <input type="radio" className="effects__radio  visually-hidden" name="effect" id="effect-marvin" value="marvin" />
                                                <label htmlFor="effect-marvin" className="effects__label">
                                                    <span className="effects__preview  effects__preview--marvin">Превью эффекта Марвин</span>
                                                    Марвин
                                                </label>
                                            </li>
                                            <li className="effects__item">
                                                <input type="radio" className="effects__radio  visually-hidden" name="effect" id="effect-phobos" value="phobos" />
                                                <label htmlFor="effect-phobos" className="effects__label">
                                                    <span className="effects__preview  effects__preview--phobos">Превью эффекта Фобос</span>
                                                    Фобос
                                                </label>
                                            </li>
                                            <li className="effects__item">
                                                <input type="radio" className="effects__radio  visually-hidden" name="effect" id="effect-heat" value="heat" />
                                                <label htmlFor="effect-heat" className="effects__label">
                                                    <span className="effects__preview  effects__preview--heat">Превью эффекта Зной</span>
                                                    Зной
                                                </label>
                                            </li>
                                        </ul>
                                    </fieldset>

                                    {/* <!-- Добавление хэш-тегов и комментария к изображению --> */}
                                    <fieldset className="img-upload__text text">
                                        <input className="text__hashtags" name="hashtags" placeholder="#ХэшТег" />
                                        <textarea className="text__description" name="description" placeholder="Ваш комментарий..."></textarea>
                                    </fieldset>

                                    {/* <!-- Кнопка для отправки данных на сервер --> */}
                                    <button type="submit" className="img-upload__submit" id="upload-submit">Опубликовать</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>

                {/* <!-- Здесь будут изображения других пользователей --> */}

            </section>

            {/* <!-- Полноэкранный показ изображения --> */}
            <section className="big-picture  overlay  hidden">
                <h2 className="big-picture__title  visually-hidden">Просмотр фотографии</h2>
                <div className="big-picture__preview">

                    {/* <!-- Просмотр изображения --> */}
                    <div className="big-picture__img">
                        <img src="img/logo-background-3.jpg" alt="Девушка в купальнике" width="600" height="600" />
                    </div>

                    {/* <!-- Информация об изображении. Подпись, комментарии, количество лайков --> */}
                    <div className="big-picture__social  social">
                        <div className="social__header">
                            <img className="social__picture" src="img/avatar-1.svg" alt="Аватар автора фотографии" width="35" height="35" />
                            <p className="social__caption">Тестим новую камеру! =)</p>
                            <p className="social__likes">Нравится <span className="likes-count">356</span></p>
                        </div>

                        {/* <!-- Комментарии к изображению --> */}
                        <div className="social__comment-count">5 из <span className="comments-count">125</span> комментариев</div>
                        <ul className="social__comments">
                            <li className="social__comment">
                                <img className="social__picture" src="img/avatar-4.svg" alt="Аватар комментатора фотографии" width="35" height="35" />
                                <p className="social__text">Мега фото! Просто обалдеть. Как вам так удалось?</p>
                            </li>
                            <li className="social__comment">
                                <img className="social__picture" src="img/avatar-3.svg" alt="Аватар комментатора фотографии" width="35" height="35" />
                                <p className="social__text">Да это фоташоп!!!!!!!!</p>
                            </li>
                        </ul>

                        {/* <!-- Кнопка для загрузки новой порции комментариев --> */}
                        <button type="button" className="social__comments-loader  comments-loader">Загрузить еще</button>

                        {/* <!-- Форма для отправки комментария --> */}
                        <div className="social__footer">
                            <img className="social__picture" src="img/avatar-6.svg" alt="Аватар комментатора фотографии" width="35" height="35" />
                            <input type="text" className="social__footer-text" placeholder="Ваш комментарий..." />
                            <button type="button" className="social__footer-btn" name="button">Отправить</button>
                        </div>
                    </div>

                    {/* <!-- Кнопка для выхода из полноэкранного просмотра изображения --> */}
                    <button type="reset" className="big-picture__cancel  cancel" id="picture-cancel">Закрыть</button>
                </div>
            </section>
        </main>
    );
}

export default Main;