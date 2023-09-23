<script lang="ts">
    import Bullet from "./Bullet.svelte";

    let className: string = "";
    let currentInterval: number = 1;
    let totalIntervals: number = 4;

	export { className as class, currentInterval, totalIntervals };
</script>

<div class="flex justify-center gap-x-4 xl:gap-x-5 3xl:gap-x-6 {className}">
    {#each Array(totalIntervals) as _, i}
        <Bullet active={i < currentInterval} />
    {/each}
</div>