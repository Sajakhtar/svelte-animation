<script>
  import { fade, blur, slide, fly } from 'svelte/transition';

  // Svelte built in animations
  // fade -> opacity 0 to 1
  // blur -> opacity and blue
  // fly -> x and why position and opacity
  // slide -> height (like an acordion)
  // scale -> start: scale, opacity
  // draw -> draw SVG
  // Can write custom animation functions


  let isReady = false;
	export let name;
</script>

<main>
  <button on:click={() => isReady = !isReady}>Fade</button>

  <!-- initial load transtion animation (set in 'intro:true' in main.js) -->
  <h1 transition:fade>Hello {name}! (on initial load)</h1>

  <!-- css transition animation -->
  <h1 class:hidden={!isReady}>CSS transition!</h1>

  <!-- mounting & unmounting (the DOM) transition animation-->
  {#if isReady}
  <h1 transition:fade={{ delay: 500, duration: 500}}>Fade!</h1>
  <h1 transition:blur={{ opacity: 1, amount: 200  }}>blur!</h1>
  <h1 transition:slide>slide! accordion</h1>
  <h1 transition:fly={{ y: 100, x: -100 }}>Fly!</h1>
  {/if}

  <!-- in and out animations -->
  {#if isReady}
  <h2 in:fly={{ y: 200 }} out:fade >Fly in and fade out!</h2>
  {/if}



</main>

<style>

  .hidden {
    opacity: 0;
    transition: 0.3s ease opacity;
  }

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
