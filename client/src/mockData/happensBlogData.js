const header=
    "Многое Происходит, Мы Ведем об Этом Блог."

const blog__item__large={
    image:{
        src: "./assets/img/blog/first_blog.png",
        alt: "one blog",
    },
    text: "Сент 26, 2021",
    header: "GPT-3 и Openai – это будущее. Давайте разберемся, как это?",
}

const blog__small= [
    {
        image: {
            src: "./assets/img/blog/second_blog.png",
            alt: "two blog",
        },
        text: "Сент 26, 2021",
        header: <h3 className={"h3 big__text__blog"}>GPT-3 и Openai – это будущее. Давайте разберемся, как <br/> это?</h3>,
    },
    {
        image: {
            src: "./assets/img/blog/third_blog.png",
            alt: "three blog",
        },
        text: "Сент 26, 2021",
        header: <h3 className={"h3 big__text__blog"}>GPT-3 и Openai – это будущее. Давайте разберемся, как <br/> это?</h3>,
            },
            {
                image:{
                src: "./assets/img/blog/fourth_blog.png",
                alt: "four blog",
            },
                text: "Сент 26, 2021",
                header: <h3 className={"h3 big__text__blog"}>GPT-3 и Openai – это будущее. Давайте разберемся, как <br/> это?</h3>,
            },
    {
        image: {
            src: "./assets/img/blog/fifth_blog.png",
            alt: "five blog",
        },
        text: "Сент 26, 2021",
        header: <h3 className={"h3 big__text__blog"}>GPT-3 и Openai – это будущее. Давайте разберемся, как <br/> это?
        </h3>,
    },
]

const happensBlogData = {
    header,
    blog__item__large,
    blog__small,
}
export default happensBlogData