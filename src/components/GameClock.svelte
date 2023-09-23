<script lang="ts">
    import PrimaryClockDisplay from "./PrimaryClockDisplay.svelte";

    let className: string = "";

    export { className as class };
</script>

<PrimaryClockDisplay class="{className}" clockTime={720} />