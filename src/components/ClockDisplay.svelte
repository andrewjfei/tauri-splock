<script lang="ts">
    let className: string = "";
    let clockTime: string = "24";
	export { className as class, clockTime};
</script>

<div class="px-5 py-3 inline-block tracking-wider font-semibold text-5xl text-orange-600 rounded-md bg-neutral-900 {className}">
    {clockTime}
</div>