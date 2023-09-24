<script lang="ts">
    import BreakClock from "./components/BreakClock.svelte";
    import Button from "./components/Button.svelte";
    import GameClock from "./components/GameClock.svelte";
    import GameInterval from "./components/GameInterval.svelte";
    import ShotClock from "./components/ShotClock.svelte";
    import { DEFAULT_GAME_INTERVAL_CLOCK_TIME, addMinuteToGameClock, addSecondToGameClock, gameClockTime, isBreakClockRunning, isGameClockRunning, resetGameClock, startClockTime, stopClockTime, subtractMinuteFromGameClock, subtractSecondFromGameClock } from "./stores/ClockStore";
</script>

<main class="h-screen w-full p-4 grid grid-rows-4 gap-y-4">
    <div class="row-span-1 grid grid-cols-10 gap-x-4">
        <GameInterval class="col-span-3" />
        <GameClock class="col-span-4" />
    </div>
    <div class="row-span-3 grid grid-cols-10 gap-x-4">
        <ShotClock class="col-span-3" />
        <div class="col-span-4 grid grid-rows-5 gap-y-4">
            <Button 
                class="row-span-1" 
                type={$isGameClockRunning ? "disabled" : "default"} 
                size="lg"
                text="Reset"
                on:click={resetGameClock}
            />
            <div class="row-span-1 flex gap-x-4">
                <Button 
                    class="flex-1" 
                    type={$isGameClockRunning || $gameClockTime <= 0 ? "disabled" : "default"} 
                    size="lg" 
                    text="- Min" 
                    on:click={subtractMinuteFromGameClock}
                />
                <Button 
                    class="flex-1" 
                    type={$isGameClockRunning || $gameClockTime >= DEFAULT_GAME_INTERVAL_CLOCK_TIME ? "disabled" : "default"} 
                    size="lg" 
                    text="+ Min" 
                    on:click={addMinuteToGameClock}
                />
            </div>
            <div class="row-span-1 flex gap-x-4">
                <Button 
                    class="flex-1"
                    type={$isGameClockRunning || $gameClockTime <= 0 ? "disabled" : "default"} 
                    size="lg" 
                    text="- Sec" 
                    on:click={subtractSecondFromGameClock}
                />
                <Button 
                    class="flex-1" 
                    type={$isGameClockRunning || $gameClockTime >= DEFAULT_GAME_INTERVAL_CLOCK_TIME ? "disabled" : "default"} 
                    size="lg"
                    text="+ Sec" 
                    on:click={addSecondToGameClock}
                />
            </div>
            <Button 
                class="row-span-2" 
                type={$gameClockTime <= 0 || $isBreakClockRunning ? "disabled" : "primary"} 
                size="lg" 
                text={$isGameClockRunning ? "Stop": "Start"} 
                on:click={$isGameClockRunning ? stopClockTime : startClockTime}
            />
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