<script lang="ts">
    import { gameClockTime } from "../stores/ClockStore";
    import PrimaryClockDisplay from "./PrimaryClockDisplay.svelte";

    let className: string = "";

    export { className as class };
</script>

<PrimaryClockDisplay class="{className}" clockTime={$gameClockTime} />