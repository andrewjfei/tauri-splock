<script lang="ts">
    import { formatClockTime } from "../utils/ClockUtil";

    let className: string = "";
    let clockTime: number = 0; // seconds
    let pattern: string = "ss"
    let colour: string = "primary";

	export { className as class, clockTime, pattern, colour };

    function getFontWeight() {
        switch (pattern) {
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
</script>

<div class="px-5 py-3 flex justify-center items-center tracking-wider text-6xl lg:text-7xl xl:text-8xl 3xl:text-9xl rounded-md bg-neutral-900 select-none hover:cursor-default {getFontWeight()} {getTextColour()} {className}">
    {formatClockTime(pattern, clockTime)}
</div>