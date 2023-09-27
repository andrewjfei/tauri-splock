<script lang="ts">
    import { IconCaretLeftFilled, IconCaretRightFilled } from "@tabler/icons-svelte";

    let className: string = "";
    let direction: string = "left";
    let type: string = "default";

    export { className as class, direction, type };

    function getClass() {
        return "w-10 h-10 inline-block transition-all cursor-pointer";
    }

    function getButtonColour(type: string) {
        switch (type) {
            case "primary": 
                return "text-orange-600 hover:text-orange-500";
            case "disabled": 
                return "text-neutral-700 hover:cursor-default";
            default:
                return "text-neutral-300 hover:text-neutral-400";
        }
    }
</script>

<button class="{className}" disabled={type === "disabled"} on:click >
    {#if direction === "right"}
        <IconCaretRightFilled class="{getClass()} {getButtonColour(type)} {className}" />
    {:else}
        <IconCaretLeftFilled class="{getClass()} {getButtonColour(type)} {className}" />
    {/if}
</button>