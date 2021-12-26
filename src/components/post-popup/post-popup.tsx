import { useSelector, useDispatch  } from "react-redux";
import { getPopupPost } from "../../store/common/selectors";
import { setPopupPostAction } from "../../store/common/actions";
import Comments from "../comments/comments";

const PostPopup = (): JSX.Element => {
    const dispatch = useDispatch();
    const post = useSelector(getPopupPost);
    if (post) {
        return (<section className="big-picture  overlay">
            <h2 className="big-picture__title  visually-hidden">Просмотр фотографии</h2>
            <div className="big-picture__preview">

                {/* <!-- Просмотр изображения --> */}
                <div className="big-picture__img">
                    <img src={post.url} alt="Девушка в купальнике" width="600" height="600" />
                </div>

                {/* <!-- Информация об изображении. Подпись, комментарии, количество лайков --> */}
                <div className="big-picture__social  social">
                    <div className="social__header">
                        <img className="social__picture" src="img/avatar-1.svg" alt="Аватар автора фотографии" width="35" height="35" />
                        <p className="social__caption">{post.description}</p>
                        <p className="social__likes">Нравится <span className="likes-count">{post.likes}</span></p>
                    </div>

                    {/* <!-- Комментарии к изображению --> */}
                    <Comments comments={post.comments}/>
                </div>

                {/* <!-- Кнопка для выхода из полноэкранного просмотра изображения --> */}
                <button type="reset" className="big-picture__cancel  cancel" id="picture-cancel" onClick={() => dispatch(setPopupPostAction(undefined))}>Закрыть</button>
            </div>
        </section>
        );
    }
    else {
        return <></>;
    }
}

export default PostPopup;