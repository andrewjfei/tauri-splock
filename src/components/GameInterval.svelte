<script lang="ts">
    import GameIntervalTracker from "./GameIntervalTracker.svelte";
    import Label from "./Label.svelte";

    let className: string = "";
    let currentInterval: number = 1;
    let totalIntervals: number = 4;

    export { className as class, currentInterval, totalIntervals };

    function getGameIntervalText() {
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
    <Label size="2xl" text={getGameIntervalText()} />
    <GameIntervalTracker currentInterval={currentInterval} totalIntervals={totalIntervals} />
</div>