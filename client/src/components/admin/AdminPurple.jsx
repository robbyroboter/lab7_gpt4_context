import { useState } from "react";
import useData from "../../hooks/useData";
import Preloader from "../Preloader";
import {
    usePurpleContext,
    usePostPurpleContext,
} from "../../contexts/admin/PurpleContext";

const AdminPurpleHeader = (props) => {
    const [textData, setTextData] = useState(props.text);
    const [headerData, setHeaderData] = useState(props.header);
    let purpleContext = usePurpleContext();

    const handleTextData = (e) => {
        setTextData(e.target.value);
        purpleContext.text = e.target.value;
    };
    const handleHeaderData = (e) => {
        setHeaderData(e.target.value);
        purpleContext.header = e.target.value;
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
        </div>
    );
};

const AdminButtonsSingleButton = ({item, index}) => {
    const [titleData, setTitleData] = useState(item.title);
    const [typeData, setTypeData] = useState(item.type);
    let purpleContext = usePurpleContext();

    const handleTitleData = (e) => {
        setTitleData(e.target.value);
        purpleContext.purpleCtaButtons[index].title = e.target.value;
    };

    const handleTypeData = (e) => {
        setTypeData(e.target.value);
        purpleContext.purpleCtaButtons[index].type = e.target.value;
    };

    return (
        <div className="block__card">
            <div className="block__item">
                <label>Наименование кнопки:</label>
                <input type="text" value={titleData} onChange={handleTitleData} />
            </div>
            <div className="block__item">
                <label>Тип:</label>
                <input type="text" value={typeData} onChange={handleTypeData} />
            </div>
        </div>
    );
};

const AdminButtons = ({ purpleCtaButtons }) => {
    if (!Array.isArray(purpleCtaButtons)) {
        purpleCtaButtons = [purpleCtaButtons]; // Преобразовать в массив, если это объект
    }

    return (
        <div className="admin_container__block">
            <h3>Кнопки:</h3>
            {purpleCtaButtons.map((item, index) => (
                <AdminButtonsSingleButton key={index} item={item} index={index} />
            ))}
        </div>
    );
};

const AdminPurple = () => {
    const { isLoading, isError, error, data } = useData({
        endpoint: "purple",
        options: {
            method: "GET",
        },
    });

    const [isPostDataLoading, setIsPostDataLoading] = useState(false);
    const [isPostDataError, setIsPostDataError] = useState(false);
    const [postDataError, setPostDataError] = useState(null);

    const postData = usePostPurpleContext();

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
            <h2>Фиолетовая-секция</h2>
            <AdminPurpleHeader text={data.text} header={data.header} />
            <AdminButtons purpleCtaButtons={data.purpleCtaButtons} />
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

export default AdminPurple;
