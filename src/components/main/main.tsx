import Filter from '../filter/filter';
import Post from '../../types/post';
import PostPreview from '../post-preview/post-preview';
import PostPopup from '../post-popup/post-popup';

type MainProps = {
    posts: Post[];
}
const Main = ({ posts }: MainProps): JSX.Element => {
    return (
        <main>
            {/* <!-- Фильтрация изображений от других пользователей --> */}
            <Filter />

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
                {posts.map(post => <PostPreview key={post.id} post={post} />)}

            </section>

            {/* <!-- Полноэкранный показ изображения --> */}
            <PostPopup />
        </main>
    );
}

export default Main;