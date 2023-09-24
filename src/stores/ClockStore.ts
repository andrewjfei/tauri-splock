import { get, writable } from "svelte/store";

const DEFAULT_GAME_INTERVAL_CLOCK_TIME: number = 720000;
const DEFAULT_SHOT_CLOCK_TIME: number = 24000;

// all clock time values are in milliseconds
const gameClockTime = writable(DEFAULT_GAME_INTERVAL_CLOCK_TIME);
const shotClockTime = writable(DEFAULT_SHOT_CLOCK_TIME);
const breakClockTime = writable(null);

const isClockRunning = writable(false);
let gameClockTimeInterval: number;
let shotClockTimeInterval: number;

function startGameClockTime() {
    gameClockTimeInterval = setInterval(() => {
        gameClockTime.update((clockTime) => clockTime - 10);

        if (get(gameClockTime) <= 0) {
            stopClockTime();
            resetShotClock();
        }
    }, 10);
}

function startShotClockTime() {
    shotClockTimeInterval = setInterval(() => {
        shotClockTime.update((clockTime) => clockTime - 10);

        if (get(shotClockTime) <= 0) {
            stopClockTime();
            resetShotClock();
        }
    }, 10);
}

function startClockTime() {
    startGameClockTime();
    startShotClockTime();
    isClockRunning.set(true);
}

function stopGameClockTime() {
    clearInterval(gameClockTimeInterval);
}

function stopShotClockTime() {
    clearInterval(shotClockTimeInterval);
}

function stopClockTime() {
    stopGameClockTime();
    stopShotClockTime();
    isClockRunning.set(false);
}

function resetGameClock() {
    stopGameClockTime();
    gameClockTime.set(DEFAULT_GAME_INTERVAL_CLOCK_TIME);
}

function resetShotClock() {
    stopShotClockTime();
    shotClockTime.set(DEFAULT_SHOT_CLOCK_TIME);

    if (get(isClockRunning)) {
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

export { DEFAULT_GAME_INTERVAL_CLOCK_TIME, DEFAULT_SHOT_CLOCK_TIME, gameClockTime, shotClockTime, breakClockTime, isClockRunning, startClockTime, stopClockTime, resetGameClock, resetShotClock, addMinuteToGameClock, subtractMinuteFromGameClock, addSecondToGameClock, subtractSecondFromGameClock, addSecondToShotClock, subtractSecondFromShotClock };