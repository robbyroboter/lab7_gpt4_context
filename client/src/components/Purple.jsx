import {purpleData} from "../mockData/purpleData";
import useData from "../hooks/useData";
import Preloader from "./Preloader";
export const Text = ({ text }) => (
    <p className="small__text">{text}</p>
);

export const Header = ({ header }) => (
    <h3 className="big__text">{header}</h3>
);

export const Button = ({ type, title }) => {
    switch (type) {
        case "button":
            return (
                <button className="cta_buttons__signin btn semi-button">{title}</button>
            );
        default:
            return null;
    }
};

const Purple = () => {
    const { isLoading, isError, error, data } = useData({
        endpoint: "purple",
        options: {
            method: "GET",
        },
    });

    if (isError) {
        console.log("error");
        console.log(error);
    }

    if (isLoading) return <Preloader />;
    const renderedData = data || purpleData;
    const { text, header, purpleCtaButtons } = renderedData;

    return (
        <>
            <div className="text__block">
                <Text text={text}/>
                <Header header={header}/>
            </div>
            <div className="button__block">
                <Button type={purpleCtaButtons.type} title={purpleCtaButtons.title} />
            </div>
        </>
    );
};

export default Purple;