<script lang="ts">
    import { decrementGameInterval, incrementGameInterval } from "../stores/ClockStore";
    import ArrowButton from "./ArrowButton.svelte";
    import GameIntervalTracker from "./GameIntervalTracker.svelte";
    import Label from "./Label.svelte";

    let className: string = "";
    let currentInterval: number = 1;
    let totalIntervals: number = 4;

    export { className as class, currentInterval, totalIntervals };

    function getGameIntervalText(currentInterval: number) {
        let nth: string | null;
        let intervalName: string;

        // todo: fix logic for forming game interval text

        switch (currentInterval) {
            case 1:
                nth = "1st";
                break;
            case 2:
                nth = "2nd";
                break;
            case 3:
                nth = "3rd";
                break;
            case 4:
                nth = "4th";
                break;
            default:
                nth = null;
        }

        switch (totalIntervals) {
            case 2:
                intervalName = "Half";
                break;
            case 4:
                intervalName = "Qtr";
                break;
            default:
                intervalName = "Game";
        }

        return intervalName === "Game" ? intervalName : `${nth} ${intervalName}`;
    }
</script>

<div class="flex flex-col justify-center gap-y-4 xl:gap-y-5 3xl:gap-y-6 {className}">
    <div class="px-2 lg:px-4 xl:px-8 2xl:px-10 3xl:px-14 flex justify-between items-center">
        <ArrowButton direction="left" type={currentInterval <= 1 ? "disabled" : "default"} on:click={decrementGameInterval} />
        <Label size="2xl" text={getGameIntervalText(currentInterval)} />
        <ArrowButton direction="right" type={currentInterval >= totalIntervals ? "disabled" : "default"} on:click={incrementGameInterval} />
    </div>
    <GameIntervalTracker currentInterval={currentInterval} totalIntervals={totalIntervals} />
</div>