function getTextSize(size: string) {
    let classNames: string;
    switch (size) {
        case "lg":
            classNames = "text-lg lg:text-xl xl:text-2xl 3xl:text-3xl";
            break;
        case "xl":
            classNames = "text-xl lg:text-2xl xl:text-3xl 3xl:text-4xl";
            break;
        case "2xl":
            classNames = "text-2xl lg:text-3xl xl:text-4xl 3xl:text-5xl";
            break;
        default:
            classNames = "text-md lg:text-lg xl:text-xl 3xl:text-2xl";
    }

    return classNames;
}

export { getTextSize };