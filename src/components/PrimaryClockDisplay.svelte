<script lang="ts">
    import { isGameIntervalBuzzerOn } from "../stores/ClockStore";
    import ClockDisplay from "./ClockDisplay.svelte";

    let className: string = "";
    let clockTime: number = 0; // seconds

    export { className as class, clockTime };
</script>

<ClockDisplay class="{className}" clockTime={clockTime} pattern="mm:ss" colour={$isGameIntervalBuzzerOn ? "primary" : "default"} />