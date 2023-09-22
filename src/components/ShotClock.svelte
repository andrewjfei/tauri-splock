<script lang="ts">
    import Button from "./Button.svelte";
    import Label from "./Label.svelte";
    import ShotClockDisplay from "./ShotClockDisplay.svelte";
    import Spacer from "./Spacer.svelte";
</script>

<div class="flex flex-col gap-y-4 w-60 p-5 rounded-xl bg-neutral-800">
    <Label text="Shot Clock" />
    <ShotClockDisplay />
    <div class="flex gap-x-4">
        <Button class="flex-1" text="- Sec" />
        <Button class="flex-1" text="+ Sec" />
    </div>
    <Button text="Reset" />
</div>