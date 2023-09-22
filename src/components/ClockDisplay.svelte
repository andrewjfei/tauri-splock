<script lang="ts">
    let className: string = "";
    let clockTime: string = "00";
    let format: string = ""
    let colour: string = "primary";

	export { className as class, clockTime, format, colour};

    function getTextColour() {
        switch (colour) {
            case "primary":
                return "text-orange-600";
            case "disabled":
                return "text-neutral-800";
            default:
                return "text-orange-600";
        }
    }
</script>

<div class="px-5 py-3 inline-block tracking-wider font-semibold text-5xl {getTextColour()} rounded-md bg-neutral-900 {className}">
    {clockTime}
</div>