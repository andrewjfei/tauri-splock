<script lang="ts">
    import ClockDisplay from "./ClockDisplay.svelte";

    let className: string = "";
    let clockTime: number = 0; // seconds
    let isSet: boolean = false;

    export { className as class, clockTime, isSet };
</script>

<ClockDisplay class="{className}" clockTime={clockTime} colour={isSet ? "primary" : "disabled"} />