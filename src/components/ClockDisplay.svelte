<script lang="ts">
    import { formatNumber, formatToMinutes } from "../utils/ClockUtil";

    let className: string = "";
    let clockTimeInSeconds: number = 0;
    let format: string = ""
    let colour: string = "primary";

	export { className as class, clockTimeInSeconds, format, colour};

    function getFontWeight() {
        switch (format) {
            case "mm:ss":
                return "font-regular";
            default:
                return "font-semibold";
        }
    }
    
    function getTextColour() {
        switch (colour) {
            case "primary":
                return "text-orange-600";
            case "disabled":
                return "text-neutral-800";
            default:
                return "text-neutral-200";
        }
    }

    function getClockTime() {
        switch (format) {
            case "mm:ss":
                return formatToMinutes(clockTimeInSeconds);
            default:
                return formatNumber(clockTimeInSeconds);
        }

        // todo: use this instead of switch statement when util class is ready
        // formatSeconds(format, clockTimeInSeconds);
    }
</script>

<div class="px-5 py-3 inline-block tracking-wider {getFontWeight()} text-5xl text-center {getTextColour()} rounded-md bg-neutral-900 {className}">
    {getClockTime()}
</div>