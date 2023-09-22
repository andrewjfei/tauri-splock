<script lang="ts">
    import ClockDisplay from "./ClockDisplay.svelte";

    let className: string = "";
	export { className as class };
</script>

<ClockDisplay class=" {className}">

</ClockDisplay>