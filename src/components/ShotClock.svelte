<script lang="ts">
    import Button from "./Button.svelte";
    import Label from "./Label.svelte";
    import ShotClockDisplay from "./ShotClockDisplay.svelte";
    import Spacer from "./Spacer.svelte";
</script>

<div class="flex flex-col w-60 p-5 rounded-xl bg-neutral-800">
    <Label text="Shot Clock" />
    <Spacer />
    <ShotClockDisplay />
    <Spacer size={2} />
    <div class="flex">
        <Button class="flex-1" text="- Sec" />
        <Button class="flex-1" text="+ Sec" />
    </div>
    <Spacer size={2} />
    <Button text="Reset" />
</div>