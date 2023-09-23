// todo: create a more generic util function (e.g. formatSeconds(pattern, seconds))

function formatToMinutes(seconds : number) {
    const minutes : number = Math.floor(seconds / 60);

    seconds %= 60;

    return `${formatNumber(minutes)}:${formatNumber(seconds)}`;
}

function formatNumber(number: number) {
    if (number < 10) {
        return "0" + number;
    }

    return number.toString();
}

export { formatToMinutes, formatNumber };