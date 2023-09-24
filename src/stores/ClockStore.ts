import { derived, get, writable } from "svelte/store";

const DEFAULT_GAME_INTERVAL_CLOCK_TIME: number = 720;
const DEFAULT_SHOT_CLOCK_TIME: number = 5;

// all clock time values are in seconds
const gameClockTime = writable(DEFAULT_GAME_INTERVAL_CLOCK_TIME);
const shotClockTime = writable(DEFAULT_SHOT_CLOCK_TIME);
const breakClockTime = writable(null);

const isClockRunning = writable(false);
let gameClockTimeInterval: number;
let shotClockTimeInterval: number;

function startGameClockTime() {
    gameClockTimeInterval = setInterval(() => {
        gameClockTime.update((clockTime) => clockTime - 1);
    }, 1000);
}

function startShotClockTime() {
    shotClockTimeInterval = setInterval(() => {
        shotClockTime.update((clockTime) => clockTime - 1);

        if (get(shotClockTime) < 0) {
            // todo: execute shot clock alarm
            resetShotClock();
        }
    }, 1000);
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

export { gameClockTime, shotClockTime, breakClockTime, isClockRunning, startClockTime, stopClockTime, resetGameClock, resetShotClock };