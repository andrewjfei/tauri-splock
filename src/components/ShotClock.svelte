<script lang="ts">
    import Button from "./Button.svelte";
    import Label from "./Label.svelte";
    import SecondaryClockDisplay from "./SecondaryClockDisplay.svelte";

    let className: string = "";

    export { className as class };
</script>

<div class="flex flex-col gap-y-4 p-5 rounded-xl bg-neutral-800 {className}">
    <Label text="Shot Clock" />
    <SecondaryClockDisplay clockTimeInSeconds={24} isSet={true} />
    <div class="flex gap-x-4">
        <Button class="flex-1" text="- Sec" />
        <Button class="flex-1" text="+ Sec" />
    </div>
    <Button text="Reset" />
</div>