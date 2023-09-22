<script lang="ts">
    import { formatNumber } from "../utils/ClockUtil";
    import ClockDisplay from "./ClockDisplay.svelte";

    let className: string = "";
    let clockTimeInSeconds: number = 0;
    let isSet: boolean = false;

	export { className as class, clockTimeInSeconds, isSet };
</script>

<ClockDisplay class="{className}" clockTime={formatNumber(clockTimeInSeconds)} colour={isSet ? "primary" : "disabled"}>

</ClockDisplay>