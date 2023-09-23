<script lang="ts">
    import Button from "./Button.svelte";
    import Label from "./Label.svelte";
    import SecondaryClockDisplay from "./SecondaryClockDisplay.svelte";

    let className: string = "";

    export { className as class };
</script>

<div class="grid grid-rows-4 gap-y-4 p-5 rounded-xl bg-neutral-800 {className}">
    <div class="row-span-2 flex flex-col gap-y-4">
        <Label size="lg" text="Break Clock" />
        <SecondaryClockDisplay class="flex-grow" />
    </div>
    <Button class="row-span-2" size="lg" text="Timeout" />
</div>