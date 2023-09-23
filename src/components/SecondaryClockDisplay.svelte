<script lang="ts">
    import ClockDisplay from "./ClockDisplay.svelte";

    let className: string = "";
    let clockTimeInSeconds: number = 0;
    let isSet: boolean = false;

	export { className as class, clockTimeInSeconds, isSet };
</script>

<ClockDisplay class="{className}" clockTimeInSeconds={clockTimeInSeconds} colour={isSet ? "primary" : "disabled"} />