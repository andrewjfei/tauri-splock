<script lang="ts">
    import GameIntervalTracker from "./GameIntervalTracker.svelte";
import Label from "./Label.svelte";

    let className: string = "";
    let currentInterval: number = 3;
    let totalIntervals: number = 4;

	export { className as class, type, text };

    function getGameIntervalText() {
        let currentIntervalText: string;
        let b: string;

        switch (currentInterval) {
            case 1:
                currentIntervalText = "1st";
                break;
            case 2:
                currentIntervalText = "2nd";
                break;
            case 3:
                currentIntervalText = "3rd";
                break;
            case 4:
                currentIntervalText = "4th";
                break;
            default:
                currentIntervalText = "1st";
        }

        switch (totalIntervals) {
            case 2:
                b = "Half";
                break;
            case 4:
                b = "Qtr";
                break;
            default:
                b = "Game";
        }

        return `${currentIntervalText} ${b}`;
    }
</script>

<div class="flex flex-col gap-y-4 xl:gap-y-5 3xl:gap-y-6 justify-center {className}">
    <Label size="2xl" text={getGameIntervalText()} />
    <GameIntervalTracker currentInterval={currentInterval} totalIntervals={totalIntervals} />
</div>