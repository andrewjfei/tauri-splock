const NUM_OF_SECONDS_IN_MINUTE: number = 60;
const NUM_OF_MINUTES_IN_HOUR: number = 60;

function formatClockTime(pattern: string, milliseconds: number) {
    let clockTime: string;

    switch (pattern) {
        case "mm:ss":
            clockTime = toMinutesAndSeconds(milliseconds);
            break;
        default:
            clockTime = toSeconds(milliseconds);
    }

    return clockTime;
}

function toMinutesAndSeconds(milliseconds: number) {
    let seconds: number = Math.ceil(milliseconds / 1000);
    
    const minutes: number = Math.floor(seconds / 60);

    seconds %= 60;

    return `${prefixWithZeros(minutes, NUM_OF_MINUTES_IN_HOUR, 2)}:${prefixWithZeros(seconds, NUM_OF_SECONDS_IN_MINUTE, 2)}`;
}

function toSeconds(milliseconds: number) {
    const seconds: number = Math.ceil(milliseconds / 1000);
    return prefixWithZeros(seconds, NUM_OF_SECONDS_IN_MINUTE, 2);
}

function prefixWithZeros(number: number, overflowValue: number, totalDigits: number) {
    const processedNumber = number % overflowValue;

    return String(processedNumber).padStart(totalDigits, "0");
}

export { formatClockTime };