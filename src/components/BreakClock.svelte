<script lang="ts">
    import { breakClockTime, isBreakClockRunning, startTimeoutClockTime } from "../stores/ClockStore";
    import Button from "./Button.svelte";
    import Label from "./Label.svelte";
    import SecondaryClockDisplay from "./SecondaryClockDisplay.svelte";

    let className: string = "";

    export { className as class };
</script>

<div class="p-5 grid grid-rows-4 gap-y-4 rounded-xl bg-neutral-800 {className}">
    <div class="row-span-2 flex flex-col gap-y-4">
        <Label size="lg" text="Break Clock" />
        <SecondaryClockDisplay class="flex-grow" clockTime={$breakClockTime !== null ? $breakClockTime : 0} isSet={$breakClockTime === null ? false : true} />
    </div>
    <Button 
        class="row-span-2" 
        type={$isBreakClockRunning ? "disabled" : "default"} 
        size="lg" text="Timeout" 
        on:click={startTimeoutClockTime} 
    />
</div>