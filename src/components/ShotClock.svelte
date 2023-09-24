<script lang="ts">
    import { DEFAULT_SHOT_CLOCK_TIME, addSecondToShotClock, isClockRunning, resetShotClock, shotClockTime, subtractSecondFromShotClock } from "../stores/ClockStore";
    import Button from "./Button.svelte";
    import Label from "./Label.svelte";
    import SecondaryClockDisplay from "./SecondaryClockDisplay.svelte";

    let className: string = "";

    export { className as class };
</script>

<div class="p-5 grid grid-rows-4 gap-y-4 rounded-xl bg-neutral-800 {className}">
    <div class="row-span-2 flex flex-col gap-y-4">
        <Label size="lg" text="Shot Clock" />
        <SecondaryClockDisplay class="flex-grow" clockTime={$shotClockTime} isSet={true} />
    </div>
    <div class="row-span-1 flex gap-x-4">
        <Button 
            class="flex-1"
            type={$isClockRunning || $shotClockTime <= 0 ? "disabled" : "default"} 
            size="lg" 
            text="- Sec" 
            on:click={subtractSecondFromShotClock}
        />
        <Button 
            class="flex-1"
            type={$isClockRunning || $shotClockTime >= DEFAULT_SHOT_CLOCK_TIME ? "disabled" : "default"}  
            size="lg" 
            text="+ Sec"
            on:click={addSecondToShotClock}
        />
    </div>
    <Button class="row-span-1" size="lg" text="Reset" on:click={resetShotClock} />
</div>