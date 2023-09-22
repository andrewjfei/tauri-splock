<script lang="ts">
    let className: string = "";
    let active: boolean = false;

	export { className as class, active };

    function getClass() {
        return active ? "bg-orange-500" : "bg-neutral-500";
    }
</script>

<div class="w-9 h-3 rounded-lg {getClass()} {className}" />