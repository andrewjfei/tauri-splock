<script lang="ts">
    import { getTextSize } from "../utils/TailwindCSSUtil";

    let className: string = "";
    let size: string = "md";
    let text: string = "Label";

    export { className as class, size, text };
</script>

<p class="font-black tracking-widest text-center {getTextSize(size)} text-neutral-200 select-none hover:cursor-default {className}">
    {text.toUpperCase()}
</p>