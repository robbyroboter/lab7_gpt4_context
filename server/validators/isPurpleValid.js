const { isArrayHasLength, isObjectHasProps } = require("./utils/validators");

const isPurpleDataValid = (data) => {
    // проверяем объект на наличие полей и соответствие типу "объект"
    isObjectHasProps(data, [
        "text",
        "header",
        "purpleCtaButtons",
    ]);

    const { purpleCtaButtons } = data;

    // проверяем внутренний объект на наличие полей и соответствие типу "объект"
    isObjectHasProps(purpleCtaButtons, ["type", "title"]);
};

module.exports = isPurpleDataValid;