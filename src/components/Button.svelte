<script lang="ts">
    let className: string = "";
	export { className as class };
    export let text: string = "Button";
</script>

<button class="px-5 py-3 font-bold tracking-wider rounded-md bg-neutral-700 hover:bg-neutral-600 transition-all {className}">
    {text.toUpperCase()}
</button>