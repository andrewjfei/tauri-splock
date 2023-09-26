<script lang="ts">
    let className: string = "";
    let active: boolean = false;

    export { className as class, active };

    function getBackgrounColour(active: boolean) {
        return active ? "bg-orange-500" : "bg-neutral-500";
    }
</script>

<div class="w-9 lg:w-12 3xl:w-14 h-3 lg:h-4 3xl:h-5 rounded-lg 3xl:rounded-xl {getBackgrounColour(active)} {className}" />
