<script>
  import { fade } from 'svelte/transition';

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
  {#if isReady}
    <h1 transition:fade>Hello {name}!</h1>
  {/if}
  <button on:click={() => isReady = !isReady}>Fade</button>
</main>

<style>
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
