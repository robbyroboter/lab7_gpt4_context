import { useState } from "react";
import useData from "../../hooks/useData";
import Preloader from "../Preloader";
import {
    useVrContext,
    usePostVrContext,
} from "../../contexts/admin/VrContext";

const AdminVrLeft = ({ womanImage }) => {
    const [srcData, setSrcData] = useState(womanImage.src);
    const [altData, setAltData] = useState(womanImage.alt);
    let vrContext = useVrContext();

    const handleSrcData = (e) => {
        setSrcData(e.target.value);
        vrContext.womanImage.src = e.target.value;
    };

    const handleAltData = (e) => {
        setAltData(e.target.value);
        vrContext.womanImage.alt = e.target.value;
    };

    return (
        <div className="admin_container__block">
            <h3>Изображение:</h3>
            <div className="block__item">
                <label>Ссылка:</label>
                <input
                    type="text"
                    className="item__long_input"
                    value={srcData}
                    onChange={handleSrcData}
                />
            </div>
            <div className="block__item">
                <label>Описание:</label>
                <input
                    type="text"
                    className="item__long_input"
                    value={altData}
                    onChange={handleAltData}
                />
            </div>
        </div>
    );
};

const AdminVrRight = (props) => {
    const [textData, setTextData] = useState(props.text);
    const [headerData, setHeaderData] = useState(props.header);
    const [contentData, setContentData] = useState(props.content);
    let vrContext = useVrContext();

    const handleTextData = (e) => {
        setTextData(e.target.value);
        vrContext.text = e.target.value;
    };
    const handleHeaderData = (e) => {
        setHeaderData(e.target.value);
        vrContext.header = e.target.value;
    };

    const handleContentData = (e) => {
        setContentData(e.target.value);
        vrContext.content = e.target.value;
    };

    return (
        <div className="admin_container__block">
            <h3>Контент:</h3>
            <div className="block__item">
                <label>Текст:</label>
                <input
                    className="item__long_input"
                    type="text"
                    value={textData}
                    onChange={handleTextData}
                />
            </div>
            <div className="block__item">
                <label>Заголовок:</label>
                <input
                    type="text"
                    className="item__long_input"
                    value={headerData}
                    onChange={handleHeaderData}
                />
            </div>
            <div className="block__item">
                <label>Контент:</label>
                <input
                    className="item__long_input"
                    type="text"
                    value={contentData}
                    onChange={handleContentData}
                />
            </div>
        </div>
    );
};

const AdminVr = () => {
    const { isLoading, isError, error, data } = useData({
        endpoint: "vr",
        options: {
            method: "GET",
        },
    });

    const [isPostDataLoading, setIsPostDataLoading] = useState(false);
    const [isPostDataError, setIsPostDataError] = useState(false);
    const [postDataError, setPostDataError] = useState(null);

    const postData = usePostVrContext();

    const handlePostData = async () => {
        try {
            setIsPostDataLoading(true);
            const { isPostDataError, postDataError } = await postData();
            setIsPostDataError(isPostDataError);
            setIsPostDataError(postDataError);
        } catch (error) {
            console.log(error);
            setIsPostDataError(isPostDataError);
            setPostDataError(postDataError);
        }
        setIsPostDataLoading(false);
    };

    if (isLoading) return <Preloader />;
    if (isError) return <div>{JSON.stringify(error)}</div>;
    if (!data) return <Preloader />;

    // console.log("New data");
    // console.log(data);

    return (
        <div className="admin_container admin_Hero">
            <h2>Vr-секция.</h2>
            <AdminVrLeft womanImage={data.womanImage} />
            <AdminVrRight text={data.text} header={data.header} content={data.content} />
            <button className="btn primary-btn" onClick={handlePostData}>
                {isPostDataLoading && <Preloader />} Сохранить
            </button>
            {isError && <div className="error">{JSON.stringify(error)}</div>}
            {isPostDataError && (
                <div className="error">{JSON.stringify(postDataError)}</div>
            )}
        </div>
    );
};

export default AdminVr;
