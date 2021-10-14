<script>
  import { onMount } from 'svelte';
  import { fade, blur, slide, fly } from 'svelte/transition';
  import { bounceOut } from 'svelte/easing';
  import { custom } from './custom';
  import { alert } from './alert';

  import Nav from './Nav.svelte';
  import Toast from './Toast.svelte';
  import Modal from './Modal.svelte';
  import Box from './Box.svelte';
  import Cross from './Cross.svelte';


  // Svelte built in animations
  // fade -> opacity 0 to 1
  // blur -> opacity and blue
  // fly -> x and why position and opacity
  // slide -> height (like an acordion)
  // scale -> start: scale, opacity
  // draw -> draw SVG
  // Can write custom animation functions


	// export let name;
  let isReady = false;
  let isNavOpen = false;
  let isModalOpen = false;
  let isCardActive = false;
  let y;
  let cubes = [...Array(10).keys()];

  function toggleNav() {
    isNavOpen = !isNavOpen;
  }

  function toggleAlert() {
    alert.set({
      isActive: !$alert.isActive,
      text: "alert from button click",
    })
  }

  function toggleModal() {
    isModalOpen = !isModalOpen
  }

  // function onScroll() {
  //   console.log(window.pageYOffset);
  //   const scrollPosition = window.pageYOffset;

  //   if(scrollPosition > 180) {
  //     isCardActive = true;
  //   }
  // }

  // function addScrollEvent() {
  //   window.addEventListener('scroll', onScroll, { passive: true  });
  // }

  // onMount(() => {
  //   // Registers scroll event
  //   addScrollEvent();
  // });

  // svelte reactive statement for scroll
  $: if(y > 180) {
    isCardActive = true;
  }

</script>

<svelte:window bind:scrollY={y} />


{#if isNavOpen}
  <Nav {toggleNav} />
{/if}

<main>
  <button on:click={toggleNav}>Menu</button>
  <button on:click={toggleAlert}>Alert</button>
  <button on:click={toggleModal}>Modal</button>

  <Box />

  <!-- <button on:click={() => isReady = !isReady}>Fade</button> -->

  <!-- initial load transtion animation (set in 'intro:true' in main.js) -->
  <!-- <h1 transition:fade>Hello {name}! (on initial load)</h1> -->

  <!-- css transition animation -->
  <!-- <h1 class:hidden={!isReady}>CSS transition!</h1> -->

  <!-- mounting & unmounting (the DOM) transition animation-->
  <!-- {#if isReady}
  <h1 transition:fade={{ delay: 500, duration: 500}}>Fade!</h1>
  <h1 transition:blur={{ opacity: 1, amount: 200  }}>blur!</h1>
  <h1 transition:slide>slide! accordion</h1>
  <h1 transition:fly={{ y: 100, x: -100 }}>Fly!</h1>
  {/if} -->

  <!-- in and out animations -->
  <!-- {#if isReady}
  <h2 in:fly={{ y: 200 }} out:fade >Fly in and fade out!</h2>
  {/if} -->


  <!-- custom animations using t= 0 to 1 in custom.js -->
  <!-- {#if isReady}
  <h2  transition:custom={{ delay: 2000}} >Custom transition</h2>
  {/if} -->

  <!-- <div class="card">
    <h3>Card 1</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, veritatis.</p>
  </div>

  {#if isCardActive}
    <div transition:fly class="card">
      <h3>Card 2 Fly Mount</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, veritatis.</p>
    </div>
  {/if}

  <div class="card">
    <h3>Card 3</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, veritatis.</p>
  </div>

  <div class:hidden={!isCardActive} transition:fly class="card">
    <h3>Card 4 Fly Class directive</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, veritatis.</p>
  </div>

  <div class="card">
    <h3>Card 5</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, veritatis.</p>
  </div>

  <div class="card">
    <h3>Card 6</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, veritatis.</p>
  </div> -->

  <Cross />

  <div class="grid">
    {#each cubes as cube, i}
      <div transition:fly={{ y: 100, duration: 1000, delay: i * 100, easing: bounceOut}} class="box"></div>
    {/each}
  </div>

</main>

<Toast />

{#if isModalOpen}
  <Modal {toggleModal}>
    <p>From the app</p>
    <button>Do something</button>
  </Modal>
{/if}


<style>

  /* .hidden {
    opacity: 0;
    transition: 0.3s ease opacity;
  }

  .card {
    transition: 0.3s ease opacity;
  } */

  .box {
    background: var(--primary);
    box-shadow: var(--level-2);
    height: 100px;
    width: 100px;
  }

  .grid {
    --gridCols: 5;
    grid-gap: 20px;
  }

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	/* h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	} */

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
