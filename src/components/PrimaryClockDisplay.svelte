<script lang="ts">
    import ClockDisplay from "./ClockDisplay.svelte";

    let className: string = "";
    let clockTimeInSeconds: number = 0;

	export { className as class, clockTimeInSeconds };
</script>

<ClockDisplay class="{className}" clockTimeInSeconds={clockTimeInSeconds} format="mm:ss" colour="default" />