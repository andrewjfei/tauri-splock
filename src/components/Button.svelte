<script lang="ts">
    import { getTextSize } from "../utils/TailwindCSSUtil";

    let className: string = "";
    let type: string = "default";
    let size: string = "md";
    let text: string = "Button";

    export { className as class, type, size, text };

    function getButtonColour(type: string) {
        switch (type) {
            case "primary": 
                return "text-neutral-200 bg-orange-600 hover:bg-orange-500";
            case "disabled": 
                return "text-neutral-500 bg-neutral-800";
            default:
                return "text-neutral-300 bg-neutral-700 hover:bg-neutral-600";
        }
    }
</script>

<button 
    class="px-5 py-3 tracking-widest font-bold rounded-md transition-all select-none {getTextSize(size)} {getButtonColour(type)} {className}"
    disabled={type === "disabled"}
    on:click
>
    {text.toUpperCase()}
</button>