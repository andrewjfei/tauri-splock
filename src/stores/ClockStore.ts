import { get, writable, type Writable } from "svelte/store";

const DEFAULT_GAME_INTERVAL_CLOCK_TIME: number = 720000;
const DEFAULT_SHOT_CLOCK_TIME: number = 24000;
const DEFAULT_TIMEOUT_CLOCK_TIME: number = 30000;

const currentInterval: Writable<number> = writable(1);
const totalIntervals: Writable<number> = writable(4);

// all clock time values are in milliseconds
const gameClockTime: Writable<number> = writable(DEFAULT_GAME_INTERVAL_CLOCK_TIME);
const shotClockTime: Writable<number> = writable(DEFAULT_SHOT_CLOCK_TIME);
const breakClockTime: Writable<number | null> = writable(null);

const isGameClockRunning: Writable<boolean> = writable(false);
const isBreakClockRunning: Writable<boolean> = writable(false);

const isGameIntervalBuzzerOn: Writable<boolean> = writable(false);

let gameClockTimeInterval: number;
let shotClockTimeInterval: number;
let breakClockTimeInterval: number;

function incrementGameInterval() {
    if (get(currentInterval) < get(totalIntervals)) {
        currentInterval.update((interval) => interval + 1);
    }
}

function decrementGameInterval() {
    if (get(currentInterval) > 1) {
        currentInterval.update((interval) => interval - 1);
    }
}

function startGameClockTime() {
    gameClockTimeInterval = setInterval(() => {
        gameClockTime.update((clockTime) => clockTime - 10);

        if (get(gameClockTime) <= 0) {
            stopClockTime();

            // todo: play shot game interval end buzzer
            isGameIntervalBuzzerOn.set(true);

            // delay update of game interval and game clock time visuals while buzzer sounds
            setTimeout(() => {
                incrementGameInterval();
                resetGameClock();
                resetShotClock();
                isGameIntervalBuzzerOn.set(false);
            }, 1500);
        }
    }, 10);
}

function startShotClockTime() {
    shotClockTimeInterval = setInterval(() => {
        shotClockTime.update((clockTime) => clockTime - 10);

        // stop all clocks and reset shot clock if shot clock violation
        if (get(shotClockTime) <= 0) {
            // todo: play shot clock violation buzzer

            stopClockTime();
            resetShotClock();
        }
    }, 10);
}

function startBreakClockTime() {
    breakClockTimeInterval = setInterval(() => {
        breakClockTime.update((clockTime) => clockTime! - 10);

        if (get(breakClockTime)! <= 0) {
            stopBreakClockTime();
            breakClockTime.set(null);
        }
    }, 10);
}

function startTimeoutClockTime() {
    stopClockTime();
    breakClockTime.set(DEFAULT_TIMEOUT_CLOCK_TIME);
    startBreakClockTime();
    isBreakClockRunning.set(true);
}

function startClockTime() {
    startGameClockTime();
    startShotClockTime();
    isGameClockRunning.set(true);
}

function stopGameClockTime() {
    clearInterval(gameClockTimeInterval);
}

function stopShotClockTime() {
    clearInterval(shotClockTimeInterval);
}

function stopBreakClockTime() {
    clearInterval(breakClockTimeInterval);
    isBreakClockRunning.set(false);
}

function stopClockTime() {
    stopGameClockTime();
    stopShotClockTime();
    isGameClockRunning.set(false);
}

function resetGameClock() {
    stopGameClockTime();
    gameClockTime.set(DEFAULT_GAME_INTERVAL_CLOCK_TIME);
}

function resetShotClock() {
    stopShotClockTime();
    shotClockTime.set(DEFAULT_SHOT_CLOCK_TIME);

    if (get(isGameClockRunning)) {
        startShotClockTime();
    }
}

function addMinuteToGameClock() {
    // if the game clock time is within one second of the maximum clock time then set it to the maximum clock time
    gameClockTime.update((clockTime) => clockTime + 60000 > DEFAULT_GAME_INTERVAL_CLOCK_TIME - 1000 ? DEFAULT_GAME_INTERVAL_CLOCK_TIME : clockTime + 60000);
}

function subtractMinuteFromGameClock() {
    // if the game clock time is less than 0 then set it to 0
    gameClockTime.update((clockTime) => clockTime - 60000 < 0 ? 0 : clockTime - 60000);
}

function addSecondToGameClock() {
    // if the game clock time is within one second of the maximum clock time then set it to the maximum clock time
    gameClockTime.update((clockTime) => clockTime + 1000 > DEFAULT_GAME_INTERVAL_CLOCK_TIME - 1000 ? DEFAULT_GAME_INTERVAL_CLOCK_TIME : clockTime + 1000);
}

function subtractSecondFromGameClock() {
    // if the game clock time is less than 0 then set it to 0
    gameClockTime.update((clockTime) => clockTime - 1000 < 0 ? 0 : clockTime - 1000);
}

function addSecondToShotClock() {
    // if the shot clock time is within one second of the maximum clock time then set it to the maximum clock time
    shotClockTime.update((clockTime) => clockTime + 1000 > DEFAULT_SHOT_CLOCK_TIME - 1000 ? DEFAULT_SHOT_CLOCK_TIME : clockTime + 1000);
}

function subtractSecondFromShotClock() {
    // if the shot clock time is less than 0 then set it to 0
    shotClockTime.update((clockTime) => clockTime - 1000 < 0 ? 0 : clockTime - 1000);
}

export { DEFAULT_GAME_INTERVAL_CLOCK_TIME, DEFAULT_SHOT_CLOCK_TIME, currentInterval, totalIntervals, gameClockTime, shotClockTime, breakClockTime, isGameClockRunning, isBreakClockRunning, isGameIntervalBuzzerOn, incrementGameInterval, decrementGameInterval, startClockTime, startTimeoutClockTime, stopClockTime, resetGameClock, resetShotClock, addMinuteToGameClock, subtractMinuteFromGameClock, addSecondToGameClock, subtractSecondFromGameClock, addSecondToShotClock, subtractSecondFromShotClock };