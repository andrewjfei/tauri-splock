<script lang="ts">
    import Button from "./Button.svelte";
    import Label from "./Label.svelte";
    import SecondaryClockDisplay from "./SecondaryClockDisplay.svelte";

    let className: string = "";

    export { className as class };
</script>

<div class="flex flex-col gap-y-4 p-5 rounded-xl bg-neutral-800 {className}">
    <Label text="Break Clock" />
    <SecondaryClockDisplay />
    <Button class="flex-grow" text="Timeout" />
</div>