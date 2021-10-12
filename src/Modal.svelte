<script>
  import { scale, fly } from 'svelte/transition';
  import { drag } from './drag';
  export let toggleModal;
</script>

<div class="modal">
  <div class="card" use:drag transition:fly={{ y: 40 }}>
    <button on:click={toggleModal} class="drawer--close">X</button>
    <slot />
  </div>
  <div on:click={toggleModal} class="background" transition:scale={{ start: 1.5, duration: 2000 }} />
</div>


<style>
  .modal {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    /* background-color: rgba(0,0,0,0.6); */
  }

  .card {
    position: relative;
    text-align: center ;
  }

  .background {
    /* background: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.8)) ; */
    background: linear-gradient(142deg, var(--red) 3.62%, var(--green) 100%);
    opacity: 0.8;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
</style>
