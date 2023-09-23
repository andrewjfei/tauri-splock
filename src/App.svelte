<script lang="ts">
  import BreakClock from './components/BreakClock.svelte';
  import Button from './components/Button.svelte';
  import GameClock from './components/GameClock.svelte';
  import GameInterval from './components/GameInterval.svelte';
  import ShotClock from './components/ShotClock.svelte';
</script>

<main class="p-4 h-screen w-full grid grid-rows-4 gap-y-4">
  <div class="row-span-1 grid grid-cols-10 gap-x-4">
    <GameInterval class="col-span-3" />
    <GameClock class="col-span-4" />
  </div>
  <div class="row-span-3 grid grid-cols-10 gap-x-4">
    <ShotClock class="col-span-3" />
    <div class="col-span-4 grid grid-rows-5 gap-y-4">
      <Button class="row-span-1" text="Reset" />
      <div class="row-span-1 flex gap-x-4">
        <Button class="flex-1" text="- Min" />
        <Button class="flex-1" text="+ Min" />
      </div>
      <div class="row-span-1 flex gap-x-4">
        <Button class="flex-1" text="- Sec" />
        <Button class="flex-1" text="+ Sec" />
      </div>
      <Button class="row-span-2" type="primary" text="Start" />
    </div>
    <BreakClock class="col-span-3" />
  </div>
  <!-- <Button text="Reset"/> -->
  <!-- <h1>Welcome to Tauri!</h1>

  <div class="row">
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo vite" alt="Vite Logo" />
    </a>
    <a href="https://tauri.app" target="_blank">
      <img src="/tauri.svg" class="logo tauri" alt="Tauri Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank">
      <img src="/svelte.svg" class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>

  <p>
    Click on the Tauri, Vite, and Svelte logos to learn more.
  </p>

  <div class="row">
    <Greet />
  </div> -->


</main>