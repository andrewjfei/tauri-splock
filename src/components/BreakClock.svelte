<script lang="ts">
    import Button from "./Button.svelte";
    import Label from "./Label.svelte";
    import SecondaryClockDisplay from "./SecondaryClockDisplay.svelte";
</script>

<div class="flex flex-col gap-y-4 w-60 p-5 rounded-xl bg-neutral-800">
    <Label text="Break Clock" />
    <SecondaryClockDisplay />
    <Button text="Timeout" />
</div>