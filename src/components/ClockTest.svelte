<script lang="ts">
let secondsRemaining : number = 5000;

let timer : any = null;

function formatSeconds(seconds : number) {
    let minutes : number = Math.floor(seconds / 60);

    seconds %= 60;

    return `${formatNumber(minutes)}:${formatNumber(seconds)}`;
}

function formatNumber(number: number) {
    if (number < 10) {
        return "0" + number;
    }

    return number.toString();
}

function startTime() {
    // only create an interval if no timer is present
    if (timer === null && secondsRemaining > 0) {
        timer = setInterval(() => {
            if (secondsRemaining > 0) {
                secondsRemaining -= 1;
                console.log(secondsRemaining);
            } else {
                // stop executing interval
                clearInterval(timer);
                timer = null;
            }

        }, 1000);
    }
}

function stopTime() {
    clearInterval(timer);
    timer = null;
}

function resetTime() {
    secondsRemaining = 10;
}

function validateTime(seconds : number) {
    // ensure clock cannot be negative
    if (seconds < 0) {
        return 0;
    } 
    
    if (seconds > 5999) {
        return 5999; // set timer countdown to 99:59
    }

    return seconds;
}

function addSecond() {
    let tmpSeconds = secondsRemaining + 1;
    secondsRemaining = validateTime(tmpSeconds);
}

function addMinute() {
    let tmpSeconds = secondsRemaining + 60;
    secondsRemaining = validateTime(tmpSeconds);
}

function subtractSecond() {
    let tmpSeconds = secondsRemaining - 1;
    secondsRemaining = validateTime(tmpSeconds);
}

function subtractMinute() {
    let tmpSeconds = secondsRemaining - 60;
    secondsRemaining = validateTime(tmpSeconds);
}
</script>

<div>
    <button on:click={subtractMinute}>Subtract Minute</button>
    <button on:click={addMinute}>Add Minute</button>
    <button on:click={subtractSecond}>Subtract Second</button>
    <button on:click={addSecond}>Add Second</button>
</div>
<p>{formatSeconds(secondsRemaining)}</p>
<div>
    <button on:click={startTime}>Start Time</button>
    <button on:click={stopTime}>Stop Time</button>
    <button on:click={resetTime}>Reset Time</button>
</div>
