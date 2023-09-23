<script lang="ts">
    let className: string = "";
    let type: string = "default";
    let text: string = "Button";

	export { className as class, type, text };

    function getClass() {
        switch (type) {
            case "primary": 
                return "text-neutral-200 bg-orange-600 hover:bg-orange-500";
            default:
                return "text-neutral-300 bg-neutral-700 hover:bg-neutral-600";
        }
    }
</script>

<button class="px-5 py-3 font-bold tracking-wider rounded-md {getClass()} transition-all select-none {className}">
    {text.toUpperCase()}
</button>